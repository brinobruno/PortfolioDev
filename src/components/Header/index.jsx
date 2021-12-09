import githubIcon from '../../assets/userIcons/github.svg'
import linkedinIcon from '../../assets/userIcons/linkedin.svg'
import emailIcon from '../../assets/userIcons/email.svg'

import { Container, Content, Nav, NavIcons, NavLink } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <Nav>
          <NavLink href="#">
            About me
          </NavLink>
          <NavLink href="#">
            Skills
          </NavLink>
          <NavLink href="#">
            Projects
          </NavLink>
          <NavLink href="#">
            Contact
          </NavLink>
        </Nav>

        <NavIcons>
          <NavLink href="#">
            <img src={githubIcon} alt='Github' />
          </NavLink>
          <NavLink href="#">
            <img src={linkedinIcon} alt='Github' />
          </NavLink>
          <NavLink href="#">
            <img src={emailIcon} alt='Github' />
          </NavLink>
        </NavIcons>
      </Content>
    </Container>
  )
}