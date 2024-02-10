<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePaintingRequest;
use App\Http\Requests\UpdatePaintingRequest;
use App\Models\Painting;

class PaintingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePaintingRequest $request)
    {
        //
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePaintingRequest $request, Painting $painting)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Painting $painting)
    {
        //
    }
}
