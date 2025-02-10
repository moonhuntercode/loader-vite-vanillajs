import "./style.css";

// document.querySelector("#app-container").innerHTML =
  /*html*/
  // `
// <!--comments in html-->
// <!--aquí el html que insertas a dentro de #main-->
// Simular una carga (por ejemplo, datos desde una API)
const simulateLoading = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(); // Resuelve la promesa después de 3 segundos
    }, 3000); // 3 segundos de espera ⏰
  });
};

// Función para ocultar el loader
const hideLoader = () => {
  const loaderContainer = document.getElementById('loader-container');
  if (loaderContainer) {
    loaderContainer.style.visibility= "hidden"; // Ocultar el loader 🙈
    console.log('Loader oculto ✅');
  }
};

// Función para mostrar el botón Start
const showStartButton = () => {
  const startButtonContainer = document.getElementById('start-button-container');
  if (startButtonContainer) {
    startButtonContainer.classList.remove('hidden'); // Mostrar el botón 🖐️
    console.log('Botón Start visible ✅');
  }
};

// Función para manejar el clic del botón Start
const handleStartButtonClick = () => {
  console.log('Botón Start presionado 🚀');
  alert('¡Bienvenido! 🎉'); // Ejemplo de acción al hacer clic
};

// Inicializar la lógica del loader
const initLoader = async () => {
  console.log('Cargando datos... 🔄');
  await simulateLoading(); // Esperar a que termine la simulación
  hideLoader(); // Ocultar el loader cuando termine
  showStartButton(); // Mostrar el botón Start

  // Agregar evento al botón Start
  const startButton = document.getElementById('start-button');
  if (startButton) {
    startButton.addEventListener('click', handleStartButtonClick);
  }

  console.log('Datos cargados correctamente 🎉');
};

// Ejecutar la inicialización
initLoader();