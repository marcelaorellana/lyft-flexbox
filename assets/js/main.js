var navi = document.getElementById("navegadorId");
var signin = document.getElementById("botonSignup");
    	//signin.classList.add("hide");
window.addEventListener("scroll", function(){
	
	if (document.body.scrollTop > 80) {
   	 	navi.classList.add('cambiaNav');
    } else {
    	navi.classList.remove('cambiaNav');
    }
});
