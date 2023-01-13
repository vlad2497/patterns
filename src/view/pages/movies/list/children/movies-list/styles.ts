import { styled } from '@mui/material/styles'
import backgroundStripSrc from 'assets/images/pages/movies/list/strip.svg'

export const ElementWithBackgroundImage = styled('div')(() => ({
  width: '50%',
  height: '120px',
  backgroundImage: `url(${backgroundStripSrc})`,
}))
