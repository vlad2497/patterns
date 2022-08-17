import { TypesValidator } from 'models/types-validator'
import { MovieType } from './types'
import { MovieModel } from './models'

export class MovieFactory {
  // eslint-disable-next-line class-methods-use-this
  create(movieData: MovieType) {
    return new MovieModel(
      TypesValidator.isNumber(movieData?.id) ? movieData.id : 0,
      TypesValidator.isString(movieData?.title) ? movieData.title : '',
      TypesValidator.isArray(movieData?.genre_ids) ? movieData.genre_ids : []
    )
  }
}
