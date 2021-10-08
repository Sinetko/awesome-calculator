import styled from 'styled-components';

//Screen`s styles
const Screen = styled.div`
flex-grow:1;
display:flex;
flex-direction:column;
/* border: 1px solid #000; */
text-align: right;

`

const Previous = styled.div`
flex-grow: 1;
/* border: 1px solid #000; */
padding: 10px;
display: flex;
align-items: flex-end;
justify-content:flex-end;
font-size: 1.5rem;
font-weight: 500;
word-break: break-all;
${({$theme})=> `color: var(--secondary);`}

`

const Current = styled.div`
/* border: 1px solid #000; */
word-break: break-all;
padding: 10px;
font-size: 4rem;
font-weight:500;
height: 50%;
width: 100%;
${({$theme})=> `color: var(--primary2);`}
`


const Styled = {
    Screen, Previous, Current
}

export default Styled;