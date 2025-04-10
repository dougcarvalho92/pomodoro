import { PropsWithChildren } from "react";
import styles from "./styles.module.css";
export default function CyclesList(props: PropsWithChildren) {
  return <div className={styles.cycleDots}>{props.children}</div>;
}
