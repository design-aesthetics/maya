<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Mailer1;
use Bugsnag\BugsnagLaravel\Facades\Bugsnag;
use RuntimeException;


class MailController extends Controller
{
    public function store(Request $request)
    {
        // validate request
        $this->validate($request, [
            'name' => 'required|string|max:50',
            'email' => 'required|email:rfc,dns,filter|max:255|spammail',
            'phone' => 'required|min:9|numeric',
            'subject' => 'nullable|string|max:50',
            'message' => 'required|string|max:500',
            'g-recaptcha-response' => 'required|recaptchav3:contact,0.5',
        ]);

        foreach ($request->all() as $key => $value) {
            if (strpos($value, 'http') !== false) {
                return redirect()->back()->withErrors([
                    $value => 'URLs are not allowed in this field.',
                ]);
            } elseif (strpos($value, '<script>') !== false) {
                return redirect()->back()->withErrors([
                    $value => 'Scripts are not allowed in this field.',
                ]);
            } elseif (strpos($value, '<iframe>') !== false) {
                return redirect()->back()->withErrors([
                    $value => 'Iframes are not allowed in this field.',
                ]);
            }
        }

        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'subject' => $request->subject,
            'message' => $request->message,

            'subject' => 'New Submission',
            'type' => 'admin'
        ];

        //Goes to admin
        Mail::to('info@mayaskinandbodycare.com')->send(new Mailer1($data));
        // Mail::to('marco@aes-studio.com')->send(new Mailer1($data));

        return redirect()->to('/contact')->with('message', 'Thanks for your message. We\'ll be in touch.');
    }

    public function newsletter(Request $request)
    {
        // validate request
        $this->validate($request, [
            'email' => 'required|email:rfc,dns,filter|max:255|spammail',
            'option' => 'required',
            'g-recaptcha-response' => 'required|recaptchav3:newsletter,0.5',
        ]);

        $data = [
            'email' => $request->email,
            'subject' => 'Newsletter Subscription',
            'option' => $request->option,
            'type' => 'newsletter'
        ];
        //Goes to admin
        // Mail::to('marco@aes-studio.com')->send(new Mailer1($data));
        Mail::to('info@mayaskinandbodycare.com')->send(new Mailer1($data));
        return redirect()->to('/#newsletter-index')->with('message', 'Thanks for your subscription. We\'ll be in touch.');
    }
    /** @testing emails */
    // function email_contains_name_and_message_content()
    // {
    //     $mailer1 = new Mailer1($data);
    //     $rendered = $this->render($mailer1);

    //     $this->assertStringContainsString('Name: ' . $data['name'], $rendered);
    //     $this->assertStringContainsString('Message: ' . $data['message'], $rendered);
    // }

    // private function render($mailable)
    // {
    //     $mailable->build();
    //     return view($mailable->view, $mailable->buildViewData())->render();
    // }
}
