import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonContainer from './Components/ButtonContainer.jsx'

function App() {
  return (
    <div className={styles.calculator}>
      <Display/>
      <ButtonContainer/>
     
    </div>
  );
}

export default App;
