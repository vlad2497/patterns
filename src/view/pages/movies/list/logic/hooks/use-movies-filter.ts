import { useEffect, useState } from 'react'
import { MovieModel } from 'store/slices/movie/models'
import { MovieFilter } from '../models/movie-filter'

type Props = {
  genre: string
  search: string
  movies: MovieModel[]
}

const useMoviesFilter = ({ genre, search, movies }: Props) => {
  const [filteredMovies, setFilteredMovies] = useState<MovieModel[]>(movies)

  useEffect(() => {
    let localFilteredMovies: MovieModel[] = []
    localFilteredMovies = new MovieFilter(movies).filterByGenre(genre)
    localFilteredMovies = new MovieFilter(localFilteredMovies).filterBySearch(
      search
    )

    setFilteredMovies(localFilteredMovies)
  }, [genre, search, movies])

  return { filteredMovies }
}

export default useMoviesFilter
