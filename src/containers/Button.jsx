import styles from "../css/Button.module.css";
function Button({ btnName, onButtonClick }) {
  return (
    <button onClick={onButtonClick} className={styles.btnStyle}>
      {btnName}
    </button>
  );
}

export default Button;
