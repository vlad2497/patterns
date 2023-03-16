export type MovieListItemAPI = {
  id: number
  title: string
  genre_ids: number[]
  poster_path: string
  backdrop_path: string
}

export type MovieListItemModel = {
  id: MovieListItemAPI['id']
  title: MovieListItemAPI['title']
  genreIds: MovieListItemAPI['genre_ids']
  imageSrc: MovieListItemAPI['poster_path']
  backdropPath: MovieListItemAPI['backdrop_path']
}

export type MovieCreateBody = {
  id: number
  title: string
}
