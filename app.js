/*global window, document*/
/*jshint esversion:6 */
var log = function(data){
	console.log(data);
};

var createDiv = function(){
	var inputNumber = document.getElementById("nb_blocks");
	var blocks = document.getElementById("blocks");
	var inputColor = document.getElementById("color_blocks");
	var selectedDiv = document.getElementsByClassName("is-active");
	log(selectedDiv);
	if (selectedDiv.length == 0){
		

		for (var i=0; i < inputNumber.value; i++){  // let pour que le for, var pour toute la fonction
		var newDiv = document.createElement("div");
		log(newDiv);
		blocks.appendChild(newDiv);
		log(blocks);
		newDiv.classList.add("block");
		newDiv.style.background  = inputColor.value;
		newDiv.addEventListener("click", function(){
			this.classList.toggle("is-active");
			
			// dans une boucle il retient que le dernier
			// avec le this on lui indique bien la div sélectionnée
		});

	} } else {
		for (var i=0; i < selectedDiv.length ; i++){
			selectedDiv[i].style.background  = inputColor.value;
		}
		
		
		};


	};


var start= function(){
	var btn = document.getElementById("create_blocks");
	btn.addEventListener("click", createDiv);
};

window.addEventListener("DOMContentLoaded", start);
	






