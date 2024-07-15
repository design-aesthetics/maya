const createFooterTreatmentsMenu = async () => {
    try {
        // Fetch treatments
        const treatmentsResponse = await fetch('/api/treatments-menu');
        if (!treatmentsResponse.ok) throw new Error('Network response was not ok for treatments');
        const treatmentsData = await treatmentsResponse.json();

        // Fetch brands
        const brandsResponse = await fetch('/api/brands');
        if (!brandsResponse.ok) throw new Error('Network response was not ok for brands');
        const brandsData = await brandsResponse.json();

        // Populate treatments
        const footerTreatmentsSection = document.querySelector('#footer-treatments');
        if (footerTreatmentsSection) {
            const treatmentsList = document.createElement('div');
            treatmentsList.className = 'flex flex-col gap-3';
            treatmentsData.forEach(category => {
                const link = document.createElement('a');
                link.href = `/treatments/${category.slug}`;
                link.className = 'hover-link';
                link.textContent = category.name;
                treatmentsList.appendChild(link);
            });
            footerTreatmentsSection.appendChild(treatmentsList);
        }

        // Populate brands
        const footerBrandsSection = document.querySelector('#footer-brands');
        if (footerBrandsSection) {
            const brandsList = document.createElement('div');
            brandsList.className = 'flex flex-col gap-3';
            brandsData.forEach(brand => {
                const link = document.createElement('a');
                link.href = `/brands/${brand.slug}`;
                link.className = 'hover-link';
                link.textContent = brand.name;
                brandsList.appendChild(link);
            });
            footerBrandsSection.appendChild(brandsList);
        }

    } catch (error) {
        // console.error('Error fetching menu data:', error);
    }
};

document.addEventListener('DOMContentLoaded', createFooterTreatmentsMenu);
