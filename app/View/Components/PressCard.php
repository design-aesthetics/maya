<?php

namespace App\View\Components;

use Illuminate\View\Component;

class PressCard extends Component
{
    public $title;
    public $summary;
    public $author_name;
    public $featured_image;
    public $source;

    /**
     * @param string $title
     * @param string $summary
     * @param string $author_name
     * @param string|null $featured_image
     * @param string $source
     */
    public function __construct($title = "Default Title", $summary = "A sample summary of this blog post. Click and have a read!", $author_name = "Admin", $featured_image = null, $source)
    {
        $this->title = $title;
        $this->summary = $summary;
        $this->author_name = $author_name;
        $this->featured_image = $featured_image;
        $this->featured_image = $source;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.press-card');
    }
}
