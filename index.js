const KEY_TABLE = {
  LEFT: 37,
  RIGHT: 39
}

dodger.style.backgroundColor = "#FF1493";

let moveDodgerLeft = (e) => {
  const dodger = e.target.querySelector("#dodger");
  const lPos = parseInt(dodger.style.left);

  if ( lPos > 0 ) {
    let newPos = `${lPos - 10}px`;
    dodger.style.left = newPos;
  }
}

let moveDodgerRight = (e) => {
  const dodger = e.target.querySelector("#dodger");
  const lPos = parseInt(dodger.style.left);
  const maxLpos = parseInt(document.querySelector("#game").offsetWidth)
   - parseInt(dodger.offsetWidth);

  if ( lPos < maxLpos ) {
    let newPos = `${lPos + 10}px`;
    dodger.style.left = newPos;
  }
}

document.addEventListener('keydown', e => {
  if (e.which == KEY_TABLE.LEFT) {
    moveDodgerLeft(e);
  } else if (e.which == KEY_TABLE.RIGHT) {
    moveDodgerRight(e);
  }
})
