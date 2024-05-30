<?php

namespace App\View\Components;

use Illuminate\View\Component;

class TreatmentProduct extends Component
{
    public $image;
    public $name;

    /**
     * @param string|null $image
     * @param string $name
     *
     * @return void
     */
    public function __construct($name = "Laser Hair Removal Small", $image = null)
    {
        $this->name = $name;
        $this->image = $image; 
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.treatment-product');
    }
}
