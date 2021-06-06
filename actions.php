<?php
/**
 * @return array
 */
function getDishes()
{
    return [
        [
            "id" => 1,
            "name" => "Pizza",
            "kitchen" => "Italian",
        ],
        [
            "id" => 2,
            "name" => "Pancake",
            "kitchen" => "Dutch",
        ],
        [
            "id" => 3,
            "name" => "Hotdog",
            "kitchen" => "American",
        ],
        [
            "id" => 4,
            "name" => "Doner Kebab",
            "kitchen" => "Turkish",
        ],
        [
            "id" => 5,
            "name" => "Chickenwings",
            "kitchen" => "American",
        ],
        [
            "id" => 6,
            "name" => "Spaghetti",
            "kitchen" => "Italian",
        ],
        [
            "id" => 7,
            "name" => "Soup",
            "kitchen" => "French",
        ],
        [
            "id" => 8,
            "name" => "Hamburger",
            "kitchen" => "American",
        ],
        [
            "id" => 9,
            "name" => "Meatball",
            "kitchen" => "Sweden"
        ],
        [
            "id" => 10,
            "name" => "Sandwich",
            "kitchen" => "English",
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getDishDetails($id)
{
    $tags = [
        1 => [
            "recipe" => "Put it in the oven and go!",
            "tags" => ['cheese', ' oven']
        ],
        2 => [
            "recipe" => "I hear the children cheering!",
            "tags" => ['easy', ' better with extra stuff']
        ],
        3 => [
            "recipe" => "Make it yourself or get it from your local hotdog stand!",
            "tags" => ['unox', ' meat', ' easy']
        ],
        4 => [
            "recipe" => "Everytime in the city after midnight",
            "tags" => ['kapsalon', ' tasty', ' meat']
        ],
        5 => [
            "recipe" => "Fresh out of the oven.",
            "tags" => ['meat', ' easy', ' better with extra stuff']
        ],
        6 => [
            "recipe" => "Even better with number 9",
            "tags" => ['cheese', ' meat']
        ],
        7 => [
            "recipe" => "Unox is a great solution to all your soup problems",
            "tags" => ['unox', ' easy']
        ],
        8 => [
            "recipe" => "A sandwich with some cooked meat",
            "tags" => ['easy', ' meat', ' cheese']
        ],
        9 => [
            "recipe" => "Just meat...",
            "tags" => ['meat', ' easy']
        ],
        10 => [
            "recipe" => "Get is from your local SubWay",
            "tags" => ['meat', ' cheese', ' easy']
        ],
    ];

    return $tags[$id];
}