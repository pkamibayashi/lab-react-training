import style from '../Rating/style.module.css';
export function Rating({ children }) {
  let rating = Math.round(children);
  let stars = '';

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars += '★';
    } else {
      stars += '☆';
    }
  }

  return <p className={style.star}>{stars}</p>;
}
