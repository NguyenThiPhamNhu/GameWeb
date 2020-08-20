<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

class GameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        for ($i=0;$i<2;$i++){
            
            DB::table('games')->insert(

        [
            'name' => Str::random(4),
            'image' => 'public/https://i.ytimg.com/vi/uODKrZnGk7g/maxresdefault.jpg',
            'comment' => Str::random(2),
            'evaluate' => Str::random(2),
            'detail'  =>Str::random(2),
           
        
        ]);
    }
    }
    }

