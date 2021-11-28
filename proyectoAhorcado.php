<?php

 /**
  * obtenemos un array con el abecedario para iniciar el juego 
  * @return array

 */
function abcd (){
    // array $coleccion
    $coleccion = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
   
    return $coleccion;
}

/** Imprime por pantalla la solisitud al usuario la palabra 
 * retorna un arreglo conformado por las letras de de la palabra ingresada por el usuario
 * @return array
 */
function inicioAhorcado (){
    //array $palabra
    echo "Ingrese la palabra a adivinar ";
    $palabra = trim(fgets(STDIN));
    return (str_split($palabra));
}
/**
 * toma la ubicacion con respecto al abecedario de las letras que forman la palabra ingresada por el usuario y retorna un arreglo con esas ubicaciones
 * 
 * @param array $coleccion
 * @param array $palabra
 * @return array
 */
function codificacionPalabra ($coleccion, $palabra){
    foreach ($palabra as $key => $value) {
        $cant= count($coleccion);
        for ($i=0; $i < $cant ; $i++) { 
            if ( $value == $coleccion[$i]){
                $codigo[] = $i;
            }
        }
    }
    return $codigo;
}

$juego = abcd();
$inicio = inicioAhorcado();
$inicioCodificacion = codificacionPalabra($juego,$inicio);
print_r($inicioCodificacion);

