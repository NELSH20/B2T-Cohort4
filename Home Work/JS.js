	//No necesitava esto : var togle = "ON";
		var get = document.getElementById("toggle");
		if(get){
			/*Necesitaba un event listener. Que escucha al hacer un click en get. Que es el boton. Tambien  */
			get.addEventListener('click', switcher, false);
			function switcher() {
				if (get.value == "ON"){
					get.value = "OFF";
				} else {
					get.value = "ON";
				}
			}
		}

		// No necesito esto: switcher();
		/* puedo hacer que el color cambie solo cuando el boton esta ON. Al reorganizar la logica del event listener. Solo puede ejecutar la funcion si el valor del boton es "ON"
	
		*/
		var txt = document.getElementById('box');
		if(txt){
			txt.addEventListener('mouseenter', changeBackgroundColor, false);
			txt.addEventListener('mouseleave', changeBackgroundColor, false);
		}
		function changeBackgroundColor(){
				txt.innerHTML = (get.value == "ON") ? "style= 'background-color:green' " : "style= 'background-color:red' ";
			}