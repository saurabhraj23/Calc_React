import styles from "../css/Display.module.css";
function Display({ CalcVal }) {
  return (
    <>
      <input className={styles.inputBox} type="text" value={CalcVal} readOnly />
    </>
  );
}

export default Display;
