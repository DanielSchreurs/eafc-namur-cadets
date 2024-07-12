<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default search index
    |--------------------------------------------------------------------------
    |
    | This option controls the search index that gets queried when performing
    | search functions without explicitly selecting another index.
    |
    */

    'default' => env('STATAMIC_DEFAULT_SEARCH_INDEX', 'default'),

    /*
    |--------------------------------------------------------------------------
    | Search Indexes
    |--------------------------------------------------------------------------
    |
    | Here you can define all of the available search indexes.
    |
    */

    'indexes' => [

        'default' => [
            'driver' => 'local',
            'searchables' => ['collection:courses'],
            'fields' => ['title', 'subtitle', 'course_name', 'type_delivered', 'duration', 'replicator_field'],
            'match_weights' => [
                'partial_word' => 1,
                'partial_first_word' => 2,
                'partial_word_start' => 1,
                'partial_first_word_start' => 2,
                'whole_word' => 5,
                'whole_first_word' => 5,
                'partial_whole' => 2,
                'partial_whole_start' => 2,
                'whole' => 10,
            ],
            'min_characters' => 3,
            'use_stemming' => true,
            'use_alternates' => true,
        ],

        // 'blog' => [
        //     'driver' => 'local',
        //     'searchables' => 'collection:blog',
        // ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Driver Defaults
    |--------------------------------------------------------------------------
    |
    | Here you can specify default configuration to be applied to all indexes
    | that use the corresponding driver. For instance, if you have two
    | indexes that use the "local" driver, both of them can have the
    | same base configuration. You may override for each index.
    |
    */

    'drivers' => [

        'local' => [
            'path' => storage_path('statamic/search'),
        ],

        'algolia' => [
            'credentials' => [
                'id' => env('ALGOLIA_APP_ID', ''),
                'secret' => env('ALGOLIA_SECRET', ''),
            ],
        ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Search Defaults
    |--------------------------------------------------------------------------
    |
    | Here you can specify default configuration to be applied to all indexes
    | regardless of the driver. You can override these per driver or per index.
    |
    */

    'defaults' => [
        'fields' => ['title'],
    ],





];
