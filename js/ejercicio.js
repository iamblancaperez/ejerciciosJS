//ejercicio.js
function metros_a_pulgadas(metros){
	var pulgadas;
	pulgadas = metros / 0.0254;
	return pulgadas;
}


var metros = prompt("Por favor ingrese los metros", "");
var pulgadas = metros_a_pulgadas(metros);

alert("Las pulgadas son: " + pulgadas);




