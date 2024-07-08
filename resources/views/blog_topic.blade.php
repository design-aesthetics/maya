@extends('layouts.app')

@section('content')
<h1>{{ $topic->name }}</h1>

@foreach ($posts as $post)
<div>
    <h2><a href="{{ route('blog.show', $post->slug) }}">{{ $post->title }}</a></h2>
    <p>{{ $post->summary }}</p>
</div>
@endforeach

{{ $posts->links() }}
@endsection