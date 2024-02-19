<?php

use App\Http\Resources\PaintingResource;
use App\Mail\ContactForm;
use App\Models\Painting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get("/featured", function () {
    $paintings = Painting::where("active", "=", true)->get();

    return response()->json(PaintingResource::collection($paintings)->collection);
});

Route::get("/paintings", function () {
    $paintings = Painting::where("active", "=", true)->get();

    return response()->json(PaintingResource::collection($paintings)->collection);
});

Route::get("/paintings/{painting:slug}", function (Painting $painting) {


    return response()->json([
        "painting" => new PaintingResource($painting),
        "child_paintings" => PaintingResource::collection($painting->childPaintings)->collection
    ]);
});


Route::post('/contact', function (Request $request) {

    Mail::to("anindyaartist17@gmail.com")->send(new ContactForm($request->get("name"), $request->get("email"), $request->get("phone"), $request->get("message"),));

    return back();
});
