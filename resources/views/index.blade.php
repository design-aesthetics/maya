<!-- prettier-ignore-start -->
@extends('partials.master')
@section('title', 'Home')
@section('url', 'https://www.mayaskinandbodycare.com')
@section('robots', 'index, follow')
@section('descriptions', 'Rejuvenate yourself at Maya Skin & Body Care, located in the heart of Maple. We offer a wide range of personalized treatments designed to enhance your natural beauty and well-being. Experience the perfect blend of advanced techniques and luxurious care tailored just for you.')
<!-- prettier-ignore-end -->
@section("content")
	@include("sections.hero")
	@include("sections.product-card")
	<x-instagram-grid />
@endsection
