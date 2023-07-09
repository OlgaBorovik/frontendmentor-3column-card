import styled from 'styled-components'



export const CardBox = styled.div`
padding: 48px;

@media screen and (min-width: 1440px) {
    width: 307px;
    height: 500px;
}



`
export const CardIcon = styled.img`
margin-bottom: 35px;
`
export const CardTitle = styled.h2`
color: var(--bgColor);
font-size: 40px;
font-family: Big Shoulders Display;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: uppercase;
margin-bottom: 25px;

`


export const CardText = styled.p`
color: var(--textColor);
margin-bottom: 25px;
@media screen and (min-width: 1440px) {
   margin-bottom: 83px;
}
`