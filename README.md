# maya
=======

About Page:
    TODO: Testimonials + Press + history

TODO: product/service page
TODO: products/services page
TODO: index page
    TODO:  Confirm contact form works


---


// Create a service with details
$service = TreatmentService::create([
    'category_id' => 1,
    'name' => 'Hydrating Facial',
    'slug' => 'hydrating-facial',
    'description' => 'A deeply hydrating facial treatment',
    'details' => [
        'How to use' => 'Apply once a week for best results',
        'Good for' => ['Dry skin', 'Dehydrated skin', 'Sensitive skin'],
        'Duration' => '60 minutes'
    ]
]);

// Access details
echo $service->details['How to use'];
// or
echo $service->getDetail('How to use');

// Add or update a detail
$service->setDetail('Recommended for', 'All skin types');
$service->save();
