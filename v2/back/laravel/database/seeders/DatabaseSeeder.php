<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        DB::table('palabras')->insert([
            ['palabra' => 'casa', 'dificultad' => 1],
            ['palabra' => 'murcielago', 'dificultad' => 4],
            ['palabra' => 'autovia', 'dificultad' => 3],
            ['palabra' => 'arbol', 'dificultad' => 1],
            ['palabra' => 'Argentina', 'dificultad' => 3],
        ]);
    }
}
