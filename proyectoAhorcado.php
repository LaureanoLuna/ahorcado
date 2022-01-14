<?php

//FUNCIONES DE LA OPCION 1 DEL MENU PRINCIPAL

/**
 * Obtenemos un arreglo indexado para jugar en modo solitario, con algunas palabras.
 * 
 * @return array
 */
function palabrasDelJuego(){
    // Array $arregloDePalabras
    $arregloDePalabras= ["hola","pancho","papas","pucho","casa","dedo"];
    return ($arregloDePalabras);
}

/**
 * Nos retorna un arreglo de la palabra elegida al azar por la funcion array_rand.
 * 
 * @param array $arreglo
 * @param int $clave
 * @return array
 *  
 */

function palabraListaParaJugar ($clave,$arreglo){
   
    return (str_split($arreglo[$clave]));

}

/**
 * Verifica si la letra ingresada por el usuario, esta en la palabra a adivinar.
 * 
 * @param string $letraIngresada
 * @param array $arreglo
 * @return bool
 */

function estaOnoLaLetra ($letraIngresada, $arreglo){

    return (in_array($letraIngresada, $arreglo));
}

/** 
 * Arma un arreglo nuevo con las letras que el usuario asierta en el juego.
 * 
 * @param string $letra
 * @param array $palabraAadivinar
 * @param array $palabraAdivinada (este es un arreglo donde que ingresa como parametro estando vacio)
 * @return array
 * 
 */
function formandoLaPalabra($letra, $palabraAadivinar, $palabraAdivinada){

    foreach ($palabraAadivinar as $key => $value) {
        if($value == $letra){
            $palabraAdivinada[$key]=$letra;
        }
    }
    return ($palabraAdivinada);
}

/**
 * Nos retorna un arreglo con elementos vacios como tantas letras tenga la palabra a ser adivinada
 * Esto se permite por la funcion array_pad.
 * Sirve para tener una vision de los casilleros vacios en la busqueda de las letras.
 * 
 * @param array $arreglo
 * @return array
 */
function esquemaPalabra ($arreglo){
    // Array $esquema
    // Return array $palabra
    $esquema = [];
    $palabra = array_pad($esquema,count($arreglo)," ");
    return ($palabra);
}

/** 
 * Nos muestras la cantidad de casilleros vacios que contiene la palabra, y a medida que surgen letras acertadas, se muestran
 * 
 * @param array $arreglo
 */
function visualDeLaPalabra ($arreglo){

    echo implode(" - ",$arreglo)."\n";
}

//FUNCIONES (MULTIJUGADOR) DEL MENU PRINCIPAL

// FUNCIONES DE LA OPCION "INGRESAR PALABRA" DEL MENU MULTIJUGADOS

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

// FUNCIONES DE LA OPCION "ADIVINAR PALABRA" DEL MENU MULTIJUGADOS

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

// FUNCIONES PARA EL JUEGO EN GENERAL

/**
 * Nos muestra por pantalla la imagen inicial del juego
 * 
 * no tiene parametros, ni retorno
 */
function dibujoAhorcado (){
    echo "       ----- \n";
    echo "       |     \n";
    echo "       |     \n";
    echo "    ___|____ \n";
    echo "   |________|\n";
    
}

/**
 * Solicita al usuario que ingrese una letra para la verificacion de la adivinanza
 * 
 * no posee paramentros 
 * @return string
 *  
 */

function letra (){
    // String $letra
    echo "Ingrese la una letra ";
    $letra = trim(fgets(STDIN));
    return $letra;
}


/** 
 * Nos muestra por pantalla las consecuencias por cada letra erronea
 * Son 7 la cantidad de errores permitidos
 * 
 * @param int $i
 * no posee retorno
 */
