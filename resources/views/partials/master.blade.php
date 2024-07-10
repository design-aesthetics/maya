{{-- <x-stamp /> --}}
<!DOCTYPE html>
<html lang="en">

<head>
	@include("components.head")
</head>

<body>
	<header>
		@include("components.nav")

	</header>
	@yield("content")

	@include("components.footer")
</body>

</html>
