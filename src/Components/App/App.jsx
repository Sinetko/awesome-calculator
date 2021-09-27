import { useState } from "react";
import Header from "../Header/Header";
import Screen from "../Screen/Screen";
import Buttons from "../Buttons/Buttons";
import Styled from "./styles";

function App() {

  //State and callbacks for theme
  const [theme, setTheme] = useState('light');

  const changeThemeHendler = () => {
    setTheme((prevState) => {
      if (prevState === 'light') {
        return 'dark';
      }
      return 'light';
    })
  };

  const [calcMode, setCalcMode] = useState(true);
  const [convMode, setConvMode] = useState(false);

  const setCalcModeHandler = () => {
    setConvMode(false);
    setCalcMode(true);
  }
  const setConvModeHandler = () => {
    setCalcMode(false);
    setConvMode(true);
  }

  //State for math operations
  const [current, setCurrent] = useState('');
  const [previous, setPrevious] = useState('');
  
  //State setters
  const setCurrentValue = (el) => {
    let value = el.target.getAttribute('data');
    setCurrent(current + value);
  }


  return (
    <>
      <Styled.GlobalStyles />
      <Styled.App $theme={theme}>

        <Header 
          $theme={theme} 
          $calcMode={calcMode} 
          $convMode={convMode} 
          changeThemeHendler={changeThemeHendler}
          setCalcModeHandler={setCalcModeHandler} 
          setConvModeHandler={setConvModeHandler} 
        />

        <Screen current={current} previous={previous}/>

        <Buttons $theme={theme} setCurrentValue={setCurrentValue} />

      </Styled.App>

    </>
  );
}

export default App;
