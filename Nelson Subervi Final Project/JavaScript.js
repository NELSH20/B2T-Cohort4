var totalBill= 0, 
names = [document.getElementById('Name').value.split(',')],
totalBill = document.getElementById("total").value, 
avg = totalBill/names.length,
users = {}
//Funcion que creat los objetos en mi array
			function Usuarios(names, avg){
				return {
					name: function(){
						for (var i = 0; 1 <names.length; i++){
							name = [names[i]]
						}
					}
					Promedio: function(){ 
						if ("event listener ==  true" && promedio[i] != 100 ){
						document.getElementById("Asignado").value +="Box to display number"
						}
						 else if ("event listener == false" && promedio[i] != 100){ 
						 	promedio: promedio % 100 
						 }
						 else
						 { 
						 	promedio: avg;
						 }
					}
				} 
			}
		/*	
			function bill(names, totalBill){
				for (var i = 0; i <this.length ; i++) {
					var Person = { name: names[i], average:avg[i] }
					users.push(Person);
				}
			}
			function show(){
				ShowAndTell.innerHTML ="";
					ShowAndTell.innerHTML+=
					"<li id='Indentidad'>" +users[i].name + " pays " + users[i].average + "%" + "</li>";
					console.log(users[i].name+users[i].avg);
					*/
			