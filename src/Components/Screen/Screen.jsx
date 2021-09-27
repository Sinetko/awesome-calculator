import Styled from "./styles";

const Screen = (props) => {
    return(
        <Styled.Screen>
            <Styled.Previous>{props.previous}</Styled.Previous>
            <Styled.Current>{props.current}</Styled.Current>
        </Styled.Screen>
        
    )
}

export default Screen;