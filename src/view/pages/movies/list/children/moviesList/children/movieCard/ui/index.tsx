import { FC } from 'react'
import { MovieModel } from 'store/slices/movie/models'
import { Title } from './styles'

type Props = {
  title: MovieModel['title']
}

const MovieCard: FC<Props> = ({ title }) => {
  return <Title>{title}</Title>
}

export default MovieCard
