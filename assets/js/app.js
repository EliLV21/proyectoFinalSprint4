 var modal1 = document.getElementById("modalIniciarSesion");
 var clickSesion = document.getElementById("iniciarSesion")
 var span = document.getElementById("close");

 span.addEventListener("click",cerrar);

iniciarSesion.addEventListener("click",mostrar)

 function mostrar(){
   modal1.style.display="block";
 };
 function cerrar(){
   modal1.style.display="none";
 };
