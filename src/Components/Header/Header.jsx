import React from 'react';
import Styled from './styles';
import icon from '../../assets/icons/menu.svg'
import themeIconDark from '../../assets/icons/dark_theme.svg'

const Header = (props) => {

    // const [mode, setMode] = useState('calculator');

    // const changeModeHandler = (el) => {
    //     let type = el.target.getAttribute('type');
    //     setMode(() => {
    //         if (mode === 'calculator' && type === 'converter') {
    //             console.log('converter');
    //             return 'converter'
    //         } else if (mode === 'converter' && type === 'calculator') {
    //             console.log('calculator');
    //             return 'calculator'
    //         }

    //     })
    // }

    return (
        <Styled.Header>
            <Styled.MenuButton>
                <Styled.MenuButtonIcon src={ icon } />
            </Styled.MenuButton>

            <Styled.Tabs>
                <Styled.TabButton
                    $theme={props.$theme}
                    $calcMode={props.$calcMode}
                    onClick={props.setCalcModeHandler}> Calculator</Styled.TabButton>
                <Styled.TabButton
                    $theme={props.$theme}
                    $convMode={props.$convMode}
                    onClick={props.setConvModeHandler}> Converter</Styled.TabButton>
            </Styled.Tabs>

            <Styled.ThemeButton onClick={props.changeThemeHendler}>
                <Styled.ThemeButtonIcon src={themeIconDark} />
            </Styled.ThemeButton>

        </Styled.Header>
    )
}

export default Header;