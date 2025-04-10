import styles from "./styles.module.css";
type CycleDotProps = {
  title: string;
  status: string;
  description: string;
};
export default function CycleDot(props: CycleDotProps) {
  return (
    <span
      className={`${styles.cycleDot} ${styles[props.status]}`}
      title={props.title}
      aria-label={`Indicador de ciclo de ${props.description}`}
    ></span>
  );
}
