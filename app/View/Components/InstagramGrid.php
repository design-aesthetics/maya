<?php

namespace App\View\Components;

use Illuminate\View\Component;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class InstagramGrid extends Component
{
    public $posts;

    public function __construct()
    {
        $this->posts = $this->getInstagramPosts();
    }

    public function render()
    {
        return view('components.instagram-grid');
    }

    private function getInstagramPosts()
    {
        $instagramDir = 'public/instagram';
        $directories = Storage::directories($instagramDir);

        $posts = [];
        foreach ($directories as $dir) {
            $files = Storage::files($dir);
            $imageFile = collect($files)->first(function ($file) {
                return pathinfo($file, PATHINFO_EXTENSION) === 'jpg';
            });

            if ($imageFile) {
                $posts[] = [
                    'image' => Storage::url($imageFile),
                    'date' => Carbon::createFromFormat('Ymd_His', basename($dir)),
                ];
            }
        }

        // Sort posts by date, newest first
        usort($posts, function ($a, $b) {
            return $b['date']->timestamp - $a['date']->timestamp;
        });

        return array_slice($posts, 0, 4); // Return only the latest 4 posts
    }
}