function letraErronea ($i){
    if( $i == 0 ){
        echo "       ----- \n";
        echo "       |     \n";
        echo "       |     \n";
        echo "    ___|____ \n";
        echo "   |________|\n";
    }elseif ( $i == 1){
    
        echo "       ----- \n";
        echo "       |   ☺ \n";
        echo "       |     \n";
        echo "    ___|____ \n";
        echo "   |________|\n";
    }elseif ($i == 2){
        
        echo "       ----- \n";
        echo "       |   ☺ \n";
        echo "       |   | \n";
        echo "    ___|____ \n";
        echo "   |________|\n";
        
    }elseif ($i == 3){
        
        echo "       ----- \n";
        echo "       |   ☺ \n";
        echo "       |  /| \n";
        echo "    ___|____ \n";
        echo "   |________|\n";
    }elseif ($i == 4){
        
        echo "       -----  \n";
        echo "       |   ☺  \n";
        echo "       |  /|\ \n";
        echo "    ___|____  \n";
        echo "   |________| \n";
    }elseif ($i == 5){
        
        echo "       -----  \n";
        echo "       |   ☺  \n";
        echo "       |  /|\ \n";
        echo "       |  /   \n";
        echo "    ___|____  \n";
        echo "   |________| \n";
        
    }elseif ($i == 6){
        
        echo "       -----    \n";
        echo "       |   ☺    \n";
        echo "       |  /|\   \n";
        echo "       |  / \   \n";
        echo "    ___|____    \n";
        echo "   |________|   \n";
        
    }elseif ( $i == 7){
        
        echo "       -----    \n";
        echo "       |   ☺    \n";
        echo "       |  /|\   \n";
        echo "       |  / \   \n";
        echo "    ___|____    \n";
        echo "   |________|   \n";
        
        echo "  ************* \n";
        echo "    AHORCADO    \n";
        echo "  ************* \n";
    }
}





//FUNCIONES DE LA OPCION 2 DEL MENU PRINCIPAL

/**
 * Inicia la opcion de juego modo Multijugador.
 * 
 * @return array
 */

