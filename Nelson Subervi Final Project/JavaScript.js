var users = []; 
var totalBill= document.getElementById("factura").value;
var names = document.getElementById('Name').value;
var PorCineto = 0;
			
			function bill(names, totalBill){
				 return {
				 	name: names,
				 	total: totalBill,
				 	PorCineto: 0
				 }
				 
				for (var i = 0; i<user.length; i++) {
					var avg = totalBill/users.length;
					users.PorCiento.push(avg);
					console.log(users.PorCiento);
				}

			}
			

// Esta es la funcion que va a demostrat todos los objetos en el citio web
			/*function show(){
				document.getElementById("display").innerHTML="";
					document.getElementById('display').innerHTML+="<li>" +users[i].name + " pays " + users[i].average + "%" + "</li>";
					console.log(users[i].name+users[i].avg);
				}

				show() 

			function BillButton(){


			}
			*s/
/* No se como cambiar o eliminar un objeto ya cuando este creado
 talves haci document. get elePerson.average */

/* Es hora de crear una funcion que demuestra en la pagina web como luce la equacion .
No se como hacerlo. La funcion quiero que demuestre cada usuario individualmente. 
			*/
			/*

			function Separacion(){
				 for (var i = 0; i <billSplit.name.length; i++){
					billSplit[i].percentage/ billSplit.percentage.length};
				promedio = bill/ bill.length;
			}
		*/	

// Necesito saber como comvertir numeros enteros a porcentaje
//Funcion que divide el costo equitativamente entre cada usuario
//Se divide la factura equitativamente. 
//Cada Objeto de recibe un porcentaje equitativo del la factura
// No se como agregar todos los datos en la factura.
// Podria anadir todo en la suma de cada uno de los objetos.
// No se como arreglar mi codigo y hacerlo mas eficiente
/*
			function saveData(){
				percentage: document.getElementById('porcentaje').value,
				percentage = (percentage)*100;
				billSplit.push(percentage());
				prompt()
			}

*/
// Funcion que retorna los resultados al citio web.
/*
			function displayCookBook(){
				document.getElementById('display').innerHTML = '';
				
				for(var i=0; i<bill.length; i++){
					document.getElementById('display').innerHTML += '<li>' + bill[i].name + ' includes ' +
					billSplit[i].ingredients.join(' and ') + '. It takes '+
					billSplit[i].percentage + ' to cook</li>';
				}
			}
			/*
var count = 0;
			document.getElementById('increase').addEventListener('click', function(){
				count++; //increases count by 1
				document.getElementById('display').innerHTML = count;
			});
			for( var i = 0 ; i < list.length; i++){
    if (list[i].gender=='female'){
      female ++
      suma += list[i].age;
			*/