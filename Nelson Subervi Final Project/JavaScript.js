var users = []; //Esto va a ser lo que divida quie
var totalBill= 0;
var doc = document.getElementById("display");
//Funcion que creat los objetos en mi array

/* function add*/

			function bill(){
				users = [];
				var names= document.getElementById('User').value.split(',')
				totalBill= document.getElementById("bill").value
				var avg = totalBill/names.length;
				for (var i = 0; i< names.length ; i++) {
					var Person = { name: names[i], dollar:avg.toFixed(2), porcengate: 100/names.length }
					users.push(Person);
				}
			}
			function show(){
				doc.innerHTML = ""
					//This is to create a P tag for all my names
				for (var i =0; i < users.length; i++ ){
					var row = document.createElement('div')
					row.setAttribute('class',"row")

					var ptag= document.createElement("p")
					ptag.innerHTML= users[i].name
					ptag.setAttribute("class","userDisplay")
					row.appendChild(ptag)
					//This is to create 
					var input = document.createElement("input")
					input.setAttribute("type","number")
					input.setAttribute("max","100")
					input.setAttribute("step","1")
					input.setAttribute("class","userDisplay")
					input.value = users[i].porcengate
					input.addEventListener("change", C)
					input.id = i 
					row.appendChild(input)
					// 
					var dollar = document.createElement("p")
					dollar.innerHTML=  "$"+users[i].dollar
					dollar.setAttribute('class','userDisplay')
					row.appendChild(dollar) 
					doc.appendChild(row)
				}
			}

			
			function C (){
			 	console.log(this)
			 	users[this.id].porcengate= this.value
			 	users[this.id].dollar = (this.value/100) * totalBill;
			 	show()
			}
			
			users[this.id].porcengate.toFixed(2)
			users[this.id].dollar.toFixed(2)

			function saveData(){
				bill()
				show()
			}
/*	Tengo que reaccinar el porcentaje del elemento del objeto al precionar la caja con un input el porcentaje tiene que ser reaccinado.
 
 	document.getElement("input").addEventListener("click", C);

 	function C (){
 	Person[i].dollar= totaLBill/show(input)
 	}

	function if the user change the percentage of each bill. it will affect their dollar ammount.
	this will affect variable dollar. The function will listen to input. The input will be set equal to the new value.
	I dont know how to do it but I can check on w3d. It needs to have an event listener? why if the event is happening between the own HTML, 
	Then I have to make the input runs trough.

	Will it need a new parameter in the object.

		input.Cambio("click", NP
		})
		 function Np(){
		dollar = (input/100) * dollar}



	 No user can pay more than 100 percent of the bill. all has to add up to 100

*/

// Necesito saber como comvertir numeros enteros a porcentaje
//Funcion que divide el costo equitativamente entre cada usuario
//Se divide la factura equitativamente. 
//Cada Objeto de recibe un porcentaje equitativo del la factura
// No se como agregar todos los datos en la factura.
// Podria anadir todo en la suma de cada uno de los objetos.
// No se como arreglar mi codigo y hacerlo mas eficiente