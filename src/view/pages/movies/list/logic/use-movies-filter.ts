import { useEffect, useState } from 'react'
import { MovieListItemModel } from 'store/slices/movie/types'
import { MovieFilter } from './movie-filter'

type Props = {
  genre: string
  search: string
  movies: MovieListItemModel[]
}

const useMoviesFilter = ({ genre, search, movies }: Props) => {
  const [filteredMovies, setFilteredMovies] =
    useState<MovieListItemModel[]>(movies)

  useEffect(() => {
    if (movies.length) {
      let localFilteredMovies: MovieListItemModel[] = []
      localFilteredMovies = new MovieFilter(movies).filterByGenre(genre)
      localFilteredMovies = new MovieFilter(localFilteredMovies).filterBySearch(
        search
      )
      setFilteredMovies(localFilteredMovies)
    }
  }, [genre, search, movies])

  return { filteredMovies }
}

export default useMoviesFilter
