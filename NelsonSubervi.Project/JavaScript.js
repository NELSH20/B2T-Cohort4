var billSplit = []; //Esto va a ser lo que divida quien recibe la factura.

var total= 0;
//Funcion que calculara los preciosa
			function bill(){
				return {
					name: document.getElementById('Name').value.split(','),
					//ingredients: document.getElementById('ingredients').value.split(','),
					percentage: document.getElementById('Percentage').value,
					//dateCreated: new Date().toString()
				};

			}
//Funcion que asigna el porcentaje de cada usuario
			function saveData(){
				billSplit.push( recipe() );
				alert(billSplit[billSplit.length - 1].name + " has been added!");
				displayCookBook();
				for( var i = 0; i <billSplit.name; i++){
					if (billSplit[i].ingredients =="strinh"
				}
			}
// Funcion que retorna los resultados al citio web.
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
