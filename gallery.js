let searchBox = document.querySelector('#search-box');
let images = document.querySelectorAll('.container .image-con .image');

searchBox.oninput = () => {
	images.forEach(hide => hide.style.display = 'none');
	let value = searchBox.value;
	images.forEach(filter => {
		let title = filter.getAttribute('data-title');
		if(value == title){
			filter.style.display = 'block';
		}

		if(searchBox.value == ''){
			filter.style.display = 'block';
		}
	});
};


function showSuggest(suggest){
        if (suggest.length == 0) {
		document.getElementById("txtsuggest").innerHTML = "";
		return;
		}
	  
		var xhttp;
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		document.getElementById ("txtsuggest").innerHTML = this.responseText;
			}
		};		
		xhttp.open("GET", "gallery.php?suggest="+suggest, true);
		xhttp.send();
		}