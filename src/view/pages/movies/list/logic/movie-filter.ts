import { MovieListItemModel } from 'store/slices/movie/types'

export class MovieFilter {
  private list: MovieListItemModel[]

  constructor(list: MovieListItemModel[]) {
    this.list = [...list]
  }

  filterByGenre(genreId: string): MovieListItemModel[] {
    return genreId === ''
      ? this.list
      : this.list.filter((movie) => movie.genreIds.includes(+genreId))
  }

  filterBySearch(searchValue: string): MovieListItemModel[] {
    return searchValue === ''
      ? this.list
      : this.list.filter((movie) => movie.title.includes(searchValue))
  }
}
