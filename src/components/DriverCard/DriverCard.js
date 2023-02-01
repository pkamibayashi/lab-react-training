import { Rating } from '../Rating/Rating'; //Importei o Componente Rating para poder gerar a nota no meu DriverCard sem precisar reescrever a function.
// A logica foi imaginar que a DriverCard é um componente assim como App.js.
import style from '../DriverCard/style.module.css';
export function DriverCard({ name, rating, img, car }) {
  let { model, licensePlate } = car;

  return (
    <div className={style.father}>
      <div className={style.childOne}>
        <img src={img} />
      </div>
      <div className={style.childTwo}>
        <h3>{name}</h3>
        <p>
          <Rating>{rating}</Rating>
        </p>

        <p>
          {model} - {licensePlate}
        </p>
      </div>
    </div>
  );
}
