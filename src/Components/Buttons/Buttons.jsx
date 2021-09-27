import React from 'react';
import Styled from './styles';

const Buttons = (props) => {
    return (
        <Styled.ButtonsArea>
            <Styled.Button $theme={props.$theme} deleting>AC</Styled.Button>
            <Styled.Button $theme={props.$theme} deleting>DEL</Styled.Button>
            <Styled.Button $theme={props.$theme} operations>%</Styled.Button>
            <Styled.Button $theme={props.$theme} data={'/'} operations
                //onClick={}
            >&#247;</Styled.Button>
            <Styled.Button $theme={props.$theme} data={'7'}
                onClick={props.setCurrentValue}
            >7</Styled.Button>
            <Styled.Button $theme={props.$theme} data={'8'}
                onClick={props.setCurrentValue}
            >8</Styled.Button>
            <Styled.Button $theme={props.$theme} data={'9'}
                onClick={props.setCurrentValue}
            >9</Styled.Button>
            <Styled.Button $theme={props.$theme} data={'*'} operations
                //onClick={}
            >&#xD7;</Styled.Button>
            <Styled.Button $theme={props.$theme} data={'4'}
                onClick={props.setCurrentValue}
            >4</Styled.Button>
            <Styled.Button $theme={props.$theme} data={'5'}
                onClick={props.setCurrentValue}
            >5</Styled.Button>
            <Styled.Button $theme={props.$theme} data={'6'}
                onClick={props.setCurrentValue}
            >6</Styled.Button>
            <Styled.Button $theme={props.$theme} data={'-'} operations
                //onClick={}
            >-</Styled.Button>
            <Styled.Button $theme={props.$theme} data={'1'}
                onClick={props.setCurrentValue}
            >1</Styled.Button>
            <Styled.Button $theme={props.$theme} data={'2'}
                onClick={props.setCurrentValue}
            >2</Styled.Button>
            <Styled.Button $theme={props.$theme} data={'3'}
                onClick={props.setCurrentValue}
            >3</Styled.Button>
            <Styled.Button $theme={props.$theme} data={'+'} operations
                //onClick={}
            >+</Styled.Button>
            <Styled.Button $theme={props.$theme}
                onClick={props.setCurrentValue}
            >±</Styled.Button>
            <Styled.Button $theme={props.$theme} data={'0'}
                onClick={props.setCurrentValue}
            >0</Styled.Button>
            <Styled.Button $theme={props.$theme} data={'.'}
                onClick={props.setCurrentValue}
            >.</Styled.Button>
            <Styled.Button $theme={props.$theme} operations>=</Styled.Button>
        </Styled.ButtonsArea>
    )
}

export default Buttons;