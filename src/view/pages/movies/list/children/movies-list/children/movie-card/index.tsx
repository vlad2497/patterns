import { IMAGES_HOST } from 'config/api'
import { FC } from 'react'
import { MovieModel } from 'store/slices/movie/models'
import { Title, Wrapper } from './styles'

type Props = {
  title: MovieModel['title']
  img: MovieModel['imageSrc']
  aspectRatio: string
}

const MovieCard: FC<Props> = ({ title, img, aspectRatio }) => {
  return (
    <Wrapper
      sx={{
        backgroundImage: `linear-gradient(0deg, rgba(40, 40, 40, 0.6), rgba(0, 0, 0, 0.3)), url(${IMAGES_HOST}/t/p/original${img})`,
        aspectRatio,
      }}
    >
      <Title variant="h5" color="neutral.white">
        {title}
      </Title>
    </Wrapper>
  )
}

export default MovieCard
