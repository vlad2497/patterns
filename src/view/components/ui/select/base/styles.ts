import { styled } from '@mui/material/styles'
import Select from '@mui/material/Select'

export const StyledSelect = styled(Select)(() => ({
  height: '35px',
  borderRadius: '10px',
  // background: theme.colors.light.secondary.white.extraLight,
  // border: `1px solid ${theme.colors.light.secondary.white.fullDark}`,

  '&:focused': {
    // border: `1px solid ${theme.colors.light.primary.light}`,
  },

  '&:visited': {
    // border: `1px solid ${theme.colors.light.primary.light}`,
  },

  //   '& fieldset': {
  //     border: 'none',
  //   },

  //   '& .MuiSelect-select': {
  //     fontFamily: theme.fonts.probaPro.weight[500],
  //     fontSize: '16px',
  //     color: theme.colors.light.primary.dark,
  //   },
}))
