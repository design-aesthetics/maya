<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::table('treatment_services', function (Blueprint $table) {
            $table->string('main_image')->nullable();
            $table->json('gallery_images')->nullable();
        });
    }

    public function down()
    {
        Schema::table('treatment_services', function (Blueprint $table) {
            $table->dropColumn('main_image');
            $table->dropColumn('gallery_images');
        });
    }
};
