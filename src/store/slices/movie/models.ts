export class MovieModel {
  private id: number

  private title: string

  private genreIds: number[]

  private imageSrc: string

  private backdropPath: string

  constructor(
    id: number,
    title: string,
    genreIds: number[],
    imageSrc: string,
    backdropPath: string
  ) {
    this.id = id
    this.title = title
    this.genreIds = genreIds
    this.imageSrc = imageSrc
    this.backdropPath = backdropPath
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

  getImageSrc(): string {
    return this.imageSrc
  }

  getBackdropPath(): string {
    return this.backdropPath
  }
}
