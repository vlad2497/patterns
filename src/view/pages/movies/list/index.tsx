import { useTranslation } from 'react-i18next'

import { useGetMoviesListQuery } from 'store/slices/movie/api'
import TextField from 'view/components/ui/text-fileld'

import Header from './children/header'
import MoviesList from './children/movies-list'
import Title from './children/header/children/title'
import Shimmer from './children/shimmer'
import useGenreSelect from './logic/use-genre-select'
import useMoviesFilter from './logic/use-movies-filter'
import useTextFieldSearch from './logic/use-search-text-field'
import GenreSelect from './children/genre-select'
import Reload from './children/reload'

import { Container } from './styles'

const MoviesListFacade = () => {
  const { t } = useTranslation()
  const {
    isLoading: isMoviesLoading,
    data: movies,
    isError,
  } = useGetMoviesListQuery()
  const { genreSelectValue, setGenreSelectValue } = useGenreSelect()
  const { searchValue, setSearchValue } = useTextFieldSearch()
  const { filteredMovies } = useMoviesFilter({
    movies: movies || [],
    genre: genreSelectValue,
    search: searchValue,
  })

  if (isMoviesLoading) return <Shimmer />
  if (isError) return <Reload />

  return (
    <Container>
      <Header
        leftSection={<Title>{t('movies.list.title')}</Title>}
        rightSection={
          <TextField value={searchValue} setValue={setSearchValue} />
        }
      />
      <GenreSelect value={genreSelectValue} setValue={setGenreSelectValue} />
      <MoviesList movies={filteredMovies} />
    </Container>
  )
}

export default MoviesListFacade
