import styles from "./styles.module.css";
type ButtonProps = React.ComponentProps<"input"> & {
  label?: string;
};
export default function FormInput({
  label,
  type = "text",
  ...props
}: ButtonProps) {
  return (
    <div className={styles.form__row}>
      {label && (
        <label htmlFor={props.id} className={styles.form__label}>
          {label}
        </label>
      )}
      <input type={type} className={styles.form__input} {...props} />
    </div>
  );
}
