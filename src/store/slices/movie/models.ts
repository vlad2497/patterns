export class MovieModel {
  private id: number

  private title: string

  private genreIds: number[]

  constructor(id: number, title: string, genreIds: number[]) {
    this.id = id
    this.title = title
    this.genreIds = genreIds
  }

  getId(): number {
    return this.id
  }

  getTitle(): string {
    return this.title
  }

  getGenreIds(): number[] {
    return this.genreIds
  }
}
