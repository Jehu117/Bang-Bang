function jugar (){
	setTimeout(
		function(){
	window.location.assign('personaje.html');
    },2000);
    //sonido
    var sfxStart = new Audio('sfx/Start.mp3');
    sfxStart.play();


}

function ponerBG(){
	document.querySelector('.bg-transicion').style.backgroundColor="rgba(0,0,0.1)";
	document.querySelector('.bg-transicion').classList.add("bg-transicion-show");

}

function quitarBG(){
	document.querySelector('.bg-transicion').style.backgroundColor="rgba(0,0,0,.0)";
	setTimeout(
		function(){
			document.querySelector('.bg-transicion').classList.remove('bg-transicion-show');

		},2000)
}

let personajeActual = 1;
function siguientePersonaje(){
	personajeActual++;
	if(personajeActual==7){
		personajeActual=1;
	}
	

	document.getElementById('personaje').src="img/p"+personajeActual+".png"
	var sfxclic = new Audio ('sfx/Start.mp3');
	sfxclic.play();
}

function anteriorPersonaje(){
personajeActual--;
if(personajeActual==0){
	personajeActual=6;
}

	document.getElementById('personaje').src="img/p"+personajeActual+".png"
	var sfxclic = new Audio ('sfx/Start.mp3');
	sfxclic.play();

}


function personaje2(){
	ponerBG();
	setTimeout(
		function(){
			window.location.assign('personaje2.html');
		},2000)
	var sfxclic = new Audio('sfx/Start.mp3');
	sfxclic.play();
}

function comenzarJuego(){
	localStorage.setItem('personaje2',personajeActual);
	localStorage.setItem('jugador2',document.getElementById('jugador2').value)
		;
	ponerBG();
	setTimeout(
		function(){
			window.location.assign('juego.html');
		},2000)
	var sfxStart = new Audio('sfx/start.m4a');
	sfxStart.play();
}
function cargarEscenario(){
	//cargando escenario
	bg= Math.floor(Math.random()*3)+1;
	document.querySelector('.bg-juego').style.backgroundImage = 
											"url(img/bg"+bg+".png)";
	//cargar noombres jugadores
	document.querySelector('.p1').style.backgroundImage ="url(img/p"+localStorage.getItem('#jugador1')+".png"
	document.querySelector('.p1').style.backgroundImage ="url(img/p"+localStorage.getItem('#jugador2')+".png"
	//Cargar nombres de jugadores
	document.querySelector('#jugador1').innerHTML = localStorage.getItem('#jugador1')
	document.querySelector('#jugador1').innerHTML = localStorage.getItem('#jugador2')
}

//Temporizador
function listos(){
	setTimeout(function(){
		document.querySelector('.msj').style.opacity="1";
	},500);
}

function conteo(){
	var sfxclic = new Audio('sfx/clic.m4a');

	document.querySelector('.msj').style.opacity = "0";
	document.querySelector('.no3').style.opacity = "1";
	sfxclic.play();

	setTimeout(function(){
		document.querySelector('.no3').style.opacity="0";
		document.querySelector('.no2').style.opacity="1";
		sfxclic.play();

	setTimeout(function(){
		document.querySelector('.no2').style.opacity="0";
		document.querySelector('.no1').style.opacity="1";
		sfxclic.play();
		tiempoRandom = Math.floor(Math.random()*10) +1;
		tiempoRandom = tiempoRandom + "000";

		setTimeout(function(){
			document.querySelector('.no1').style.opacity = "0";
			document.querySelector('.conteo').style.display = "none";
			sfxclic.play();
		})
		}, 1000)
	}, 1000)

}