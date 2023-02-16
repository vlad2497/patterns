import { styled } from '@mui/material/styles'
import { ReactComponent as LogoComponent } from 'assets/images/common/logo.svg'

export const Wrapper = styled('header')({
  backgroundColor: '#1D7373',
  padding: '15px',
  height: '60px',
})

export const StyledLogo = styled(LogoComponent)({
  width: '60px',
  height: '60px',
  fill: '#FF7373',
})
