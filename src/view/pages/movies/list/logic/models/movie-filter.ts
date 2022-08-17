import { MovieModel } from 'store/slices/movie/models'

export class MovieFilter {
  private list: MovieModel[]

  constructor(list: MovieModel[]) {
    this.list = list
  }

  filterByGenre(genreId: string): MovieModel[] {
    return genreId === ''
      ? this.list
      : this.list.filter((movie) => movie.getGenreIds().includes(+genreId))
  }

  filterBySearch(searchValue: string): MovieModel[] {
    return searchValue === ''
      ? this.list
      : this.list.filter((movie) => movie.getTitle().includes(searchValue))
  }
}
