import { FC, ReactNode } from 'react'
// import logoSrc from 'assets/images/common/logo.svg'
import { Container } from './styles'

type Props = {
  leftSection: ReactNode
  rightSection: ReactNode
}

const Header: FC<Props> = ({ leftSection, rightSection }) => {
  return (
    <div data-testid="movies-page-header">
      {/* <StyledLogo src={logoSrc} alt="logo" /> */}
      <Container>
        {leftSection}
        {rightSection}
      </Container>
    </div>
  )
}

export default Header
