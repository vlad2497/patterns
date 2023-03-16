import { useEffect, useState } from 'react'
import { MovieListItemModel } from 'store/slices/movie/types'

const filterByGenre = (
  movies: MovieListItemModel[],
  genreId: string
): MovieListItemModel[] => {
  return genreId === ''
    ? movies
    : movies.filter((movie) => movie.genreIds.includes(+genreId))
}

const filterBySearch = (
  movies: MovieListItemModel[],
  searchValue: string
): MovieListItemModel[] => {
  return searchValue === ''
    ? movies
    : movies.filter((movie) => movie.title.includes(searchValue))
}

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
      const localFilteredMovies = filterByGenre(
        filterBySearch(movies, search),
        genre
      )
      setFilteredMovies(localFilteredMovies)
    }
  }, [genre, search, movies])

  return { filteredMovies }
}

export default useMoviesFilter
