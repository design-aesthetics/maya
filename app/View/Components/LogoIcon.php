<?php

namespace App\View\Components;

use Illuminate\View\Component;

class LogoIcon extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public $fill;
    public $height;
    public $width;
    public function __construct($fill = 'none', $height = 24, $width = 24)
    {
        $this->fill = $fill;
        $this->height = $height;
        $this->width = $width;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.logo-icon');
    }
}
