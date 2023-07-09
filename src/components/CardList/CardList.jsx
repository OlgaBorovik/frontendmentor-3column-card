import {info }from '../../db'
import Card from '../Card/Card'
import { Cards, CardItem } from './CardList.styled'

const CardList = () => {
  return (
      <Cards className='container'>
          {
              info.map(({id, title, desc, icon, colorTheme}) => (
                  <CardItem key={id}>
                      <Card title={title} desc={desc} icon={icon} colorTheme={colorTheme}  />
                  </CardItem>
              ))
          }
    </Cards>
  )
}

export default CardList