import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, DEFAULT_QUERY_PARAMS } from 'store/api'
import { MovieType } from './types'
import { MovieModel } from './models'
import { MovieFactory } from './factories'

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery,
  endpoints: (builder) => ({
    getMoviesList: builder.query<MovieModel[], void>({
      query: () => ({
        url: `movie/popular`,
        params: DEFAULT_QUERY_PARAMS,
      }),
      transformResponse: (response: { results: MovieType[] }) => {
        const movieFactory = new MovieFactory()
        return Array.isArray(response?.results)
          ? response.results.map((movie) => movieFactory.create(movie))
          : []
      },
    }),
    getMovieById: builder.query<MovieModel, number>({
      query: (id) => ({
        url: `movie/${id}`,
        params: DEFAULT_QUERY_PARAMS,
      }),
    }),
  }),
})

export const { useGetMoviesListQuery, useGetMovieByIdQuery } = moviesApi
