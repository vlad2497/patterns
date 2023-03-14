import { useTranslation } from 'react-i18next'
import { Box, Grid } from '@mui/material'
import { motion } from 'framer-motion'

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
            <Box
              mb="25px"
              component={motion.div}
              animate={{ x: [0, 50, 0] }}
              initial={{ x: -50 }}
              transition={{ ease: 'easeOut', duration: 1, times: [0, 0.2, 1] }}
            >
              <Title>{t('movies.list.titleNovelty')}</Title>
            </Box>
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: -100 }}
              transition={{ ease: 'easeOut', duration: 0.7 }}
            >
              <MovieCard
                title={movies[0].getTitle()}
                img={movies[0].getBackdropPath()}
                aspectRatio="16/6"
              />
            </motion.div>
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
                    backgroundColor: '#1D7373',
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
                  title={movies[0].getTitle()}
                  img={movies[0].getBackdropPath()}
                  aspectRatio="3/2"
                />
              </Grid>
              <Grid item xs={6}>
                <MovieCard
                  title={movies[0].getTitle()}
                  img={movies[0].getBackdropPath()}
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
