import { ReactComponent as GithubIcon } from '../../assets/userIcons/github.svg'
import { ReactComponent as LinkedinIcon } from '../../assets/userIcons/linkedin.svg'
import { ReactComponent as EmailIcon } from '../../assets/userIcons/email.svg'

import "./iconStyles.css";

import { Container, Content, Nav, NavMenu, NavIcons, NavLink, Bars } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
      <Nav>
          <Bars />
            <NavMenu>
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
            </NavMenu>
          </Nav>
          <NavIcons>
              <NavLink href="#">
              <GithubIcon className="githubIcon" />
              </NavLink>
              <NavLink href="#">
                <LinkedinIcon className="linkedinIcon" />
              </NavLink>
              <NavLink href="#">
               <EmailIcon className="emailIcon" />
              </NavLink>
          </NavIcons>
      </Content>
    </Container>
  )
}