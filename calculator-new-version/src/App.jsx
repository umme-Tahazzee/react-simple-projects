import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer.jsx";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    
   if(buttonText === 'C'){
     setCalVal("");
   }else if(buttonText === '='){
    const result = eval(calVal)
     setCalVal(result)
   }else{
       const newValue = calVal + buttonText;
       setCalVal(newValue);
   }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
