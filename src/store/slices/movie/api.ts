import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, DEFAULT_QUERY_PARAMS } from 'store/api'
import endpoints from 'config/api/endpoints'
import { MovieListItemAPI, MovieListItemModel, MovieCreateBody } from './types'
import { createMovieListItemModel } from './models'

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery,
  endpoints: (builder) => ({
    getMoviesList: builder.query<MovieListItemModel[], void>({
      query: () => ({
        url: endpoints.movies.popular,
        params: DEFAULT_QUERY_PARAMS,
      }),
      transformResponse: (response: { results: MovieListItemAPI[] }) => {
        return Array.isArray(response?.results)
          ? response.results.map((movie) => createMovieListItemModel(movie))
          : []
      },
    }),
    getMovieById: builder.query<MovieListItemModel, number>({
      query: (id) => ({
        url: endpoints.movies.getDetail(id),
        params: DEFAULT_QUERY_PARAMS,
      }),
      transformResponse: (response: MovieListItemAPI) => {
        return createMovieListItemModel(response)
      },
    }),
    saveMovie: builder.mutation<MovieCreateBody, MovieListItemAPI>({
      query: (body) => ({
        url: endpoints.movies.create,
        method: 'POST',
        body,
      }),
    }),
    updateMovie: builder.mutation<Partial<MovieCreateBody>, MovieListItemAPI>({
      query: ({ id, ...patch }) => ({
        url: endpoints.movies.getDetail(id),
        method: 'PATCH',
        body: patch,
      }),
    }),
  }),
})

export const { useGetMoviesListQuery, useGetMovieByIdQuery } = moviesApi
