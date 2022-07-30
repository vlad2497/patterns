import { FC } from 'react'
import { MenuItemProps } from '@mui/material'
import { StyledMenuItem } from './styles'

const MenuItem: FC<MenuItemProps> = ({ children, ...props }) => {
  return <StyledMenuItem {...props}>{children}</StyledMenuItem>
}

export default MenuItem
