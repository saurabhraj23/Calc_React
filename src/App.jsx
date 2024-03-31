import Display from "./containers/Display";
import Boxbtn from "./containers/Boxbtn";
import styles from "./css/App.module.css";
import { useState } from "react";
function App() {
  let [CalcVal, setCalcVal] = useState("");

  const onButtonClick = (btn) => {
    if (btn === "C") {
      setCalcVal("");
    } else if (btn === "=") {
      let result = eval(CalcVal);
      setCalcVal(result);
    } else if (btn === "Del") {
      let temp = CalcVal.slice(0, -1);
      setCalcVal(temp);
    } else {
      let newVal = CalcVal + btn;
      setCalcVal(newVal);
    }
  };

  return (
    <center>
      <h1>Calculator</h1>
      <div className={styles.container}>
        <Display CalcVal={CalcVal} />
        <Boxbtn onButtonClick={onButtonClick} />
      </div>
    </center>
  );
}

export default App;
