<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>moCal Dashboard</title>
    @include('elements.style')
    @livewireStyles
</head>
<body>
    @include('elements.sidebar')
    <livewire:calendar-component />
    @livewireScripts
</body>
</html>
@include('elements.js')
