import styled from 'styled-components'

export const Cards = styled.ul`
display: flex;
flex-direction: column;


@media screen and (min-width: 1440px) {
    flex-direction: row;


  }
`

export const CardItem = styled.li`
display: block;
`