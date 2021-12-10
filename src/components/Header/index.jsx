import React, { useState } from 'react'

import { ReactComponent as GithubIcon } from '../../assets/userIcons/github.svg'
import { ReactComponent as LinkedinIcon } from '../../assets/userIcons/linkedin.svg'
import { ReactComponent as EmailIcon } from '../../assets/userIcons/email.svg'

import "./iconStyles.css";
import { Container, Content, Nav, NavMenu, NavIcons, NavLink } from './styles'

export function Header() {
  let [menuClicked, setMenuClicked] = useState(false)

  function handleMenuOpen () {
    setMenuClicked(!menuClicked)
  }

  return (
    <Container>
      <Content>
        <Nav>
            <i id="menu-icon-switch" onClick={handleMenuOpen} className={menuClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          <NavMenu menuClicked={menuClicked}>
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