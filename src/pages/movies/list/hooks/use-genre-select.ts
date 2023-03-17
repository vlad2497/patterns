import { useState } from 'react'

const useGenreSelect = () => {
  const [genreSelectValue, setGenreSelectValue] = useState('')

  return { genreSelectValue, setGenreSelectValue }
}

export default useGenreSelect
