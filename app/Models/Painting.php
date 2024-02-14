<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Support\Str;

class Painting extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;
    protected $guarded = [];


    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('painting')->singleFile();
    }

    public function childPaintings()
    {
        return $this->hasMany(Painting::class, "painting_id");
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($painting) {
            $painting->slug = Str::slug($painting->title);
            // Str_sl
        });
    }
}
