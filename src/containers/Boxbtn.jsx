import Button from "./Button";
import styles from "../css/Boxbtn.module.css";

function Boxbtn({ onButtonClick }) {
  let btns = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    ".",
    "Del",
    "C",
    "=",
  ];
  return (
    <div className={styles.btnContainer}>
      {btns.map((btn) => (
        <Button
          onButtonClick={() => onButtonClick(btn)}
          key={btn}
          btnName={btn}
        />
      ))}
    </div>
  );
}

export default Boxbtn;
