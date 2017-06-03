(function validarTelefono(){
	var boton = document.getElementById('become-driver')

	var ekis = document.createElement("img");
	ekis.setAttribute("src", "assets/img/error.png");
	ekis.setAttribute("height", "30");
	ekis.setAttribute("width", "30");
	ekis.setAttribute("alt", "Error")
	
	boton.addEventListener("click", function(){
		var input = document.getElementById('phone').value;
		var div = document.getElementById("error");
	error.appendChild(ekis)
		
		if( !(/^\d{9}$/.test(input)) ){
			document.getElementById("error").innerHTML;
		}else{
			document.getElementById("error").innerHTML = "<b>Ready to drive!</b>";
			document.getElementById('phone').value = "";
		}
	});
})();

/*NAV SCROLL*/

(function scrollP(){
	var addA = document.getElementById("a-nueva");
	var addImg = document.getElementById("img-nueva")
	var removeImg = document.getElementById("img-normal")

	window.onscroll = function(){
		if (document.body.scrollTop > 50){
			document.getElementById("scrollerP").className = "scrolled";
			addA.classList.remove("hide")
			addA.classList.add("login")
			addImg.classList.remove("hide")
			removeImg.classList.add("hide")
		}else{
			document.getElementById("scrollerP").className = ""
			addA.classList.add("hide")
			addImg.classList.add("hide")
			removeImg.classList.remove("hide")
		}
	}
})();