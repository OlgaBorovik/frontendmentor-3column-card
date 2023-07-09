import Button from "../Button/Button"
import { CardBox, CardIcon, CardTitle, CardText } from "./Card.styled"

const Card = ({title, desc, icon, colorTheme}) => {
  return (
      <CardBox style={{backgroundColor : colorTheme}}>
          <CardIcon src={icon} alt="car" />
          <CardTitle>{title}</CardTitle>
          <CardText>{desc}</CardText>
          <Button colorTheme={colorTheme} title={title}/>
    </CardBox>
  )
}

export default Card