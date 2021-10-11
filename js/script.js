const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let isJumping = false;
let position = 0;

function handlekeyUp(event) {
  if (event.keyCode === 32 || event.keyCode === 38) {
    if (!isJumping) {
      jump();
    }
  }
}

function jump() {
  isJumping = true; //Pulando
  let upInterval = setInterval(() => {
    if (position >= 150) {
      //Parar de Subir
      clearInterval(upInterval);
      //   Descer
      let downInterval = setInterval(() => {
        if (position <= 0) {
          //Parar de Descer
          clearInterval(downInterval);
          isJumping = false;
        } else {
          // Descendo
          position -= 20;
          dino.style.bottom = position + "px";
        }
      }, 20); //Milisegundos
    } else {
      //   Subindo
      position += 20;
      dino.style.bottom = position + "px";
    }
  }, 20); //20 milisegundos
}

function createCactus() {
  //criando elemento
  const cactus = document.createElement("div");
  let cactusPosition = 1000;
  let randomTime = Math.random() * 6000;
  console.log(randomTime);
  //   adicionando classe
  cactus.classList.add("cactus");
  cactus.style.left = 1000 + "px";
  background.appendChild(cactus);

  let leftInterval = setInterval(() => {
    if (cactusPosition < -60) {
      clearInterval(leftInterval);
      background.removeChild(cactus);
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
      clearInterval(leftInterval);
      document.body.innerHTML = '<h1 class="game-over">Fim do Jogo  </h1>';
    } else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + "px";
    }
  }, 20);

  setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener("keyup", handlekeyUp);
