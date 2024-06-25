<?php

use App\Http\Controllers\PalabraController;
use App\Http\Controllers\PuntajesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/palabras', [PalabraController::class, 'index']);

Route::get('/puntajeMin/{puntosJugados}', [PuntajesController::class, 'pointsValidate']);
