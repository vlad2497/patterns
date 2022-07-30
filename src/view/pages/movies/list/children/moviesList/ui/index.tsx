import { MovieModel } from 'store/slices/movie/models'
import MovieCard from '../children/movieCard/ui'

type Props = {
  movies: MovieModel[]
}

const MoviesList = ({ movies }: Props) => {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.getId()} title={movie.getTitle()} />
      ))}
    </div>
  )
}

export default MoviesList
