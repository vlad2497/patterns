import { useGetMoviesListQuery } from 'store/slices/movie/api'
import TextField from 'view/components/ui/textFileld'

import Header from '../children/header/ui'
import MoviesList from '../children/moviesList/ui'
import Title from '../children/header/children/title/ui'
import Shimmer from '../children/shimmer/ui'
import useGenreSelect from '../logic/hooks/useGenreSelect'
import GenreSelect from '../children/genreSelect/ui'
import useMoviesFilter from '../logic/hooks/useMoviesFilter'
import useTextFieldSearch from '../logic/hooks/useSearchTextField'

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
    </Container>
  )
}

export default MoviesListFacade
