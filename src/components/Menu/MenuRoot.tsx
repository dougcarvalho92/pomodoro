import { PropsWithChildren } from "react";
import styles from "./styles.module.css";
export default function MenuRoot(props: PropsWithChildren) {
  return <nav className={styles.menu}>{props.children}</nav>;
}
