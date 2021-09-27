import styled from 'styled-components'

const ButtonsArea = styled.div`
display:grid;
grid-template-columns: repeat(4, 1fr);

justify-content: space-around;
align-content: space-around;
justify-items: center;
align-items:center;
`

const Button = styled.button`
border-radius: 50%;
//border: 1px solid #000;
font-size: 1.5rem;
margin:5px auto;
width: 80px;
height: 80px;
font-size: 2rem;
line-height: 0;


${({ $theme }) => {
        if ($theme === 'light') {
            return `
                // background-color: var(--primary1);
                color: var(--secondary);`
        } else {
            return `
                // background-color: var(--primary1);
                color: var(--primary2);`
        }
    }};

//For buttons AC and DEL
${({ deleting, $theme }) => {
        if (deleting) {
            if ($theme === 'light') {
            return `
                color: var(--primary2);`
        } else {
            return `
                background-color: #6c807e;
                color: var(--primary2);`
        }
        }
    }}
//For operations buttons
${({ operations, $theme }) => {
        if (operations) {
            if ($theme === 'light') {
            return `
                color: var(--accent);
                font-size: 2.5rem;
                `
        } else {
            return `
                background-color: var(--primary2);
                color: var(--accent);
                font-size: 2.5rem;`
        }
        }
    }}
`


const Styled = {
    ButtonsArea, Button
}
export default Styled;