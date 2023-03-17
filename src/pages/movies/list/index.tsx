import { useTranslation } from 'react-i18next'
import { Box, Grid } from '@mui/material'
import { motion } from 'framer-motion'

import { useGetMoviesListQuery } from 'store/slices/movie/api'
import TextField from 'components/ui/text-fileld'
import Header from 'layouts/header'
import Footer from 'layouts/footer'
import Content from 'layouts/content'

import PageHeader from './components/header'
import MoviesList from './components/movies-list'
import Title from './components/header/title'
import Shimmer from './components/shimmer'
import useGenreSelect from './hooks/use-genre-select'
import useMoviesFilter from './hooks/use-movies-filter'
import useTextFieldSearch from './hooks/use-search-text-field'
import GenreSelect from './components/genre-select'
import Reload from './components/reload'

import { Container } from './styles'
import MovieCard from './components/movies-list/movie-card'

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
                title={movies[0].title}
                img={movies[0].backdropPath}
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
                  title={movies[0].title}
                  img={movies[0].backdropPath}
                  aspectRatio="3/2"
                />
              </Grid>
              <Grid item xs={6}>
                <MovieCard
                  title={movies[0].title}
                  img={movies[0].backdropPath}
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
