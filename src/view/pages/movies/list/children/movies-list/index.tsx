import Grid from '@mui/material/Grid'
import { MovieListItemModel } from 'store/slices/movie/types'
import MovieCard from './children/movie-card'

type Props = {
  movies: MovieListItemModel[]
}

const MoviesList = ({ movies }: Props) => {
  return (
    <div data-testid="popular-movies-list">
      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid item xs={3} key={movie.id}>
            <MovieCard
              title={movie.title}
              img={movie.backdropPath}
              aspectRatio="2/3"
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default MoviesList
