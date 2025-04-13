import { PropsWithChildren } from "react";
import styles from "./styles.module.css";
type ButtonProps = React.ComponentProps<"form"> & PropsWithChildren;
export default function Form({ children, ...props }: ButtonProps) {
  return (
    <form {...props} className={styles.form}>
      {children}
    </form>
  );
}
