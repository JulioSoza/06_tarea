// Obtener elementos del DOM
const userNameInput = document.getElementById('userName');
const rollButton = document.getElementById('rollButton');
const welcomeMessageOutput = document.getElementById('welcomeMessage');
const diceResultOutput = document.getElementById('diceResult');
const gameResultOutput = document.getElementById('gameResult');

// Función para lanzar un dado (generar un número aleatorio entre 1 y 6)
function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

// Función para determinar el resultado del lanzamiento
function determinarResultado(dice1, dice2) {
  const suma = dice1 + dice2;

  if (suma === 2) {
    return "¡Doble uno! Mala suerte.";
  } else if (suma === 7 || suma === 11) {
    return "¡Suerte! Has ganado esta ronda.";
  } else if (dice1 === dice2) {
    return "¡Doble! Tienes un turno extra.";
  } else {
    return "Nada especial, ¡intenta de nuevo!";
  }
}

// Evento al hacer clic en el botón
rollButton.addEventListener('click', () => {
  // Obtener el nombre del usuario
  const userName = userNameInput.value.trim();

  // Mostrar mensaje de bienvenida usando una expresión ternaria
  welcomeMessageOutput.textContent = userName ? `¡Bienvenido, ${userName}!` : "¡Bienvenido!";

  // Lanzar los dados
  const dice1 = lanzarDado();
  const dice2 = lanzarDado();

  // Mostrar los valores de los dados
  diceResultOutput.textContent = `Dados: ${dice1} y ${dice2}`;

  // Determinar y mostrar el resultado del lanzamiento
  gameResultOutput.textContent = determinarResultado(dice1, dice2);
});