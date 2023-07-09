import styled from 'styled-components'



export const CardButton = styled.button`
width: 146px;
height: 48px;
border-radius:25px;
border: none;
background-color: var(--bgColor);
cursor: pointer;

&.sedans{
 color: var(--brightOrange);
}

&.suvs{
color: var(--darkCyan);
}

&.luxury{
color: var(--veryDarkCyan);
}

&:hover,
&:focus{
    border: 2px solid white;
    background-color: transparent;
    color: white;
}
`