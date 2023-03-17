import { Route } from 'react-router-dom'
import MoviesListFacade from 'pages/movies/list'
import MovieDetailFacade from 'pages/movies/detail'
import { moviesDetailRoute, moviesListRoute } from 'config/routes'

export default [
  <Route
    path={moviesListRoute}
    element={<MoviesListFacade />}
    key={moviesListRoute}
  />,
  <Route
    path={moviesDetailRoute}
    element={<MovieDetailFacade />}
    key={moviesDetailRoute}
  />,
]
