<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * 
 *
 * @property int $id
 * @property int $category_id
 * @property string $name
 * @property string $slug
 * @property string|null $description
 * @property array|null $details
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $main_image
 * @property array|null $gallery_images
 * @property int|null $parent_id
 * @property int $sort_order
 * @property-read \App\Models\TreatmentCategory $category
 * @property-read \Illuminate\Database\Eloquent\Collection<int, TreatmentService> $children
 * @property-read int|null $children_count
 * @property-read TreatmentService|null $parent
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentService newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentService newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentService query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentService whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentService whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentService whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentService whereDetails($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentService whereGalleryImages($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentService whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentService whereMainImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentService whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentService whereParentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentService whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentService whereSortOrder($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentService whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class TreatmentService extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'parent_id',
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
    public function parent()
    {
        return $this->belongsTo(TreatmentService::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(TreatmentService::class, 'parent_id');
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
    public function hasChildren()
    {
        return $this->children()->exists();
    }
}
