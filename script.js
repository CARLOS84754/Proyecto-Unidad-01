function meGusta(){
			var s=document.getElementById("contad1").innerHTML;
			//converitr a numero
			var n= Number(s);
			//incrementar en 1
			var nn= n+1;
			console.log(nn);
			document.getElementById("contad1").innerHTML=nn;
		}

	function nomeGusta(){
		var s=document.getElementById("contad2").innerHTML;
		//converitr a numero
		var n= Number(s);
		//incrementar en 1
		var nn= n+1;
		console.log(nn);
		document.getElementById("contad2").innerHTML=nn;
	}

/////////////////////////////////////////////////
var ad1, dm, sw;
	function iniciar(){
		sw=false;
		dm = document.getElementById("m");
		ad1 = setInterval(cambiar,2000);//dispara la repeticion de cambiar cada 1500milisegundos
		}
	function cambiar(){
		if (sw) {
			dm.src= "imgs/anuncio1.png";
		}else{
			dm.src= "imgs/anuncio2.png";		}
		sw=!sw;
	}
	function cerrar(){
		clearInterval(ad1);
		document.getElementById("propaganda").style.display="none";
	}
	 var cambiar1=1;
   function mostrar_ocultar(){
   	    if(cambiar1==1){
			document.getElementById("parrafo").style.display="none";
			cambiar1=2;
		}
		else{
			document.getElementById("parrafo").style.display="block";
			cambiar1=1;
		}
   }
   ///////////////////////////////////////////////////////////
    var cambiar1=1;
	 
	 var titulo=["INTRODUCCION A LAS CADENAS DE CARACTERES"];
	 var dato2=["En programación, una cadena de caracteres, palabras, ristra de caracteres o frase (string, en inglés) es una secuencia ordenada (de longitud arbitraria, aunque finita) de elementos que pertenecen a un cierto lenguaje formal o alfabeto análogas a una fórmula o a una oración."];
	var dato1=["Visita mi sitio web para más cursos:","https://programacionats.zenler.com"];
	var sigu=["Sigueme por las redes sociales:"];
	var redes=["Facebook ProgramacionATS: https://goo.gl/sqmEE1","Twiter:  https://goo.gl/WE4oaP","Hotmail: alejandro.acb@hotmail.com","Facebook personal: https://goo.gl/xL9qLl","instagram: @alejandroats"];
	var mostrar_="MOTRAR MENOS";
	var mostrar_mas="MOSTRAR MAS";
/**************ESTOOOOOOOOOOOOOOOOOOOOOOOOOO********************/
function mostrar_ocultar(){
   		
   		if(cambiar1==1){
   			document.getElementById("datos_mostraryocultar").style.display="block";
   			var text1="";
   			var text;
   			var text2;
   			var text3="";
   			   document.getElementById("mostrar_ocultar").innerHTML=mostrar_;
   			for(var i=0;i<dato1.length;i++){
   				
   				text1=text1+dato1[i]+"<br>";   				
   			
   			}
   			for(var j=0;j<redes.length;j++){
   				text3=text3+redes[j]+"<br>";
   			}
   			text2="<p>"+dato2+"</p>";
   			text=titulo+"<br>"+text2+"<br>"+text1+"<br>"+sigu+"<br>"+text3;
			document.getElementById("datos_mostraryocultar").innerHTML=text;
			   			cambiar1=2;

   		}else{	
   		   document.getElementById("mostrar_ocultar").innerHTML=mostrar_mas;
   			document.getElementById("datos_mostraryocultar").style.display="none";
			cambiar1=1;
   		}
   	}
   /*********************HASTA AQUI*///////////////////
   /*ROMARIO ----------------------------*/
   function intercambiar(opcion){
   		var recomendaciones=["https://www.youtube.com/embed/oiGCL2Ld534","https://www.youtube.com/embed/JOk3JwyAHSI","https://www.youtube.com/embed/hmkSsR0cwoY","https://www.youtube.com/embed/6AaNfYxprlM"];
   		document.getElementById("play_original").src=recomendaciones[opcion];
   }
   /*HASTA AQUI*/


     function cambio(opcion){
   		var hhhh=["https://www.youtube.com/embed/a_N9ViJubwM","https://www.youtube.com/embed/1pOnHjRK7BU","https://www.youtube.com/embed/t6kqaip7WS4","https://www.youtube.com/embed/B9QTRWFUI40","https://www.youtube.com/embed/bLw_fQn5ors"];
   		document.getElementById("play_original").src=hhhh[opcion];

   															
   }