<?php

namespace App\Http\Controllers;

use App\Models\Palabra;
use Illuminate\Http\Request;

class PalabraController extends Controller
{
    public function index()
    {
        return Palabra::all();
    }
}
