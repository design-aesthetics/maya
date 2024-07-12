<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TreatmentService extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'name',
        'slug',
        'description',
        'details',
        'main_image',
        'gallery_images'
    ];

    protected $casts = [
        'details' => 'array',
        'gallery_images' => 'array',
    ];

    /**
     * Get the category that owns the service.
     */
    public function category()
    {
        return $this->belongsTo(TreatmentCategory::class, 'category_id');
    }

    /**
     * Get a specific detail by key.
     */
    public function getDetail($key)
    {
        return $this->details[$key] ?? null;
    }

    /**
     * Set a specific detail.
     */
    public function setDetail($key, $value)
    {
        $details = $this->details ?? [];
        $details[$key] = $value;
        $this->details = $details;
    }
}
