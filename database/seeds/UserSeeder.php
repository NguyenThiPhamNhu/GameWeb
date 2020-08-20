<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0;$i<2;$i++){
            
            DB::table('users')->insert(

        [
            'name' => Str::random(4),
            'image' => 'public/https://i.ytimg.com/vi/uODKrZnGk7g/maxresdefault.jpg',
            'email' => Str::random(2),
            'password' => Str::random(2),

           
        
        ]);
    }
    }
}
