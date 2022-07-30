import { FC, ReactNode } from 'react'
import { Container } from './styles'

type Props = {
  leftSection: ReactNode
  rightSection: ReactNode
}

const Header: FC<Props> = ({ leftSection, rightSection }) => {
  return (
    <Container>
      {leftSection}
      {rightSection}
    </Container>
  )
}

export default Header
