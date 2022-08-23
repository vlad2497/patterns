import { createTheme } from '@mui/material/styles'
import breakpointsOptions from './breakpoints'
import paletteOptions from './palette'
import getTypographyOptions from './typography'

// eslint-disable-next-line import/no-mutable-exports
let theme = createTheme(breakpointsOptions)
theme = createTheme(theme, paletteOptions)
theme = createTheme(theme, getTypographyOptions(theme))

export default theme
