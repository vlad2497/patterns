import { styled } from '@mui/material/styles'
import Select from '@mui/material/Select'

export const StyledSelect = styled(Select)(() => ({
  width: '120px',
  height: '56px',
  backgroundColor: '#FF7373',
  borderRadius: '10px',
  '&:focused': {},

  '&:visited': {},
}))
