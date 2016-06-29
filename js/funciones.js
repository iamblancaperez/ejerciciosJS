function myLength(){
	var numeros = [];
	var final = true;
	for (var i = 0; i <= 2 ; i++) {
		number = prompt("Ingrese número", " ");
		numeros.push(number);
	}
	i=0;
	while(final){
		if(arreglo[i] != undefined){
			i++;
		}else{
			final = false;
		}
	}
	return i;
}

// Entrada numero
// Salida factorial de numero
function factorial(numero){
	var resultado = 1;
	for(var i = numero; i >= 1; i--){
		console.log("multiplico " + i + " * " + resultado)
		resultado = i * resultado;
	}	
	return resultado;
}

var profesor = {
  nombre: "Blanca",
  apellido: "Pérez",
  saludar: function() {
    console.log("Hola mi nombre es " + this.nombre + " " + this.apellido)
  }
}

var fechaActual = new Date();

if(fechaActual.getMonth() >= 0 && fechaActual.getMonth() < 4){
	console.log("Estamos en el primer cuatrimestre");
}else if(fechaActual.getMonth() >= 4 && fechaActual.getMonth() < 8){
	console.log("Estamos en el 2do");
}else {
	console.log("Estamos en 3ero");
}


