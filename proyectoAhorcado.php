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
// Finaliza la 1º Etapa.

// 2º Etapa

/**
 * Solicita al usuario que ingrese el codigo numerico.
 * Lo retona en forma de array por la funcion "explode" que extrae los numeros para formar dicha array.
 * Es una funcion sin parametros
 * @return array
 */
function inicioSegundaEtapa (){
    //array $num
    echo "Ingrese el codigo: ";
    $num = explode("-",trim(fgets(STDIN)));
     return $num;
}

/**
 * Toma el array con sus elementos codificados y retorna un array con sus elementos decodificados (en estados puro).
 * 
 * @param array $coleccion
 * @return array
 */
function decodificacionNum ($coleccion){
    // array $decodificado
    foreach ($coleccion as $key => $value) {
        $decodificado[]=($value -10);
    }
    return $decodificado;
}

/**
 * Compara los elemente del arreglo ingresado por el usuario, equivalentea a la ubicacion de letras alfabeticas
 * para obtener dicha palabra formada por ese codigo.
 * 
 * @param array $codigoNum
 * @param array $coleccion
 * @return array
 */
function buscarLetras ($codigoNum , $coleccion){
    // array $palabra
    $palabra=[];
    foreach ($codigoNum as $key => $value) {
        $palabra[]= $coleccion[$value];
    }
    return $palabra;
}
// Finaliza la 2º Etapa

function dibujoAhorcado (){
    echo "       ----- \n";
    echo "       |     \n";
    echo "       |     \n";
    echo "    ___|____ \n";
    echo "   |________|\n";
    
}

function letra (){
    echo "Ingrese la una letra ";
    $letra = trim(fgets(STDIN));
    return $letra;
}

function comparacionDeLetra ($letra, $arregloPalabra){
    $cant = count($arregloPalabra);
    $eleccion = "";
    for ($i=0; $i < $cant ; $i++) { 
        if($letra == $arregloPalabra[$i]){
            $eleccion = $letra;
        }
        
    }
    return $eleccion;
}
function letraErronea ($letra, $i){
        if ($letra == false && $i == 0){
        
         echo "       ----- \n";
         echo "       |   ☺ \n";
         echo "       |     \n";
         echo "    ___|____ \n";
         echo "   |________|\n";
    }elseif ($letra == false && $i == 1){
        
         echo "       ----- \n";
         echo "       |   ☺ \n";
         echo "       |   | \n";
         echo "    ___|____ \n";
         echo "   |________|\n";
        
    }elseif ($letra == false && $i == 2){
        
         echo "       ----- \n";
         echo "       |   ☺ \n";
         echo "       |  /| \n";
         echo "    ___|____ \n";
         echo "   |________|\n";
    }elseif ($letra == false && $i == 3){
        
         echo "       -----  \n";
         echo "       |   ☺  \n";
         echo "       |  /|\ \n";
         echo "    ___|____  \n";
         echo "   |________| \n";
    }elseif ($letra == false && $i == 4){
        
        echo "       -----  \n";
        echo "       |   ☺  \n";
        echo "       |  /|\ \n";
        echo "       |  /   \n";
        echo "    ___|____  \n";
        echo "   |________| \n";
        
    }elseif ($letra == false && $i == 5){
        
        echo "       -----    \n";
        echo "       |   ☺    \n";
        echo "       |  /|\   \n";
        echo "       |  / \   \n";
        echo "    ___|____    \n";
        echo "   |________|   \n";
        
    }elseif ($letra == false && $i == 6){
        
        echo "       -----    \n";
        echo "       |   ☺    \n";
        echo "       |  /|\   \n";
        echo "       |  / \   \n";
        echo "    ___|____    \n";
        echo "   |________|   \n";
        
        echo "************* ";
        echo "  AHORCADO    ";
        echo "************* ";
    }
}







 






echo "ingrese que jugar \n";
echo "opcion 1: ingresar palabra \n";
echo "opcion 2: adivinar palabra \n";
$juego = trim(fgets(STDIN));


switch ($juego) {
    case 1:
        $juego = abcd();
        $inicio = inicioAhorcado();
        $inicioCodificacion = codificacionPalabra($juego,$inicio);
        $codificacion = codificacion($inicioCodificacion);
        codigoParaJugar ($codificacion)."\n";
    case 2:
        dibujoAhorcado();
        $juego = abcd();
        $a = inicioSegundaEtapa();
        $c = decodificacionNum($a);
        $d = buscarLetras($c,$juego);
        $i = 0;

        while ($i < 7) {
        $letra = letra();
        $palabraAdivinada = comparacionDeLetra($letra,$d);
        letraErronea($palabraAdivinada, $i);
        $i++;
        }
        

    
    default:
        # code...
        break;
        echo implode($d);
}