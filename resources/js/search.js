document.addEventListener('DOMContentLoaded', function () {
    const filterForm = document.getElementById('filterForm');
    const searchInput = document.querySelector('input[name="search"]');
    const categorySelect = document.getElementById('category');
    const brandSelect = document.getElementById('brand');
    const searchResults = document.getElementById('searchResults');
    const paginationContainer = document.getElementById('pagination');

    function handleCategoryChange() {
        const selectedCategory = categorySelect.value;
        if (selectedCategory) {
            const categorySlug = categorySelect.options[categorySelect.selectedIndex].getAttribute('data-slug');
            window.location.href = `/products/category/${categorySlug}`;
        } else {
            performSearch();
        }
    }

    function handleBrandChange() {
        const selectedBrand = brandSelect.value;
        if (selectedBrand) {
            const brandSlug = brandSelect.options[brandSelect.selectedIndex].getAttribute('data-slug');
            window.location.href = `/products/brand/${brandSlug}`;
        } else {
            performSearch();
        }
    }
    // Check if the page was directly accessed
    if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_NAVIGATE) {
        if (window.location.pathname.startsWith('/products/search/')) {
            window.location.href = '/products';
            return;
        }
    }

    function performSearch(page = 1) {
        if (!filterForm) return;
        const formData = new FormData(filterForm);
        formData.set('page', page);

        // Show loading indicator
        searchResults.innerHTML = '<p>Loading...</p>';

        // First, get a search token
        fetch('/products/search-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify(Object.fromEntries(formData))
        })
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return response.json();
            })
            .then(data => {
                if (data.error) throw new Error(data.error);
                if (data.redirect) {
                    window.location.href = data.redirect;
                    return;
                }
                window.history.pushState({}, '', `/products/search/${data.token}`);
                return fetch(`/products/search/${data.token}`, {
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                });
            })
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return response.json();
            })
            .then(data => {
                if (data.error) throw new Error(data.error);
                updateSearchResults(data.products);
                updatePagination(data.pagination);
            })
            .catch(error => {
                console.error('Error:', error);
                searchResults.innerHTML = `<p>Error: ${error.message}</p>`;
            });
    }

    function updateSearchResults(products) {
        if (!Array.isArray(products) || products.length === 0) {
            searchResults.innerHTML = '<p>No products found</p>';
            return;
        }

        const resultsHtml = products.map(product => {
            if (!product || !product.brand) {
                console.error('Invalid product data:', product);
                return '';
            }
            const price = typeof product.price === 'number' ? product.price.toFixed(2) : parseFloat(product.price).toFixed(2);
            return `
                <div class="group relative overflow-hidden">
                    <a href="/products/${product.brand.slug}/${product.slug}" class="absolute inset-0 z-10">
                        <span class="sr-only">View</span>
                    </a>
                    <img src="${product.image_url || ''}" alt="${product.name || ''}" width="400" height="300" class="h-64 w-full bg-slate-100 object-cover" />
                    <div class="bg-white py-2">
                        <p class="mt-2 max-w-sm text-h5 font-medium capitalize text-gray-800">${product.name || ''}</p>
                        <p class="mt-1 text-gray-600">$${price}</p>
                    </div>
                </div>
            `;
        }).join('');

        searchResults.innerHTML = resultsHtml || '<p>No valid products found</p>';
    }

    function updatePagination(paginationData) {
        if (!paginationContainer) return;

        const { current_page, last_page } = paginationData;
        let paginationHtml = '';

        for (let i = 1; i <= last_page; i++) {
            paginationHtml += `
                <button class="pagination-button ${i === current_page ? 'active' : ''}"
                        data-page="${i}">${i}</button>
            `;
        }

        paginationContainer.innerHTML = paginationHtml;

        // Add event listeners to pagination buttons
        const paginationButtons = paginationContainer.querySelectorAll('.pagination-button');
        paginationButtons.forEach(button => {
            button.addEventListener('click', function () {
                const page = this.getAttribute('data-page');
                performSearch(page);
            });
        });
    }
    // Event listeners
    if (filterForm) {
        filterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            performSearch();
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', debounce(() => performSearch(), 300));
    }

    if (categorySelect) {
        categorySelect.addEventListener('change', handleCategoryChange);
    }

    if (brandSelect) {
        brandSelect.addEventListener('change', handleBrandChange);
    }

    // Additional filter inputs
    const additionalFilters = filterForm.querySelectorAll('select, input[type="checkbox"]');
    additionalFilters.forEach(filter => {
        filter.addEventListener('change', () => performSearch());
    });

    // Initial search on page load
    if (window.location.pathname.startsWith('/products/search/')) {
        performSearch();
    }

});

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
