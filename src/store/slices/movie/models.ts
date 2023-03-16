import { typesValidator } from 'models/types-validator'
import { MovieListItemAPI, MovieListItemModel } from './types'

export function createMovieListItemModel(
  movieData: MovieListItemAPI
): MovieListItemModel {
  return {
    id: typesValidator.isNumber(movieData?.id) ? movieData.id : 0,
    title: typesValidator.isString(movieData?.title) ? movieData.title : '',
    genreIds:
      typesValidator.isArray(movieData?.genre_ids) &&
      movieData.genre_ids.every((genreId) => typesValidator.isNumber(genreId))
        ? movieData.genre_ids
        : [],
    imageSrc: typesValidator.isString(movieData?.poster_path)
      ? movieData.poster_path
      : '',
    backdropPath: typesValidator.isString(movieData?.backdrop_path)
      ? movieData.backdrop_path
      : '',
  }
}
