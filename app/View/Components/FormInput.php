<?php

namespace App\View\Components;

use Illuminate\View\Component;

class FormInput extends Component
{
    public $label;
    public $type;
    public $name;
    public $id;
    public $required;
    public $class;
    public $isTextarea;

    public function __construct($label, $type, $name, $id, $required = true, $class = '', $isTextarea = false)
    {
        $this->label = $label;
        $this->type = $type;
        $this->name = $name;
        $this->id = $id;
        $this->required = $required;
        $this->class = $class;
        $this->isTextarea = $isTextarea;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.form-input');
    }
}
