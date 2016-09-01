(function (){
//Variables
	var tareaInput	=	document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar"),
		lista =	document.getElementById("lista");

//Funciones

var agregarTarea = function(){
	var tarea = tareaInput.value;
	nuevaTarea = document.createElement("li"),
	enlace = document.createElement("a"),
	contenido = document.createTextNode(tarea);

	if (tarea === "") {
		tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
		tareaInput.className = "error";
		return false;
	}

	//Agregamos el contenido al enlace
	enlace.appendChild(contenido);
	//Le establecemos un atributo href
	enlace.setAttribute("href","#");
	//Agregamos el enlace a la nueva tarea (li)
	nuevaTarea.appendChild(enlace);
	//Agregamos la nueva tarea a la lista
	lista.appendChild(nuevaTarea);
	//Para que se limpie una vez agregado
	tareaInput.value = "";

	for (var i = 0; i < lista.children.length ; i++) {
	lista.children[i].addEventListener("click", function(){
		this.parentNode.removeChild(this);
	});
	 }

};
var comprobarInput = function(){
tareaInput.className = "";
tareaInput.setAttribute("placeholder", "Agrega tu tarea");
};
var eliminarTarea = function(){
this.parentNode.removeChild(this);	
};
//Eventos

	
//Agregar Tarea
btnNuevaTarea.addEventListener("click", agregarTarea);

//Comprobar Input
tareaInput.addEventListener("click", comprobarInput);

//Borrando Elementos de la lista
for (var i = 0; i < lista.children.length ; i++) {
	lista.children[i].addEventListener("click", eliminarTarea);
	 }

}());