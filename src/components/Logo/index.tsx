import { TimerIcon } from "lucide-react";
import styles from "./styles.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <a href='#' className={styles.logo__link}>
        <TimerIcon />
        Focusly
      </a>
    </div>
  );
}
