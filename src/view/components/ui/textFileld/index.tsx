import { FC, ChangeEvent } from 'react'
import MaterialTextField, {
  StandardTextFieldProps,
} from '@mui/material/TextField'

interface Props extends StandardTextFieldProps {
  setValue: (value: string) => void
}

const TextField: FC<Props> = ({ setValue, ...props }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return <MaterialTextField onChange={handleChange} {...props} />
}

export default TextField
