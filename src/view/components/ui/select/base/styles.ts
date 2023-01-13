import { styled } from '@mui/material/styles'
import Select from '@mui/material/Select'

export const StyledSelect = styled(Select)(() => ({
  height: '35px',
  borderRadius: '10px',
  '&:focused': {},

  '&:visited': {},
}))
