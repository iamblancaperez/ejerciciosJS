/*var num1, num2, num3, num4;
var sumaresultado;
var cantidad;

sumaresultado = 0;
cantidad = 0;

num1 = parseInt(prompt("Numero 1"));
sumaresultado = sumaresultado + num1;
cantidad = cantidad + 1;

num2 = parseInt(prompt("Numero 2"));
sumaresultado = sumaresultado + num2;
cantidad = cantidad + 1;

num3 = parseInt(prompt("Numero 3"));
sumaresultado = sumaresultado + num3;
cantidad = cantidad + 1;

num4 = parseInt(prompt("Numero 4"));
sumaresultado = sumaresultado + num4;
cantidad = cantidad + 1;

alert("La suma es: " + sumaresultado);
*/

/*var num;
var sumaresultado;
var cantidad;

sumaresultado = 0;
cantidad = 0;

while(cantidad < 4){
	num = parseInt(prompt("Numero " + (cantidad+1) ));
	sumaresultado = sumaresultado + num;
	cantidad = cantidad + 1;
}*/
/*
var num;
var sumaresultado;
var cantidad;
sumaresultado = 0;

for(cantidad = 0; cantidad < 4; cantidad++){
	num = parseInt(prompt("Numero " + (cantidad+1) ));
	sumaresultado = sumaresultado + num;
}


var sumaresultado;
var cantidad;

sumaresultado = 0;
cantidad = 0;

do{
	num = parseInt(prompt("Numero " + (cantidad+1) ));
	sumaresultado = sumaresultado + num;
	cantidad = cantidad + 1;
}while(cantidad < 4)
alert("La suma es: " + sumaresultado);
*/
/*function devolverUno(arreglo){
	var bandera = false;
	var uno = false;
	var i = 0;
	var l = arreglo.length;
	while(!uno){
		if(arreglo.length == 1){
			uno = true;
			return arreglo[0];
		}
		if(bandera){
			arreglo[i] = null;
		}
		if(i>=l){
			arreglo = arreglo.filter(function(num){
				return num != null;
			});
			i = 0;
			l = arreglo.length;
		}else{
			bandera = !bandera;
			i++;
		}				
	}
}

*/
/*var fruta;
fruta = prompt("Ingresa fruta (manzanas,peras,uvas)");

switch(fruta){
	case "manzanas":
		console.log("Tengo 3 manzanas");
		break;
	case "peras":
		console.log("Tengo 2 peras");
		break;
	case "uvas":
		console.log("Toma 15 uvas");
		break;
	default:
		console.log("No tengo " + fruta + " o escribiste mal ");
		error_en_fruta = true;
}*/

var edad, es_numero, error;
error = 0;
/*while(isNaN(edad)){
	error++;
	edad = parseInt(prompt("Edad, ingrese un numero válido"));
}

do{
	edad = parseInt(prompt("Edad, ingrese un numero válido"));
}while(isNaN(edad))*/

for(var i = 0; i < 3 && isNaN(edad); i++){
	edad = parseInt(prompt("Edad, ingrese un numero válido"));
}


if(edad > 18){
	console.log("Puedes entrar al sitio");
}else if(edad >= 12){
	console.log("Hola! eres un niño!");
}else{
	console.error("Chao!");
}



console.log(error);


























