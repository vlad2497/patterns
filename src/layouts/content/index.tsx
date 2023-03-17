import { FC, ReactNode } from 'react'
import { Grid } from '@mui/material'

interface IProps {
  children: ReactNode
}

const Content: FC<IProps> = ({ children }) => {
  return (
    <Grid container justifyContent="center">
      <Grid container item sm={10} xs={11}>
        {children}
      </Grid>
    </Grid>
  )
}

export default Content
