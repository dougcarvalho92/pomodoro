import styles from "./styles.module.css";
type ButtonProps = React.ComponentProps<"button"> & {
  icon: React.ReactNode;
  color?: "green" | "red";
};
export default function Button({
  icon,
  color = "green",
  ...props
}: ButtonProps) {
  return (
    <button className={`${styles.btn} ${styles[color]}`} {...props}>
      {icon}
    </button>
  );
}
