import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import styles from "./styles.module.css";

export default function CountDown() {
  const { state } = useTaskContext();
  return (
    <div className={styles.countdown}>{state.formattedSecondsRemaining}</div>
  );
}
