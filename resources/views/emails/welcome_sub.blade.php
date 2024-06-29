@component('mail::message')
# You have a new email submission!


Name: {{ $name }} <br>
Email: {{ $email }} <br>
Phone: {{ $phone }} <br>
Subject: {{ $subject }}<br>
Message: {{ $message }}

@endcomponent
