import style from '../IDCARD/style.module.css';

export function IdCard({
  lastName,
  firstName,
  gender,
  height,
  birth,
  picture,
}) {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayOfWeekNumber = birth.getDay();
  const dayOfWeekName = daysOfWeek[dayOfWeekNumber];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const monthNumber = birth.getMonth();
  const monthName = months[monthNumber];

  return (
    <div className={style.pai}>
      <img src={picture} />
      <table>
        <p>Frist Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Heigth: {height}m</p>

        <p>
          Birth: {dayOfWeekName} {monthName} {birth.getDate()}{' '}
          {birth.getFullYear()}
        </p>
      </table>
    </div>
  );
}
