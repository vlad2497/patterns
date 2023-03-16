import { FC } from 'react'
import { useGetGenresListQuery } from 'store/slices/genre/api'
import BaseGenreSelect from 'view/components/ui/select/base'
import MenuItem from 'view/components/ui/menu-item/base'

type Props = {
  value: string
  setValue: (value: string) => void
}

const GenreSelect: FC<Props> = ({ value, setValue }) => {
  const { isLoading: isGenresLoading, data: genres } = useGetGenresListQuery()

  const genreMenu = genres?.map((genre) => (
    <MenuItem key={genre.name} value={genre.id}>
      {genre.name}
    </MenuItem>
  ))

  return (
    <BaseGenreSelect
      value={value}
      setValue={setValue}
      disabled={isGenresLoading}
      data-testid="movies-genre-select"
    >
      {genreMenu}
    </BaseGenreSelect>
  )
}

export default GenreSelect
