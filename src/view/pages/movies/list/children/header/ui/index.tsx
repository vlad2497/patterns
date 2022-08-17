import { FC, ReactNode } from 'react'
import logoSrc from 'assets/images/common/logo.svg'
import { Container, StyledLogo, StyledLogoWithFillColor } from './styles'

type Props = {
  leftSection: ReactNode
  rightSection: ReactNode
}

const Header: FC<Props> = ({ leftSection, rightSection }) => {
  return (
    <>
      <StyledLogo src={logoSrc} alt="logo" />
      <StyledLogoWithFillColor />
      <Container>
        {leftSection}
        {rightSection}
      </Container>
    </>
  )
}

export default Header
