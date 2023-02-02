import { useState } from 'react';
import style from '../LikeButton/style.module.css';

export function LikeButton() {
  const [value, setNumber] = useState(0);

  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  function addNumber() {
    setNumber(value + 1);
  }

  return (
    <button
      style={{ backgroundColor: colors[value % 6] }} //modulo de 6 ou resto da divisao. Resto da divisao de 6/6 = 0. Resto da divisao de 7/6 = 1.. Dessa forma, o valor sempre sera 0-5
      className={style.button}
      onClick={addNumber}
    >
      {value} Likes
    </button>
  );
}
