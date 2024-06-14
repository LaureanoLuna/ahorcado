<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Juego extends Model
{
    use HasFactory;

    protected $table = 'juegos';

    protected $fillable = [
        'usuario_id',
        'palabra_id',
        'fecha_juego',
        'puntaje',
        'intentos',
        'exito',
    ];

    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'usuario_id');
    }

    public function palabra()
    {
        return $this->belongsTo(Palabra::class, 'palabra_id');
    }
}
