import React from 'react';
import Styled from './styles';
import icon from '../../assets/icons/menu.svg'

const Header = (props) => {
    
    return(
        <Styled.Header>
            <Styled.MenuButton>
                <Styled.MenuButtonIcon src={icon}/>
            </Styled.MenuButton>
            
            <div>
                tabs
            </div>
            <button onClick={
                props.changeThemeHendler
            } >change theme</button>
        
    </Styled.Header>
    )
}

export default Header;