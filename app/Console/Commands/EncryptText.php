<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class EncryptText extends Command
{
    protected $signature = 'text:encrypt {text}';

    protected $description = 'Encrypt a text and give a short version of it';

    private $secretPhrase = 'fromLia';
    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        if (app()->environment('local')) {
            $text = $this->argument('text');
            $hashed = $this->shortHash($text);

            $this->info("Hashed Text: $hashed");
        } else {
            $this->error('This command can only be run in the local environment.');
        }
    }

    private function shortHash($text)
    {
        $hashed = hash_hmac('sha256', $text, $this->secretPhrase);

        return substr($hashed, 0, 25);
    }
}
