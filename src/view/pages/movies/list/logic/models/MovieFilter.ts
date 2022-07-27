import { MovieModel } from 'store/slices/movie/models'

export class MovieFilter {
  private list: MovieModel[]

  constructor(list: MovieModel[]) {
    this.list = list
  }

  bySearch(searchWord: string): MovieModel[] {
    return this.list.filter((movie) => movie.getTitle() === searchWord)
  }
}
