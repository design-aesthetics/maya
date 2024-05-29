<?php

namespace App\View\Components;

use Illuminate\View\Component;

class ProductCard extends Component
{
    public $name;
    public $price;
    public $image;

    /**
     * @param string $name
     * @param string $price
     * @param string|null $image
     * 
     *
     * @return void
     */
    public function __construct($name = "Product name", $price = "00.00", $image = null )
    {
        $this->name = $name;  
        $this->price = $price;  
        $this->image = $image;  
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.product-card');
    }
}
