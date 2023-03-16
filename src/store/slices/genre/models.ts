import { typesValidator } from 'models/types-validator'
import { GenreAPI, GenreModel } from './types'

export function createGenreModel(movieData: GenreAPI): GenreModel {
  return {
    id: typesValidator.isNumber(movieData?.id) ? movieData.id : 0,
    name: typesValidator.isString(movieData?.name) ? movieData.name : '',
  }
}
