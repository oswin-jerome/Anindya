<?php

use App\Http\Controllers\PaintingController;
use App\Http\Controllers\ProfileController;
use App\Http\Resources\PaintingResource;
use App\Models\Painting;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $paintings = Painting::where("active", "=", true)->get();

    return Inertia::render('LandingPage', [
        "paintings" => PaintingResource::collection($paintings)->collection
    ]);
})->name("landing");
Route::get('/about', function () {
    return Inertia::render('AboutPage');
})->name("about");
Route::get('/paintings', function () {
    $paintings = Painting::where("active", "=", true)->get();


    return Inertia::render('PaintingsPage', [
        "paintings" => PaintingResource::collection($paintings)->collection

    ]);
})->name("paintings.page");
Route::get('/paintings/{painting}', function (Painting $painting) {

    return Inertia::render('PaintingDetailsPage', [
        "painting" => new PaintingResource($painting),
        "child_paintings" => PaintingResource::collection($painting->childPaintings)->collection
    ]);
})->name("paintings.details");

Route::get('/contact', function () {
    return Inertia::render('ContactPage');
})->name("contact");

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::prefix("admin")->group(function () {
        Route::resource("paintings", PaintingController::class);
    });
});

require __DIR__ . '/auth.php';
