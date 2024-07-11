<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class DownloadInstagramPosts extends Command
{
    protected $signature = 'instagram:download-posts';
    protected $description = 'Download latest Instagram posts using instaloader';

    public function handle()
    {
        $prodPythonScript = storage_path('app/scripts/instagram_downloader.py');
        $localPythonScript = storage_path('app/scripts/instagram_downloader.py');

        // Determine the Python interpreter based on the environment
        if (app()->environment('production')) {
            $pythonInterpreter = "/app/venv/bin/python";
            $command = "{$pythonInterpreter} {$prodPythonScript}";
            $output = shell_exec($command);
            $this->info('Instagram posts downloaded successfully.');
            $this->info($output);
        } else {
            $pythonInterpreter = "python3";
            $command = "{$pythonInterpreter} {$localPythonScript}";
            $output = shell_exec($command);
            $this->info('Instagram posts downloaded successfully.');
            $this->info($output);
        }
    }
}
