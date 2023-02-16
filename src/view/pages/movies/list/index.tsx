import { useTranslation } from 'react-i18next'
import { Box, Grid } from '@mui/material'

import { useGetMoviesListQuery } from 'store/slices/movie/api'
import TextField from 'view/components/ui/text-fileld'
import Header from 'view/components/header'
import Footer from 'view/components/footer'
import Content from 'view/components/content'

import PageHeader from './children/header'
import MoviesList from './children/movies-list'
import Title from './children/header/children/title'
import Shimmer from './children/shimmer'
import useGenreSelect from './logic/use-genre-select'
import useMoviesFilter from './logic/use-movies-filter'
import useTextFieldSearch from './logic/use-search-text-field'
import GenreSelect from './children/genre-select'
import Reload from './children/reload'

import { Container } from './styles'
import MovieCard from './children/movies-list/children/movie-card'

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
      <Header />
      <Content>
        {movies && (
          <Box mt="35px" mb="25px" width="100%">
            <Box mb="25px">
              <Title>{t('movies.list.titleNovelty')}</Title>
            </Box>
            <MovieCard
              title={movies[8].getTitle()}
              img={movies[8].getBackdropPath()}
              aspectRatio="16/6"
            />
          </Box>
        )}
        <Box mt="25px" mb="25px" width="100%">
          <PageHeader
            leftSection={<Title>{t('movies.list.titlePopular')}</Title>}
            rightSection={
              <div>
                <TextField
                  value={searchValue}
                  setValue={setSearchValue}
                  sx={{
                    mr: '15px',
                    backgroundColor: '#FF7373',
                    borderRadius: '10px',
                  }}
                />
                <GenreSelect
                  value={genreSelectValue}
                  setValue={setGenreSelectValue}
                />
              </div>
            }
          />
        </Box>
        <MoviesList movies={filteredMovies} />
        {movies && (
          <Box mt="25px" mb="25px" width="100%">
            <Box mb="25px">
              <Title>{t('movies.list.titleRandom')}</Title>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <MovieCard
                  title={movies[4].getTitle()}
                  img={movies[4].getBackdropPath()}
                  aspectRatio="3/2"
                />
              </Grid>
              <Grid item xs={6}>
                <MovieCard
                  title={movies[3].getTitle()}
                  img={movies[3].getBackdropPath()}
                  aspectRatio="3/2"
                />
              </Grid>
            </Grid>
          </Box>
        )}
      </Content>
      <Footer />
    </Container>
  )
}

export default MoviesListFacade
