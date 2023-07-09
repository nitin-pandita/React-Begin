import styles from "./button.module.css";
interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

function Button({ children, onClick, color = "primary" }: Props) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
