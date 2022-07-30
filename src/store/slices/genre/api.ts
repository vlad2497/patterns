import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, DEFAULT_QUERY_PARAMS } from 'store/api'
import { GenreType } from './types'
import { GenreModel } from './models'
import { GenreFactory } from './factories'

export const genresApi = createApi({
  reducerPath: 'genresApi',
  baseQuery,
  endpoints: (builder) => ({
    getGenresList: builder.query<GenreModel[], void>({
      query: () => ({
        url: `genre/movie/list`,
        params: DEFAULT_QUERY_PARAMS,
      }),
      transformResponse: (response: { genres: GenreType[] }) => {
        const genreFactory = new GenreFactory()
        return Array.isArray(response?.genres)
          ? response.genres.map((genre) => genreFactory.create(genre))
          : []
      },
    }),
  }),
})

export const { useGetGenresListQuery } = genresApi
