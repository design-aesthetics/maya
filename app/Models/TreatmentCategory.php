<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * 
 *
 * @property int $id
 * @property string $name
 * @property string $slug
 * @property string|null $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $sort_order
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\TreatmentService> $services
 * @property-read int|null $services_count
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentCategory newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentCategory newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentCategory query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentCategory whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentCategory whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentCategory whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentCategory whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentCategory whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentCategory whereSortOrder($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TreatmentCategory whereUpdatedAt($value)
 * @mixin \Eloquent
 */
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
