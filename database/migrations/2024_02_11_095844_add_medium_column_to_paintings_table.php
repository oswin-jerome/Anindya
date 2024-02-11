<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('paintings', function (Blueprint $table) {
            $table->string("medium");
            $table->string("size");
            $table->unsignedBigInteger("painting_id")->nullable();
            $table->foreign("painting_id")->references("id")->on("paintings")->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('paintings', function (Blueprint $table) {
            //
        });
    }
};
