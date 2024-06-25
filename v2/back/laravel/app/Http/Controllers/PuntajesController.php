<?php

namespace App\Http\Controllers;

use App\Models\Puntajes;
use Illuminate\Http\Request;

class PuntajesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Función para el control de que el jugador tenga el mínimo de puntos para calificar en el podio.
     *
     * @param int $data Puntos del jugador.
     * @return \Illuminate\Http\Response Respuesta de la validación.
     */
    public function pointsValidate($data)
    {
        // Verificar si hay registros en Puntajes donde los puntos son menores a los puntos proporcionados
        $pointMinExists = Puntajes::where('puntos', '<', $data)->exists();

        // Si existen registros que cumplen con la condición, se retorna una respuesta positiva
        if ($pointMinExists) {
            return response(['response' => true], 200);
        }

        // Si no existen registros que cumplen con la condición, se retorna una respuesta negativa
        return response(['response' => false], 205);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Puntajes $puntajes)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Puntajes $puntajes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Puntajes $puntajes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Puntajes $puntajes)
    {
        //
    }
}
