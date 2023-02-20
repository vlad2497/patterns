import { FC } from 'react'
import { IMAGES_HOST, MOCKER } from 'config/api'
import { MovieModel } from 'store/slices/movie/models'
import PortretImgMock from 'assets/images/mocks/portret.jpg'
import { Title, Wrapper } from './styles'

type Props = {
  title: MovieModel['title']
  img: MovieModel['imageSrc']
  aspectRatio: string
}

const MovieCard: FC<Props> = ({ title, img, aspectRatio }) => {
  const backgroundImage = MOCKER
    ? `url(${PortretImgMock})`
    : `url(${IMAGES_HOST}/t/p/original${img})`
  return (
    <Wrapper
      sx={{
        backgroundImage: `linear-gradient(0deg, rgba(40, 40, 40, 0.6), rgba(0, 0, 0, 0.3)), ${backgroundImage}`,
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
