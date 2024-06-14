<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Palabra extends Model
{
    use HasFactory;

    protected $table = 'palabras';

    protected $fillable = [
        'palabra',
        'dificultad',
    ];

    public function juegos()
    {
        return $this->hasMany(Juego::class, 'palabra_id');
    }
}
