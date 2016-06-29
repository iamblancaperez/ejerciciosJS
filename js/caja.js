function agregarTexto(elemento){
	var micaja = elemento.parentNode.parentNode;
	anadirElemento(micaja, "Hola!", "red")
}

function cambiarBack(elemento){
	var micaja = elemento.parentNode.parentNode;
	micaja.setAttribute("class", "micaja otro");
}





function agregarTexto1(boton){
	var abuelo = boton.parentNode.parentNode;
	var nuevo = document.createElement("p");
	var texto = document.createTextNode("Hola!");
	nuevo.appendChild(texto);
	abuelo.appendChild(nuevo);
}

function cambiarBack1(boton){
	var abuelo = boton.parentNode.parentNode;
	abuelo.setAttribute("class", "micaja2 otro");
}