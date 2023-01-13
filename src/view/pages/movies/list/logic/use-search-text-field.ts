import { useState } from 'react'

const useTextFieldSearch = () => {
  const [searchValue, setSearchValue] = useState('')
  return { searchValue, setSearchValue }
}

export default useTextFieldSearch
