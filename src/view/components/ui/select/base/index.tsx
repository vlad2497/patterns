import { FC } from 'react'
import { SelectChangeEvent, SelectProps } from '@mui/material/Select'
import { StyledSelect } from './styles'

interface Props extends SelectProps {
  setValue: (value: string) => void
}

const Select: FC<Props> = ({ children, setValue, ...props }) => {
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setValue(event.target.value as string)
  }
  return (
    <StyledSelect onChange={handleChange} {...props}>
      {children}
    </StyledSelect>
  )
}

export default Select
