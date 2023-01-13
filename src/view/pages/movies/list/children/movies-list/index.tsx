import { MovieModel } from 'store/slices/movie/models'
import MovieCard from './children/movie-card'
import { ElementWithBackgroundImage } from './styles'

type Props = {
  movies: MovieModel[]
}

const MoviesList = ({ movies }: Props) => {
  return (
    <div data-testid="popular-movies-list">
      <ElementWithBackgroundImage />
      {movies.map((movie) => (
        <MovieCard key={movie.getId()} title={movie.getTitle()} />
      ))}
    </div>
  )
}

export default MoviesList
