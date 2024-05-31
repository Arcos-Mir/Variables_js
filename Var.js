//Las Variables nos sirven para alamacenar datos y despues realizar operaciones con ellas
//las variables aceptan numeros y letras. son sencibles a mayusculas y minusculas
//si tienes una variable de dos palabras se coloca minuscula en el primer nombre y el segudno va con mayusculas por ejemplo dosPalabras

//primera opcion para definir variables
/*var nombre = 'Mir';
var numero1 = 5;
var numero2 = 2;*/

//otra opcion para definir variables sin repetir la palabra "var"
var nombre = 'Mir ',
    segundoNombre = 'itzel'
    numero1 = 5,
    numero2 = 2;
    res = numero1 + numero2 ;


//alert(nombre);
//alert(numero1 + numero2)
/*document.write('numero1');//esta linea de codigo imprime en pantalla la palabra numero1
ya que la variable se encuentra en comillas es como si fuera un string*/
//document.write(numero1);//imprime en pantalla el valor de la variable
//console.log("Hola consola");//imprime en consola la frase
document.write(nombre + ' ' + segundoNombre);//concatena cadenas de texto
document.write(res);