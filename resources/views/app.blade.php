<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Primary Meta Tags -->
    <title>Anindya Mukherjee</title>
    <meta name="title" content="Anindya Mukherjee" />
    <meta name="description"
        content="My art is a celebration of the unique interplay between colors, textures, and forms, reflecting my personal interpretation of the world. Each painting is a canvas where I pour my heart and soul, creating visual narratives that resonate with both the subtle and profound aspects of existence." />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://anindya.oswinjerome.in/" />
    <meta property="og:title" content="Anindya Mukherjee" />
    <meta property="og:description"
        content="My art is a celebration of the unique interplay between colors, textures, and forms, reflecting my personal interpretation of the world. Each painting is a canvas where I pour my heart and soul, creating visual narratives that resonate with both the subtle and profound aspects of existence." />
    <meta property="og:image" content="https://anindya.oswinjerome.in/images/artist2.jpeg" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://anindya.oswinjerome.in/" />
    <meta property="twitter:title" content="Anindya Mukherjee" />
    <meta property="twitter:description"
        content="My art is a celebration of the unique interplay between colors, textures, and forms, reflecting my personal interpretation of the world. Each painting is a canvas where I pour my heart and soul, creating visual narratives that resonate with both the subtle and profound aspects of existence." />
    <meta property="twitter:image" content="https://anindya.oswinjerome.in/images/artist2.jpeg" />

    <!-- Meta Tags Generated with https://metatags.io -->

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class=" antialiased bg-app-bg text-base">
    @inertia
</body>

</html>
