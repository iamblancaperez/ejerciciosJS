/*var total, i;
total = 0;
i = 10;

while(i>0){
	i--;
	total = total + parseInt(prompt("Numero, quedan " + (i+1) + " números", "Escribe tu numero"));
}
alert("La suma es: "+total);
*/

//Potencia a la n
// potencia el numero al que voy a elevar
// base es el numero que va a ser elevado
// total es el resultado de la base elevado a la potencia
var potencia, base, total;
do{
	base = parseInt(prompt("Numero base"));	
	if(isNaN(base)){
		alert("base no es un numero");
	}
}while(isNaN(base))
do{
	potencia = parseInt(prompt("Numero potencia"));
	if(isNaN(potencia)){
		alert("potencia no es un numero");
	}
}while(isNaN(potencia))

total = base; //la primera vez
//utilizo un for poruqe voy a iterar potencia-1 veces
for(var i = 0; i < potencia-1; i++){
	//lo que quiero hacer va aqui
	total = total * base;
}

alert(base + " elevado a " + potencia + " es igual a " + total)











