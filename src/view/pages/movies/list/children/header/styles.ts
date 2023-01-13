import { styled } from '@mui/material/styles'
import { ReactComponent as LogoComponent } from 'assets/images/common/logo.svg'

export const Container = styled('div')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const StyledLogo = styled('img')({
  width: '200px',
  height: '200px',
})

export const StyledLogoWithFillColor = styled(LogoComponent)({
  width: '200px',
  height: '200px',
  fill: 'red',
})
