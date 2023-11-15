let attack1 = document.getElementById("atkbtn1");
let heal1 = document.getElementById("hlbtn1");
let attack2 = document.getElementById("atkbtn2");
let heal2 = document.getElementById("hlbtn2");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let reset = document.getElementById("reset");
let random = document.getElementById("random");
let winner = document.getElementById("winner");
let punch = document.getElementById("punch");
let punch1 = document.getElementById("punch1");
let increase = document.getElementById("increase");
let won = document.getElementById("won");
class Play {
  constructor(score) {
    this.score = score;
    this.logicVal = null;
  }

  attack = () => {
    let random = Math.floor(Math.random() * 10);
    let logic = this.score - random;
    this.logicVal = logic;
    this.score = logic;
    console.log(logic);
    return logic;
  };

  heal = () => {
    let random = Math.floor(Math.random() * 10);
    let logic1 = (this.score += random);
    console.log(logic1);
    return logic1;
  };
}

class Play1 {
  constructor(score) {
    this.score = score;
  }

  attack1 = () => {
    let random = Math.floor(Math.random() * 10);
    let logic = this.score - random;
    this.score = logic;
    console.log(logic);
    return logic;
  };

  heal1 = () => {
    let random = Math.floor(Math.random() * 10);
    let logic1 = (this.score += random);
    console.log(logic1);
    return logic1;
  };
}

let game1 = new Play(100);
let game2 = new Play1(100);

attack1.onclick = () => {
  game1.attack();
  score2.innerText = `${game1.score}`;
  if (game1.score <= 0 && game2.score >= 1) {
    winner.innerHTML = `Player 1 Won!!`;
    won.play();
  } else if (game2.score <= 0 && game1.score >= 1) {
    winner.innerHTML = `Player 2 Won!!`;
    won.play();
  }
  punch.play();
};

heal1.onclick = () => {
  game1.heal();
  score1.innerText = `${game1.score}`;
  increase.play();
};

attack2.onclick = () => {
  game2.attack1();
  score1.innerText = `${game2.score}`;
  if (game1.score <= 0 && game2.score >= 1) {
    winner.innerHTML = `Player 1 Won!!`;
    won.play();
  } else if (game2.score <= 0 && game1.score >= 1) {
    winner.innerHTML = `Player 2 Won!!`;
    won.play();
  }
  punch1.play();
};

heal2.onclick = () => {
  game2.heal1();
  score2.innerText = `${game2.score}`;
  increase.play();
};

document.addEventListener("keydown", (e) => {
  if (e.key === "a") {
    game1.attack();
    score2.innerText = `${game1.score}`;
    punch.play();

    if (game1.score <= 0 && game2.score >= 1) {
      winner.innerHTML = `Player 1 Won!!`;
      won.play();
    } else if (game2.score <= 0 && game1.score >= 1) {
      winner.innerHTML = `Player 2 Won!!`;
      won.play();
    }
  } else if (e.key === "h") {
    game1.heal();
    score1.innerText = `${game1.score}`;
    increase.play();
  } else if (e.key === "s") {
    game2.attack1();
    score1.innerText = `${game2.score}`;
    punch1.play();

    if (game1.score <= 0 && game2.score >= 1) {
      winner.innerHTML = `Player 1 Won!!`;
      won.play();
    } else if (game2.score <= 0 && game1.score >= 1) {
      winner.innerHTML = `Player 2 Won!!`;
      won.play();
    }
  } else if (e.key === "p") {
    game2.heal1();
    score2.innerText = `${game2.score}`;
    increase.play();
  }
});

reset.onclick = () => {
  score1.innerText = 100;
  score2.innerText = 100;
  winner.innerHTML = ``;
};

random.onclick = () => {
  let random = Math.floor(Math.random() * 2);
  if (random === 1) {
    winner.innerHTML = `Player 1 Won!!`;
  } else if (random === 0) {
    winner.innerHTML = `Player 2 Won!!`;
  }
  won.play();
};

document.addEventListener("keydown", (e) => {
  if (e.key === "r") {
    let random = Math.floor(Math.random() * 2);
    if (random === 1) {
      winner.innerHTML = `Player 1 Won!!`;
    } else if (random === 0) {
      winner.innerHTML = `Player 2 Won!!`;
    }
    won.play();
  }
});
