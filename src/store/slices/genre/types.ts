export type GenreAPI = {
  id: number
  name: string
}

export type GenreModel = {
  id: GenreAPI['id']
  name: GenreAPI['name']
}
