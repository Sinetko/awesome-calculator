import styled from "styled-components";

// const buttonLightTheme = `background-color: var(--primary1); color: var(--secondary);`;
// const buttonDarkTheme = `background-color: var(--primary2); color: var(--secondary);`
// const ActiveButtonLightTheme = `background-color: var(--accent); color: var(--primary1);`;
// const ActiveButtonDarkTheme = `background-color: var(--primary1); color: var(--accent);`;


//Header styles
const Header = styled.header`
display:flex;
flex-direction:row;
justify-content: space-between;
`
//Menu button styles
const MenuButton = styled.button`
width: 20px;
flex-grow:1;
`
const MenuButtonIcon = styled.img`
width: 20px;
`
//Tabs styles
const Tabs = styled.div`
border-radius: 25px;
flex-shrink: 0;
flex-grow:4;
`

const TabButton = styled.button`
font-size: 1.2rem;
width: 50%;
border-radius: 25px;
padding: 5px 10px 8px;
align-items: center ;
justify-items: end;
${({ $calcMode, $convMode, $theme }) => {
        if ($theme === 'light') {
            if ($calcMode || $convMode) {
                return `background-color: var(--accent);
                color: var(--primary1);`
            } else {
                return `background-color: var(--primary1);
                color: var(--secondary);`
            }
        }
        if ($theme === 'dark') {
            if ($calcMode || $convMode) {
                return `background-color: var(--primary2);
                color: var(--accent);`
            } else {
                return `background-color: var(--primary1);
                color: var(--secondary);`
            }
        } 

    }};


`

//ThemeButton styles
const ThemeButton = styled.button`
width: 20px;
flex-grow:1;`
const ThemeButtonIcon = styled.img`
width: 20px;`

const Styled = {
    Header, MenuButton, MenuButtonIcon, ThemeButton, ThemeButtonIcon, Tabs, TabButton
}

export default Styled;