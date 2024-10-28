<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Illuminate\Support\Facades\DB;

class Product extends Model
{
    use HasFactory, Searchable;

    protected $table = 'products';

    protected $fillable = [
        'brand_id',
        'name',
        'slug',
        'subtitle',
        'description',
        'price',
        'faqs'
    ];

    protected $casts = [
        'faqs' => 'array',
        'price' => 'decimal:2',
    ];

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_product', 'product_id', 'category_id')
            ->withPivot('category_id');
    }

    public function primaryImage()
    {
        return $this->images()->where('is_primary', true)->first();
    }

    // public function getImageUrlAttribute()
    // {
    //     return optional($this->primaryImage())->image_url ?? '/img/products/default_image.jpg';
    // }
    public function getImageUrlAttribute()
    {
        $imageUrl = optional($this->primaryImage())->image_url ?? '/img/products/default_image.jpg';
        return url($imageUrl);
    }

    /**
     * Get the indexable data array for the model.
     *
     * @return array
     */
    public function toSearchableArray()
    {
        $this->load('brand');

        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'brand' => [
                'id' => $this->brand->id,
                'name' => $this->brand->name,
            ],
            'price' => $this->price,
        ];
    }

    /**
     * Get a specific FAQ by question.
     */
    public function getFaq($question)
    {
        return $this->faqs[$question] ?? null;
    }

    /**
     * Set a specific FAQ.
     */
    public function setFaq($question, $answer)
    {
        $faqs = $this->faqs ?? [];
        $faqs[$question] = $answer;
        $this->faqs = $faqs;
    }
}
