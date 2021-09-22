import { useState } from "react";
import Header from "../Header/Header";
import Styled from "./styles";

function App() {

  const [theme, setTheme] = useState('light');

  const changeThemeHendler = () => {
    setTheme((prevState) => {
      if (prevState === 'light') {
        return 'dark';
      }
      return 'light';
    })
  };

  return (
    <>
      <Styled.GlobalStyles />
      <Styled.App $theme={theme}>

        <Header changeThemeHendler={changeThemeHendler} />

      </Styled.App>

    </>
  );
}

export default App;
