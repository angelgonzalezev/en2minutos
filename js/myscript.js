let historias = [
  {
    "Nombre": "Hay alguien ahí",
    "Imagen": "images/hay-alguien-ahi.jpg",
    "Url": "https://en2minutos.webflow.io/posts/hay-alguien-ahi"
  },
  {
    "Nombre": "La cabaña",
    "Imagen": "images/la-cabania.jpg",
    "Url": "https://en2minutos.webflow.io/posts/la-cabana"
  },
  {
    "Nombre": "La decisión de las ánimas",
    "Imagen": "images/la-decision-de-las-animas.jpg",
    "Url": "https://en2minutos.webflow.io/posts/la-decision-de-las-animas"
  },
  {
    "Nombre": "Lo que lo persiguió",
    "Imagen": "images/lo-que-lo-persiguio.jpg",
    "Url": "https://en2minutos.webflow.io/posts/lo-que-lo-persiguio"
  },
  {
    "Nombre": "No enciendas la luz",
    "Imagen": "images/no-enciendas-la-luz.jpg",
    "Url": "https://en2minutos.webflow.io/posts/no-enciendas-la-luz"
  },
  {
    "Nombre": "No vayas",
    "Imagen": "images/no-vayas.jpg",
    "Url": "https://en2minutos.webflow.io/posts/no-vayas"
  },
  {
    "Nombre": "En medio de la oscuridad",
    "Imagen": "images/En-medio-de-la-oscuridad.jpg",
    "Url": "https://en2minutos.webflow.io/posts/en-medio-de-la-oscuridad"
  },
  {
    "Nombre": "La niña suplente",
    "Imagen": "images/la-nina-suplente.jpg",
    "Url": "https://en2minutos.webflow.io/posts/la-nina-suplente"
  },
  {
    "Nombre": "La habitación de la torre",
    "Imagen": "images/la-habitacion-de-la-torre.jpg",
    "Url": "https://en2minutos.webflow.io/posts/la-habitacion-de-la-torre"
  },
  {
    "Nombre": "Yuki-Onna o la novia de nieve",
    "Imagen": "images/yuki-ona.jpg",
    "Url": "https://en2minutos.webflow.io/posts/yuki-onna-o-la-novia-de-nieve"
  },
  {
    "Nombre": "El huerfano sacrificado",
    "Imagen": "images/el-huerfano-sacrificado.jpg",
    "Url": "https://en2minutos.webflow.io/posts/el-huerfano-sacrificado"
  },
  {
    "Nombre": "El fantasma de mi casa",
    "Imagen": "images/el-fantasma-de-mi-casa.jpg",
    "Url": "https://en2minutos.webflow.io/posts/el-fantasma-de-mi-casa"
  },
  {
    "Nombre": "La noche en la morgue",
    "Imagen": "images/la-noche-en-la-morgue.jpg",
    "Url": "https://en2minutos.webflow.io/posts/la-noche-en-la-morgue"
  },
  {
    "Nombre": "Población: 0",
    "Imagen": "images/poblacion-0.jpg",
    "Url": "https://en2minutos.webflow.io/posts/poblacion-0"
  },
  {
    "Nombre": "Banquete siniestro",
    "Imagen": "images/banquete-siniestro.jpg",
    "Url": "https://en2minutos.webflow.io/posts/banquete-siniestro"
  }
]

/**
 * Funcion para rotar las imagenes y nombres
 */
function cambiarHistoria() {
  var i = Math.round(Math.random() * (historias.length-1))
  document.getElementById("image").src = historias[i].Imagen;
  document.getElementById("story-title").textContent = historias[i].Nombre;
  document.getElementById("link").href = historias[i].Url;
}

/**
 * Funcion para rotar las imagenes y nombres
 */
function seleccionarHistoria() {
  var i = Math.round(Math.random() * (historias.length - 1))
  document.getElementById("image").src = historias[i].Imagen;
  document.getElementById("story-title").textContent = historias[i].Nombre;
  document.getElementById("link").href = historias[i].Url;
  //Para que aparezcan los botones
  document.getElementById('container-button1').style.display = 'block';
  document.getElementById('link-button1').href = historias[i].Url;
  document.getElementById('container-button2').style.display = 'block';
}

/**
* Función que se ejecuta al cargar la página
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