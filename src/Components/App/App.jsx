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

  //----State for math operations----
  const [current, setCurrent] = useState('');
  const maxCurrentLength = 10;
  const [previous, setPrevious] = useState('');
  const [temporary, setTemporary] = useState(''); //for percent calculating

  //State setters
  const allClear = () => {  //for AC button
    setPrevious('');
    setCurrent('');
  }

  const del = () => { //for DEL button
    if(current.length === 0) return;
    setCurrent((current.substring(0, current.length - 1)));
  }

  const invertValue = () => {  //for ± button
    if(current === '-'){
      setCurrent('')
      return
    }
    if(current === ''){
      setCurrent('-')
      return
    }
    let result = 0 - current;
    setCurrent(result.toString());
  }

  const setCurrentValue = (el) => {  //for nums buttons
    if (current.length === maxCurrentLength) return; // maxlength

    let value = el.target.getAttribute('data');

    if (value === '.' && current === '') {value = '0.'}; //fix nums .1111 
    if (value === '+' && current === '') return; //fix operations without nums
    if (value === '*' && current === '') return; //fix operations without nums
    if (value === '/' && current === '') return; //fix operations without nums
    if (value === '-' && current === '-') return; //fix nums ---*/*/++1234
    if (value === '+' && current === '-') return; //fix nums ---*/*/++1234
    if (value === '/' && current === '-') return; //fix nums ---*/*/++1234
    if (value === '*' && current === '-') return; //fix nums ---*/*/++1234
    if (value === '0' && current === '0') return; //fix nums 000000
    if (value === '%' && current === '' && previous === '') return; //fix percents without nums
    if (value === '.' && current.includes('.')) return; //fix nums 0..0..1....
    
      setCurrent(current + value);
    
  }
  const setPreviousValue = (el) => {  //for operation buttons
    let value = el.target.getAttribute('data');
    
    if (value === '-' && previous === '' && current === '') return setCurrent('-'); //fix operations without nums
    if (value === '-' && previous === '' && current === '-') return; //fix operations without nums
    if (value === '+' && previous === '' && current === '') return; //fix operations without nums
    if (value === '+' && previous.charAt(previous.length-1) === '+' && current === '') return; //fix operations without nums
    if (value === '-' && previous.charAt(previous.length-1) === '-' && current === '') return; //fix operations without nums
    if (value === '/' && previous.charAt(previous.length-1) === '/' && current === '') return; //fix operations without nums
    if (value === '*' && previous.charAt(previous.length-1) === '*' && current === '') return; //fix operations without nums
    if (value === '*' && previous === '' && current === '') return; //fix operations without nums
    if (value === '/' && previous === '' && current === '') return; //fix operations without nums
    if (value === '-' && current === '-') return; //fix nums ---*/*/++1234
    if (value === '+' && current === '-') return; //fix nums ---*/*/++1234
    if (value === '/' && current === '-') return; //fix nums ---*/*/++1234
    if (value === '*' && current === '-') return; //fix nums ---*/*/++1234
    

    setTemporary (current);
    setPrevious(previous + current + value);
    setCurrent('');
  }

  const percent =() =>{  //for percent calculating
    let result = temporary * current / 100;
    setPrevious(previous + result)
    setCurrent('')

  }

  const equal = () => { //for equal button

    if (previous === '') return; //fix crash
    if (previous.charAt(previous.length-1) === '+' && current === '') return; //fix crash
    if (previous.charAt(previous.length-1) === '-' && current === '') return; //fix crash
    if (previous.charAt(previous.length-1) === '/' && current === '') return; //fix crash
    if (previous.charAt(previous.length-1) === '*' && current === '') return; //fix crash

   let result = previous + current;
   setPrevious('')
   result = eval(result);
   setCurrent(result)
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

        <Screen current={current} previous={previous} />

        <Buttons
          $theme={theme}
          allClear={allClear}
          del={del}
          equal={equal}
          setCurrentValue={setCurrentValue}
          setPreviousValue={setPreviousValue}
          invertValue={invertValue}
          percent={percent}
        />

      </Styled.App>

    </>
  );
}

export default App;
