import style from '../Greetings/style.module.css';

export function Greetings({ lang, children }) {
  let greeting;

  switch (lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    case 'es':
      greeting = 'Hola';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
      break;
  }
  return (
    <div className={style.greeting}>
      <p>
        {greeting} {children}
      </p>
    </div>
  );
}
