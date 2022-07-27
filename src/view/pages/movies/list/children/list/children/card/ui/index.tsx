import { FC } from 'react'
import { Title } from './styles'

type Props = {
  title: string
}

const Card: FC<Props> = ({ title }) => {
  return <Title>{title}</Title>
}

export default Card
