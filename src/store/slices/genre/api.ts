import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, DEFAULT_QUERY_PARAMS } from 'store/api'
import { GenreAPI, GenreModel } from './types'
import { createGenreModel } from './models'

export const genresApi = createApi({
  reducerPath: 'genresApi',
  baseQuery,
  endpoints: (builder) => ({
    getGenresList: builder.query<GenreModel[], void>({
      query: () => ({
        url: `genre/movie/list`,
        params: DEFAULT_QUERY_PARAMS,
      }),
      transformResponse: (response: { genres: GenreAPI[] }) => {
        return Array.isArray(response?.genres)
          ? response.genres.map((genre) => createGenreModel(genre))
          : []
      },
    }),
  }),
})

export const { useGetGenresListQuery } = genresApi
