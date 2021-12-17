import React, { useEffect, useState } from 'react'

import { ReactComponent as GithubIcon } from '../../assets/userIcons/github.svg'
import { ReactComponent as LinkedinIcon } from '../../assets/userIcons/linkedin.svg'
import { ReactComponent as EmailIcon } from '../../assets/userIcons/email.svg'

import './iconStyles.css'
import { Container, Content, Nav, NavMenu, NavIcons, NavLink, ProgressContainer, ProgressBar } from './styles'

export function Header() {
  let [menuClicked, setMenuClicked] = useState(false)

  function handleMenuOpen () {
    setMenuClicked(!menuClicked)
  }

  const [scrollTop, setScrollTop] = useState(0)

  const onScroll = () => {
    const windowScrollTracker = document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

    const scrolled = (windowScrollTracker / height) * 100

    setScrollTop(scrolled)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Container>
      <ProgressContainer>
        <ProgressBar style={{ width: `${scrollTop}%` }}>
          ㅤ
        </ProgressBar>
      </ProgressContainer>
      <Content>
        <Nav>
          <i id="menu-icon-switch" onClick={handleMenuOpen} className={menuClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          <NavMenu menuClicked={menuClicked}>
            <NavLink href="#about-me">
              About me
            </NavLink>
            <NavLink href="#skills">
              Skills
            </NavLink>
            <NavLink href="#projects">
              Projects
            </NavLink>
            <NavLink href="#contact">
              Contact
            </NavLink>
          </NavMenu>
        </Nav>
          <NavIcons menuClicked={menuClicked}>
            <NavLink target="_blank" href="https://github.com/brinobruno">
            <GithubIcon className="githubIcon" />
            </NavLink>
            <NavLink target="_blank" href="https://www.linkedin.com/in/brunociao/">
              <LinkedinIcon className="linkedinIcon" />
            </NavLink>
            <NavLink target="_blank" href="mailto:brunosantos6ft@gmail.com">
             <EmailIcon className="emailIcon" />
            </NavLink>
          </NavIcons>
      </Content>
    </Container>
  )
}