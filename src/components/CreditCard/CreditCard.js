import visa from '../../assets/images/visa.png';
import masterCardSrc from '../../assets/images/master-card.png';
import style from '../CreditCard/style.module.css';

export function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  let src;

  if (type === 'Visa') {
    src = visa;
  }
  if (type === 'Master Card') {
    src = masterCardSrc;
  }

  return (
    <>
      <div style={{ backgroundColor: bgColor }} className={style.parent}>
        <header className={style.flag}>
          <img src={src} />
        </header>
        <section className={style.number}>
          <p style={{ color: color }}>**** **** **** {number.slice(-4)}</p>
        </section>
        <footer className={style.data}>
          <p style={{ color: color }}>
            Expires {expirationMonth}/{expirationYear}
          </p>

          <p style={{ color: color }}>{bank}</p>
          <p style={{ color: color }}>{owner}</p>
        </footer>
      </div>
    </>
  );
}
