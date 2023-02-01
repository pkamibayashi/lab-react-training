import style from '../BoxColor/style.module.css';

export function BoxColor({ r, g, b }) {
  return (
    <div
      className={style.size}
      style={{ backgroundColor: `rgb(${r},${g},${b})` }}
    >
      <p>
        rgb({r},{g},{b})
      </p>
    </div>
  );
}
