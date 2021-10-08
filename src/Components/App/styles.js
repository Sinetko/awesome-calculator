import styled, { createGlobalStyle, css } from 'styled-components'
import { theme } from '../../theme'

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    border: 0;
}
*,*:before,*:after{
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
:focus, :active {outline: none;}
a:focus, a:active {outline: none;}

nav, footer, header, aside {display: block;}

html, body {
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: 1;
    font-size: 14px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}
input,button,textarea {font-family: inherit;}

input::-ms-clear{display: none;}
button{cursor: pointer;}
button::-moz-focus-inner{padding: 0; border: 0;}
a, a:visited{text-decoration: none;}
a:hover {text-decoration: none;}
ul li {list-style: none;}
img{vertical-align: top;}

h1,h2,h3,h4,h5,h6 {font-size: inherit; font-weight: 400;}
button{
    appearance: none;
    background-color: transparent;
    border: none;
    -webkit-tap-highlight-color: transparent;
}
#root{
    display:flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
`


const App = styled.div(({ $theme }) => {
    return css`
    --primary1: ${theme[$theme].primary1};
    --primary2: ${theme[$theme].primary2};
    --secondary: ${theme[$theme].secondary};
    --accent: ${theme[$theme].accent};
    width: 375px;
    height: 812px;
    background-color: var(--primary1);
    transition: 0.2s;
    padding: 10px;
    display:flex;
    flex-direction:column;
    border-radius: 25px;
    `
})
const Styled = {
    GlobalStyles, App
}
export default Styled;