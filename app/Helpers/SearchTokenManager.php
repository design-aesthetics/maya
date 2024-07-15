<?php

namespace App\Helpers;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class SearchTokenManager
{
    public static function generateToken(array $searchParams)
    {
        try {
            $token = Str::random(32);
            Cache::put('search:' . $token, $searchParams, now()->addMinutes(30));
            return $token;
        } catch (\Exception $e) {
            // Log::error('Token generation error: ' . $e->getMessage());
            throw new \Exception('Failed to generate search token');
        }
    }

    public static function getSearchParams($token)
    {
        try {
            return Cache::get('search:' . $token);
        } catch (\Exception $e) {
            // Log::error('Token decoding error: ' . $e->getMessage());
            throw new \Exception('Failed to decode search token');
        }
    }
}
