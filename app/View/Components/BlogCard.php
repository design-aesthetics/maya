<?php

namespace App\View\Components;

use Illuminate\View\Component;

class BlogCard extends Component
{
    public $title;
    public $summary;
    public $author_name;
    public $featured_image;

    /**
     * @param string $title
     * @param string $summary
     * @param string $author_name
     * @param string|null $featured_image
     */

    public function __construct($title = "Default Title", $summary = "A sample summary of this blog post. Click and have a read!", $author_name = "Admin", $featured_image = null)
    {
        $this->title = $title;
        $this->summary = $summary;
        $this->author_name = $author_name;
        $this->featured_image = $featured_image;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.blog-card');
    }
}
