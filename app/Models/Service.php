<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * 
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service query()
 * @mixin \Eloquent
 */
class Service extends Model
{
    protected $fillable = ['name', 'slug', 'category', 'description', 'sub_services'];

    protected $casts = [
        'sub_services' => 'array',
    ];
}
