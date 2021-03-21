function getPilihanCom() {
  com = Math.random();
  if (com < 0.34) return "paper";
  if (com >= 0.34 && com < 0.6) return "scissor";
  return "rock";
}

function getHasil(com, player) {
  if (com == player) return "DRAW";
  if (player == "rock") return com == "paper" ? "YOU LOSE" : "YOU WIN";
  if (player == "paper") return com == "scissor" ? "YOU LOSE" : "YOU WIN";
  if (player == "scissor") return com == "rock" ? "YOU LOSE" : "YOU WIN";
}

function putar() {
  const imgCom = document.querySelector(".img-computer");
  const gambar = ["rock", "scissor", "paper"];

  let i = 0;

  const tStart = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - tStart > 1000) {
      clearInterval;
      return;
    }
    imgCom.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll(".player img");
let sC = 0;
let sP = 0;
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanCom();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    putar();
    setTimeout(function () {
      const imgCom = document.querySelector(".img-computer");
      imgCom.setAttribute("src", "img/" + pilihanComputer + ".png");
      const info = document.querySelector(".result");
      info.innerHTML = hasil;

      const scoreCom = document.querySelector(".score-computer");
      const scorePlayer = document.querySelector(".score-player");

      if (hasil == "YOU LOSE") {
        scoreCom.innerHTML = sC += 1;
      }

      if (hasil == "YOU WIN") {
        scorePlayer.innerHTML = sP += 1;
      }
    }, 1000);
  });
});
