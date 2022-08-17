import { Route } from 'react-router-dom'
import MoviesListFacade from 'view/pages/movies/list/ui'
import MovieDetailFacade from 'view/pages/movies/detail/ui'

export default [
  <Route path="/" element={<MoviesListFacade />} />,
  <Route path="/detail" element={<MovieDetailFacade />} />,
]
