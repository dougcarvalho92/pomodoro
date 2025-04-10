import { PropsWithChildren } from "react";
import styles from "./styles.module.css";
export default function CycleRoot(props: PropsWithChildren) {
  return <div className={styles.cycles}>{props.children}</div>;
}
