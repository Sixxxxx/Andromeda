    
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.onload = function () {
 	// Begin accessing JSON data here
	var data = JSON.parse(this.response);
	var newArray = new Array(data.length);
	for(var i = 0; i <= data.length; i++){
		newArray = data.map(i => [i.name, i.region, i.population, i.timezones, i.currencies[0].name, i.languages[0].name, i.callingCodes[0]]);
	}

	

	$(document).ready(function() {
    var dt = $('#example').DataTable( {
        data: newArray,
        columns: [
            { title: "Name" },
            { title: "Continent" },
            { title: "Population" },
            { title: "Time Zones" },
            { title: "Currencies" },
            { title: "Languages" },
            { title: "Calling Codes" }
        ]
    } );
} );
	populateOverallOverview(newArray);
	function populateOverallOverview(result){
		var table = document.getElementById("countries");

		//create header
		var thead = table.createTHead();
		var headerRow = thead.insertRow();
		addCell(headerRow, 'Name');
		addCell(headerRow, 'Capital');
		addCell(headerRow, 'Region');
		addCell(headerRow, 'Population');
		addCell(headerRow, 'Timezones');
		addCell(headerRow, 'Currencies');
		
		addCell(headerRow, 'Calling Codes');

		//insert data
		result.forEach(function(item){
			var row = table.insertRow();
			addCell(row, item[0]);
			addCell(row, item[1]);
			addCell(row, item[2]);
			addCell(row, item[3]);
			addCell(row, item[4]);
			addCell(row, item[5][0]);
			addCell(row, item[6]);
		});

		//helper function
		function addCell(tr, text){
			var td = tr.insertCell();
			td.textContent = text;
			return td;
		}
	}

 
}


// Send request
request.send();


    

