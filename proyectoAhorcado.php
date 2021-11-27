<?php

/**echo "Ingrese la letra a buscar ";
$letra = trim(fgets(STDIN));
$cole  = abcd();
$cant = count($cole);
for ($i=0; $i < $cant ; $i++) {
    if ($letra == $cole[$i])
    echo $i."\n".$letra;
}
//echo $coleccion[0];
 */

 /**
  * obtenemos un array con el abecedario para iniciar el juego 
  * @return array

 */
function abcd (){
    // array $coleccion
    $coleccion = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
   
    return $coleccion;
}
$chichi = abcd();
echo "Ingrese la palabra ";
$cola = trim(fgets(STDIN));
$arrayCola = str_split($cola);
$cant = count ($chichi);
for ($i=0; $i < $cant ; $i++) { 
    foreach ($arrayCola as $key => $value) {
        if($value == $chichi[$i]){
            echo "son lo mismo \n ".$i;
            $cosa[]=$value;
        }
    }
}
print_r($cosa);
//print_r($arrayCola);
/** Imprime por pantalla la solisitud al usuario la palabra 
 * @return array
 */
function inicioAhorcado (){
    //array $palabra
    echo "Ingrese la palabra a adivinar ";
    $palabra = trim(fgets(STDIN));
    return (str_split($palabra));
}