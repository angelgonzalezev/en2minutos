let historias = [
  {
    "Nombre": "Hay alguien ahí",
    "Imagen": "/images/hay alguien ahi.jpg",
    "Url": "https://en2minutos.webflow.io/posts/hay-alguien-ahi"
  },
  {
    "Nombre": "La cabaña",
    "Imagen": "/images/la cabaña.jpg",
    "Url": "https://en2minutos.webflow.io/posts/la-cabana"
  },
  {
    "Nombre": "La decisión de las ánimas",
    "Imagen": "/images/la decision de las animas.jpg",
    "Url": "https://en2minutos.webflow.io/posts/la-decision-de-las-animas"
  },
  {
    "Nombre": "Lo que lo persiguió",
    "Imagen": "/images/lo que lo persiguió.jpg",
    "Url": "https://en2minutos.webflow.io/posts/lo-que-lo-persiguio"
  },
  {
    "Nombre": "No enciendas la luz",
    "Imagen": "/images/no enciendas la luz.jpg",
    "Url": "https://en2minutos.webflow.io/posts/no-enciendas-la-luz"
  },
  {
    "Nombre": "No vayas",
    "Imagen": "/images/no vayas.jpg",
    "Url": "https://en2minutos.webflow.io/posts/no-vayas"
  }
]

function mostrarBotones(){
 // document.getElementById('container-button').style.display = 'block';
}

/**
 * Funcion para rotar las imagenes y nombres
 */
function cambiarHistoria() {
  var i = Math.round(Math.random() * (historias.length-1))
  document.getElementById("image").src = historias[i].Imagen;
  document.getElementById("title").textContent = historias[i].Nombre;
  document.getElementById("link").href = historias[i].Url;
}

/**
 * Funcion para rotar las imagenes y nombres
 */
function seleccionarHistoria() {
  var i = Math.round(Math.random() * (historias.length - 1))
  document.getElementById("image").src = historias[i].Imagen;
  document.getElementById("title").textContent = historias[i].Nombre;
  document.getElementById("link").href = historias[i].Url;
  document.getElementById('container-button1').style.display = 'block';
  document.getElementById('link-button1').href = historias[i].Url;
  document.getElementById('container-button2').style.display = 'block';
}




/**
* Función que se ejecuta una vez cargada la página
*/
onload = function () {
  //Al cargar la pantalla los botones estan ocultos
  document.getElementById('container-button1').style.display = 'none';
  document.getElementById('container-button2').style.display = 'none';
  // Cargamos una imagen aleatoria
  cambiarHistoria();

  // Indicamos que cada 100 milisegundos cambie la imagen
  let timerId = setInterval(cambiarHistoria, 100);

  setTimeout(() => { clearInterval(timerId); seleccionarHistoria(); }, 5000);

  mostrarBotones();

}