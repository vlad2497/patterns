import { useGetMoviesListQuery } from 'store/slices/movie/api'
import Header from '../children/header/ui'
import List from '../children/list/ui'
import Card from '../children/list/children/card/ui'

const MoviesListFacade = () => {
  const { isLoading, data } = useGetMoviesListQuery()

  if (isLoading) return <div>Загрузка</div>

  return (
    <div className="moviesList">
      <Header />
      <List items={data || []} ItemComponent={Card} />
    </div>
  )
}

export default MoviesListFacade
