<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TreatmentCategory extends Model
{
    use HasFactory;

    protected $table = 'treatment_categories';

    protected $fillable = [
        'name',
        'slug',
        'description'
    ];

    /**
     * Get the services for the category.
     */
    public function services()
    {
        return $this->hasMany(TreatmentService::class, 'category_id');
    }
}
