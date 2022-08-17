import { TypesValidator } from 'models/types-validator'
import { GenreType } from './types'
import { GenreModel } from './models'

export class GenreFactory {
  // eslint-disable-next-line class-methods-use-this
  create(movieData: GenreType) {
    return new GenreModel(
      TypesValidator.isNumber(movieData?.id) ? movieData.id : 0,
      TypesValidator.isString(movieData?.name) ? movieData.name : ''
    )
  }
}
