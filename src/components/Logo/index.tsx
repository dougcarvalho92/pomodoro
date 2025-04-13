import { TimerIcon } from "lucide-react";
import { APP_NAME } from "../../constants";
import styles from "./styles.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <a href='#' className={styles.logo__link}>
        <TimerIcon />
        {APP_NAME}
      </a>
    </div>
  );
}
