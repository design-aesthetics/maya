<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = ['name', 'slug', 'category', 'description', 'sub_services'];

    protected $casts = [
        'sub_services' => 'array',
    ];
}
