<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

/**
 *
 *
 * @property int $id
 * @property int $brand_id
 * @property string $name
 * @property string $slug
 * @property numeric $price
 * @property array|null $faqs
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $subtitle
 * @property string|null $description
 * @property-read \App\Models\Brand $brand
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Category> $categories
 * @property-read int|null $categories_count
 * @property-read mixed $image_url
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\ProductImage> $images
 * @property-read int|null $images_count
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereBrandId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereFaqs($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereSubtitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereUpdatedAt($value)
 * @mixin \Eloquent
 */
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
        $primaryImage = $this->images()
            ->where('is_primary', true)
            ->first();

        if (!$primaryImage) {
            return url('/img/products/default_image.jpg');
        }

        // Use request()->getSchemeAndHttpHost() instead of url()
        return request()->getSchemeAndHttpHost() . $primaryImage->image_url;
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
