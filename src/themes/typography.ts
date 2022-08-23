import { CSSProperties } from 'react'
import { Theme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    h1: CSSProperties
    h2: CSSProperties
    text1: CSSProperties
  }

  interface TypographyVariantsOptions {
    h1?: CSSProperties
    h2?: CSSProperties
    text1?: CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1: true
    h2: true
    text1: true
  }
}

const getTypography = (breakpointsTheme: Theme) => ({
  typography: {
    h1: {
      fontFamily: 'Nunito-Bold',
      fontWeight: '700',
      fontSize: '34px',
      [breakpointsTheme.breakpoints.down('laptop')]: {
        fontSize: '24px',
      },
      [breakpointsTheme.breakpoints.down('tablet')]: {
        fontSize: '20px',
      },
      [breakpointsTheme.breakpoints.down('mobile')]: {
        fontSize: '16px',
      },
    },
    h2: {
      fontFamily: 'Nunito-SemiBold',
      fontWeight: '600',
      fontSize: '30px',
      [breakpointsTheme.breakpoints.down('laptop')]: {
        fontSize: '22px',
      },
      [breakpointsTheme.breakpoints.down('tablet')]: {
        fontSize: '18px',
      },
      [breakpointsTheme.breakpoints.down('mobile')]: {
        fontSize: '14px',
      },
    },
    text1: {
      fontFamily: 'Nunito-Regular',
      fontWeight: '400',
      fontSize: '24px',
      [breakpointsTheme.breakpoints.down('laptop')]: {
        fontSize: '18px',
      },
      [breakpointsTheme.breakpoints.down('tablet')]: {
        fontSize: '16px',
      },
      [breakpointsTheme.breakpoints.down('mobile')]: {
        fontSize: '12px',
      },
    },
  },
})

export default getTypography
