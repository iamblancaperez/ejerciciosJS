//avion.js

var avion = {
	piloto : {
		nombre : "Erich Hartmann",
		codigo : "Senior",
		edad : 28
	},
	aeromoza : {
		nombre : "Audrey Hepburn",
		idiomas : ["Español", "Inglés", "Portugués"] 
	},
	aerolinea : "LAN",
	marca : "Boeing 737",
	asientos : [
		{numero : "1A", ocupado : false },
		{numero : "1B", ocupado : false },
		{numero : "2A", ocupado : true },
		{numero : "2B", ocupado : false },
		{numero : "3A", ocupado : true },
		{numero : "3B", ocupado : true }
	],
	ano : 2014,
	primeraClase : true 
};

var avionContainer = document.getElementById("avion-container");
avionContainer.innerHTML = "";
var asientos = avion.asientos;
var a, contador;
var cajaPeq = document.createElement("div");
cajaPeq.setAttribute("class","col s4");

for (var i = 0; i < asientos.length; i++) {
	a = document.createElement("div");
	a.innerHTML = asientos[i].numero;
	if(asientos[i].ocupado){
		a.setAttribute("class","ocupado asiento");
	}else{
		a.setAttribute("class","desocupado asiento");
	}
	
	a.setAttribute("onclick", "cambiarBack(this)")
	if(cajaPeq.children.length >= 2){
		avionContainer.appendChild(cajaPeq);
		cajaPeq = document.createElement("div");
		cajaPeq.setAttribute("class","col s4");
		cajaPeq.appendChild(a);
	}else{
		cajaPeq.appendChild(a);
	}
	if(i == asientos.length - 1){
		avionContainer.appendChild(cajaPeq);
	}
}

function cambiarBack(elemento){
	if(elemento.getAttribute("class") == "ocupado asiento"){
		elemento.setAttribute("class","desocupado asiento");
	}else{
		elemento.setAttribute("class","ocupado asiento");
	}
}