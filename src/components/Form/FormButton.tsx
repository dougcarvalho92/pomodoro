import { LucideProps } from "lucide-react";
import styles from "./styles.module.css";
type ButtonProps = React.ComponentProps<"button"> & {
  Icon: React.ComponentType<LucideProps>;
  color?: "green" | "red";
};
export default function FormButton({
  Icon,
  color = "green",
  ...props
}: ButtonProps) {
  return (
    <button className={`${styles.btn} ${styles[color]}`} {...props}>
      <Icon />
    </button>
  );
}
