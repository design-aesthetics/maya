<?php

namespace App\View\Components;

use Carbon\Carbon;
use Illuminate\View\Component;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

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
            try {
                $post = $this->getPostData($dir);
                if ($post) {
                    $posts[] = $post;
                }
            } catch (\Exception $e) {
                Log::error("Error processing directory $dir: " . $e->getMessage());
            }
        }

        // Sort posts by date, newest first
        usort($posts, function ($a, $b) {
            return $b['date']->timestamp - $a['date']->timestamp;
        });

        return array_slice($posts, 0, 4); // Return only the latest 4 posts
    }

    private function getPostData($dir)
    {
        $files = Storage::files($dir);

        $imageFile = $this->getFileByExtension($files, 'jpg');
        if (!$imageFile) {
            Log::warning("No image file found in directory: $dir");
            return null;
        }

        $jsonFile = $this->getFileByExtension($files, 'json');
        if (!$jsonFile) {
            Log::warning("No JSON file found in directory: $dir");
            return null;
        }

        $jsonData = $this->getJsonData($jsonFile);
        if (!$jsonData) {
            return null;
        }

        return [
            'image' => Storage::url($imageFile),
            'date' => Carbon::createFromFormat('Ymd_His', basename($dir)),
            'url' => $jsonData['url'],
            'likeCount' => $jsonData['likeCount'],
        ];
    }

    private function getFileByExtension($files, $extension)
    {
        return collect($files)->first(function ($file) use ($extension) {
            return pathinfo($file, PATHINFO_EXTENSION) === $extension;
        });
    }

    private function getJsonData($jsonFile)
    {
        try {
            $jsonContent = Storage::get($jsonFile);
            $jsonData = json_decode($jsonContent, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                Log::error("JSON decode error for file $jsonFile: " . json_last_error_msg());
                return null;
            }

            $shortcode = $jsonData['node']['shortcode'] ?? null;
            $likeCount = $jsonData['node']['edge_media_preview_like']['count'] ?? null;

            return [
                'url' => $shortcode ? "https://www.instagram.com/p/{$shortcode}/" : null,
                'likeCount' => $likeCount,
            ];
        } catch (\Exception $e) {
            Log::error("Error processing JSON file $jsonFile: " . $e->getMessage());
            return null;
        }
    }
}
