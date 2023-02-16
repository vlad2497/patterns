import Grid from '@mui/material/Grid'
import { MovieModel } from 'store/slices/movie/models'
import MovieCard from './children/movie-card'

type Props = {
  movies: MovieModel[]
}

const MoviesList = ({ movies }: Props) => {
  return (
    <div data-testid="popular-movies-list">
      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid item xs={3} key={movie.getId()}>
            <MovieCard
              title={movie.getTitle()}
              img={movie.getImageSrc()}
              aspectRatio="2/3"
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default MoviesList