function multiJugador (){
        do {
            echo "ingrese que jugar \n";
            echo "opcion 1: ingresar palabra \n";
            echo "opcion 2: adivinar palabra \n";
            echo "opcion 3: volver al menu anterior \n";
            $opcion = trim(fgets(STDIN));


        switch ($opcion) {
            case 1:
                $juego = abcd();
                $inicio = inicioAhorcado();
                $inicioCodificacion = codificacionPalabra($juego,$inicio);
                $codificacion = codificacion($inicioCodificacion);
                codigoParaJugar ($codificacion)."\n";
                break;
            case 2:
                $juego = abcd();
                dibujoAhorcado();
                $palabraEnjuego = inicioSegundaEtapa();
                $palabraEnjuego = decodificacionNum ($palabraEnjuego);
                $palabraEnjuego = buscarLetras($palabraEnjuego,$juego);
            
                $palabraAserAdivinada = esquemaPalabra($palabraEnjuego);
                $palabraAserAdivinada[0]=$palabraEnjuego[0];
                $i = 0;

            do {                     
                    $ingreseLetra = letra(); 

                    if (estaOnoLaLetra($ingreseLetra,$palabraEnjuego)){
                        $palabraAserAdivinada = formandoLaPalabra($ingreseLetra,$palabraEnjuego,$palabraAserAdivinada);                    
                        ksort($palabraAserAdivinada);
                        letraErronea($i);
                        
                    }else{
                        $i++;
                        letraErronea($i);
                        
                    }
                    visualDeLaPalabra($palabraAserAdivinada)."\n";
                    
                   
                    do {
                        echo "Ya sabe que palabra es?? \n";
                        $decicion = trim(fgets((STDIN)));
                        if ($decicion == "si"){
                            echo "Ingrese la palabra \n";
                            $palabraPensada = trim(fgets(STDIN));
                            if ($palabraPensada == implode($palabraEnjuego)){
                                $palabraAserAdivinada = $palabraEnjuego;
                            }else{
                                echo " Esa palabra no es \n";
                                $i++;
                                letraErronea($i);
                                //$decicion = "no";
                            }
                        }
                        

                    } while ($decicion == "si" && $palabraAserAdivinada !== $palabraEnjuego);
                   
                  
                
            } while ($palabraAserAdivinada !== $palabraEnjuego && $i < 8);

            if ($palabraAserAdivinada == $palabraEnjuego){
                echo "      GANASTE!!          \n";
            }else{
                echo "      PERDISTE \n";
                echo " LA PALABRA ERA ".implode($palabraEnjuego)."\n";
            }           
                
                break;
            case 3;
                break;
                

            
            default:
            echo "Ingrese un opcion correcta \n";

                break;
            // echo implode($d);
        }

        
    } while ($opcion != 3);

    return (implode($inicio));
}


    //FUNCIONES DE LA OPCION 3 DEL MENU PRINCIPAL

    /**
     * Muestra por pantalla las instrucciones del juego.
     */
    function instruccionesDelJuego (){
        echo " El juego consiste, en diferentes etapas: \n";
        echo    " 1) El juego individual, es adivinar la palabra que te imponga la computadora,
                la cual te brindara la opcion de ingresar la palabra, si ya la sabes. \n\n";
        echo    " 2) El juego Multijugador: se divide en dos partes, esta el jugador, que ingresa la palabra y 
                el jugador, que tiene que adivinar dicha palabra \n\n";
        echo    " El puntaje del juego en modo Multijugador, tendra un calificacion de 10 puntos,
                mas todas la oportunidades de adivinar sin utilizaz. \n\n";
        echo    " Las oportunidades de adivinar seran 7, ya sea con la palabra o las letras, llegadas a esa cantidad de errores,
                se da por perdido el juego \n";

    }


    do {
        echo "1) Jugar \n";
        echo "2) Multijugador \n";
        echo "3) Instruciones \n";
        echo "4) Salir \n";
        $opcion = trim(fgets(STDIN));
    
        switch ($opcion) {
            case 1:
                dibujoAhorcado();
                $juego = palabrasDelJuego();
                $palabraAlAzar = array_rand($juego,1);
                $inicio = palabraListaParaJugar($palabraAlAzar,$juego);
                $palabraAserAdivinada = esquemaPalabra($inicio);
                $palabraAserAdivinada[0]=$inicio[0];
                $i = 0;
                
              
               do {                     
                    $ingreseLetra = letra(); 
                    
                     
                               
                    if (estaOnoLaLetra($ingreseLetra,$inicio)){
                        $palabraAserAdivinada = formandoLaPalabra($ingreseLetra,$inicio,$palabraAserAdivinada);                    
                        ksort($palabraAserAdivinada);
                        letraErronea($i);
                        
                    }else{
                        $i++;
                        letraErronea($i);
                        
                    }
                    visualDeLaPalabra($palabraAserAdivinada)."\n";
                    
                    do {
                        echo "Ya sabe que palabra es?? \n";
                        $decicion = trim(fgets((STDIN)));
                        if ($decicion == "si"){
                            echo "Ingrese la palabra \n";
                            $palabraPensada = trim(fgets(STDIN));
                            if ($palabraPensada == implode($inicio)){
                                $palabraAserAdivinada = $inicio;
                            }else{
                                echo " Esa palabra no es \n";
                                $i++;
                                $decicion = "no";
                            }
                        }
    
                    } while ($decicion == "si" && $palabraAserAdivinada !== $inicio);
                   
               } while ($palabraAserAdivinada !== $inicio && $i < 8);
    
               if ($palabraAserAdivinada == $inicio){
                   echo "      GANASTE!!          \n";
               }else{
                   echo "      PERDISTE \n";
                   echo " LA PALABRA ERA ".implode($inicio)."\n";
               }           
                break;
            
            case 2:
                $juego = palabrasDelJuego();
                $juego[count($juego)]= multiJugador();
                print_r($juego);
                break;
            case 3:
                instruccionesDelJuego();
                break; 
            case 4:
                break;   
    
            default:
                echo "Ingrese un opcion correcta \n";
    
        }
    
    } while ($opcion != 4);
