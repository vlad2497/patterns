import { Route } from 'react-router-dom'
import MoviesListFacade from 'view/pages/movies/list/ui'
import MovieDetailFacade from 'view/pages/movies/detail/ui'
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
