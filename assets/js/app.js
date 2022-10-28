/*
  Cambios
  Rectifique la forma de tomar el name por #name
  Renombre las constantes de elementos del DOM
  Volvi la funcion asincrona
  Cree una nueva constante que toma el objeto JSON del fetch respuesta
  Cambie las comillas simples por comillas hacia atras ` en la asignacion del contenido de los elementos DOM
  Asigne correctamente el elemento DOM del cual sale el error
 */

// Enlace del API
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Elementos del DOM
const $name = document.querySelector('#name');
const $blog = document.querySelector('#blog');
const $location = document.querySelector('#location');

// Fetch de la pagina (llamada a una API)
async function displayUser(username) {
  $name.textContent = 'cargando...'; // Texto de espera en lo que hace la solicitud fetch
  const response = await fetch(`${usersEndpoint}/${username}`); // Solicitud fetch
  const data = await response.json(); // Conversion de la solicitud a un objeto JSON
  // console.log(data); // Imprime objeto de la respuesta
  /* Se asigna la informacion de la respuesta a los elementos del DOM */
  $name.textContent = `${data.name}`;
  $blog.textContent = `${data.blog}`;
  $location.textContent = `${data.location}`;
}

// Respuesta en caso de que falle la solicitud fetch
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $name.textContent = `Algo salió mal: ${err}`
}

// Funcion que se ejecuta al ser cargado este archivo
displayUser('stolinski').catch(handleError);