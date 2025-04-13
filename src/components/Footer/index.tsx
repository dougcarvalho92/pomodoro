import { Link } from "react-router";
import { APP_NAME } from "../../constants";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to='/about-pomodoro/'>
        Entenda como funciona a técnica pomodoro
      </Link>
      <Link to='/'>
        {APP_NAME} Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
      </Link>
    </footer>
  );
}
