<?php

 /**
  * obtenemos un array con el abecedario para iniciar el juego 
  * @return array

 */
function abcd (){
    // array $coleccion
   $coleccion = [ "a","b","c","d","e","f","g","h","i","j",
                 "k","l","m","n","ñ","o","p","q","r","s",
                 "t","u","v","w","x","y","z"];
    return $coleccion;
}

/** Imprime por pantalla la solisitud al usuario la palabra 
 * retorna un arreglo conformado por las letras de de la palabra ingresada por el usuario
 * @return array
 */
function inicioAhorcado (){
    //array $palabra
    echo "Ingrese la palabra a adivinar ";
    $palabra = strtolower(trim(fgets(STDIN)));
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
/**
 * codifica los elementos deñ arreglo generando un numero diferente al actual, retornando un array.
 * @param array $codigo
 * @return array
 */
function codificacion ($codigo){
    //int $value, $key
    foreach ($codigo as $key => $value) {
        $codificado[] = ($value +10);
    }
    return $codificado;
}

/**
 * muestra por pantalla el codigo para comenzar el juego del ahorcado
 * @param array $coleccion
 * no posee retorno
 */
function codigoParaJugar ($coleccion){

    echo "El codigo de la palabra a jugar es: \n". implode(" - ",$coleccion)."\n";
}


function inicioSegundaEtapa (){
    echo "Ingrese el codigo: ";
    $numCodigo = trim(fgets(STDIN));

    return $numCodigo;
}

function acomodoNum ($numCodificado){
    $num = explode("-",$numCodificado);
    return $num;
}
function decodificacionNum ($coleccion){
    foreach ($coleccion as $key => $value) {
        $decodificado[]=($value -10);
    }
    return $decodificado;
}

function buscarLetras ($codigoNum , $coleccion){
    $palabra=[];
    foreach ($codigoNum as $key => $value) {
        $palabra[]= $coleccion[$value];
    }
    
    
    return $palabra;
}




$juego = abcd();
$inicio = inicioAhorcado();
$inicioCodificacion = codificacionPalabra($juego,$inicio);
$codificacion = codificacion($inicioCodificacion);
codigoParaJugar ($codificacion)."\n"; 
$a = inicioSegundaEtapa();
$b = acomodoNum($a);
$c = decodificacionNum($b);
$d = buscarLetras($c,$juego);
//print_r($b)."\n";
//print_r($inicioCodificacion)."\n";
print_r($c);

echo implode(".",$d);