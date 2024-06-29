<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Mailer1 extends Mailable
{
    use Queueable, SerializesModels;
    public $data;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data = [])
    {
        $this->data = $data;
    }

    public function build()
    {
        $email = $this->data['email'];
        $subject = $this->data['subject'];
        $data = $this->data;
        if ($this->data['type'] === "admin") {
            return $this->subject($data['subject'])->markdown('emails.welcome_sub')->with($data);
        } else {
            return $this->subject($data['subject'])->markdown('emails.welcome')->with($data);
        }
    }
}
