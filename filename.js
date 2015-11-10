var petFinder = {};

(function () {

	function toScreen(data){
		console.log(data);
		alert(data.petfinder.petIds.id.$t);
	}
	
	function search(){
		var url = "http://api.petfinder.com/pet.getRandom?format=json&key=326aa49dbfec3060d0ebec0d9ff3359b&callback=?";
		$.getJSON(url, toScreen);
	}
	
	petFinder.search = search;
})();

petFinder.search();





/*$.getJSON('http://api.petfinder.com/pet.getRandom?format=json&key=326aa49dbfec3060d0ebec0d9ff3359b&callback=?')
  .done(function(petApiData) { alert("hey"); })
  .error(function(err) { alert('Error retrieving data!'); 
});
*/