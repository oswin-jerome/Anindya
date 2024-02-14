<?php

namespace App\Console\Commands;

use App\Models\Painting;
use Illuminate\Console\Command;
use Illuminate\Support\Str;

class SlugPaint extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:slug-paint';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $paints = Painting::all();
        foreach ($paints as $key => $value) {
            $value->slug = Str::slug($value->title);
        }
    }
}
