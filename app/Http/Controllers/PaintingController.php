<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePaintingRequest;
use App\Http\Requests\UpdatePaintingRequest;
use App\Http\Resources\PaintingResource;
use App\Models\Painting;
use Inertia\Inertia;

class PaintingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $paintings = Painting::all();
        // return response(PaintingResource::collection($paintings)->collection);
        return Inertia::render("admin/PaintingsList", [
            "paintings" => PaintingResource::collection($paintings)->collection
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("admin/PaintingsCreate");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePaintingRequest $request)
    {
        $data =  $request->validated();

        $painting = Painting::create($request->except(["painting"]));
        $painting->addMedia($request->file("painting"))->toMediaCollection("painting");


        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Painting $painting)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Painting $painting)
    {
        return Inertia::render("admin/PaintingsEdit", [
            "painting" => $painting
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePaintingRequest $request, Painting $painting)
    {
        $data = $request->except(["painting"]);
        $painting->update($data);

        if ($request->has("painting")) {
            $painting->addMedia($request->file("painting"))->toMediaCollection("painting");
        }


        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Painting $painting)
    {
        //
    }
}
