import { Typography } from '@mui/material'

import { useGetMoviesListQuery } from 'store/slices/movie/api'
import TextField from 'view/components/ui/text-fileld'

import Header from '../children/header/ui'
import MoviesList from '../children/movies-list/ui'
import Title from '../children/header/children/title/ui'
import Shimmer from '../children/shimmer/ui'
import useGenreSelect from '../logic/hooks/use-genre-select'
import GenreSelect from '../children/genre-select/ui'
import useMoviesFilter from '../logic/hooks/use-movies-filter'
import useTextFieldSearch from '../logic/hooks/use-search-text-field'

import { Container } from './styles'

const MoviesListFacade = () => {
  const { isLoading: isMoviesLoading, data: movies } = useGetMoviesListQuery()
  const { genreSelectValue, setGenreSelectValue } = useGenreSelect()
  const { searchValue, setSearchValue } = useTextFieldSearch()
  const { filteredMovies } = useMoviesFilter({
    movies: movies || [],
    genre: genreSelectValue,
    search: searchValue,
  })

  if (isMoviesLoading) return <Shimmer />

  return (
    <Container>
      <Header
        leftSection={<Title>Фильмы</Title>}
        rightSection={
          <TextField value={searchValue} setValue={setSearchValue} />
        }
      />
      <GenreSelect value={genreSelectValue} setValue={setGenreSelectValue} />
      <MoviesList movies={filteredMovies} />
      <Typography variant="h1" color="neutral.green">
        h1
      </Typography>
      <Typography variant="text1" color="neutral.dark">
        text1
      </Typography>
    </Container>
  )
}

export default MoviesListFacade
