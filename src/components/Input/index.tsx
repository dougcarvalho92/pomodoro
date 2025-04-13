import styles from "./styles.module.css";
type ButtonProps = React.ComponentProps<"input"> & {
  label?: string;
};
export default function Input({ label, type = "text", ...props }: ButtonProps) {
  return (
    <div className={styles.row}>
      {label && (
        <label htmlFor={props.id} className={styles.label}>
          {label}
        </label>
      )}
      <input type={type} className={styles.input} {...props} />
    </div>
  );
}
