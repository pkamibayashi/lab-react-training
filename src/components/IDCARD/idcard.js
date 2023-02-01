import style from '../IDCARD/style.module.css';

export function IdCard({
  lastName,
  firstName,
  gender,
  height,
  birth,
  picture,
}) {
  return (
    <div className={style.pai}>
      <img src={picture} />
      <div className={style.tables}>
        <p>
          <strong>Frist Name:</strong> {firstName}
        </p>

        <p>
          <strong>Last Name:</strong> {lastName}
        </p>

        <p>
          <strong>Gender:</strong> {gender}
        </p>

        <p>
          <strong>Heigth: </strong>
          {height}m
        </p>

        <p>
          <strong>Birth: </strong>
          {birth.toDateString()}
        </p>
      </div>
    </div>
  );
}
