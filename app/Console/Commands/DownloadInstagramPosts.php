<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class DownloadInstagramPosts extends Command
{
    protected $signature = 'instagram:download-posts';
    protected $description = 'Download latest Instagram posts using instaloader';

    public function handle()
    {
        $pythonScript = storage_path('app/scripts/instagram_downloader.py');
        $command = "python3 {$pythonScript}";

        $output = shell_exec($command);
        $this->info('Instagram posts downloaded successfully.');
        $this->info($output);
    }
}
