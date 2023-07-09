import React from 'react'
import { CardButton } from './Button.styled'

const Button = ({title}) => {
  return (
      <CardButton className={title}>Learn More</CardButton>
  )
}


export default Button