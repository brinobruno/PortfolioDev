import { useEffect, useState } from 'react'

import './iconStyles.css'
import { Container, Content, Nav, NavMenu, NavIcons, NavLink, ProgressContainer, ProgressBar } from './styles'
import { sectionMenuLinks, socialIconsData } from './headerData'

export function Header() {
  const [menuClicked, setMenuClicked] = useState(false)

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
          <i id="menu-icon-switch" onClick={ handleMenuOpen } className={ menuClicked ? 'fas fa-times' : 'fas fa-bars' }></i>
          <NavMenu menuClicked={ menuClicked }>
            {
              sectionMenuLinks.map((link) => {
                return (
                  <NavLink href={ link.href } key={ link.name }>
                    { link.name }
                  </NavLink>
                )
              })
            }
          </NavMenu>
        </Nav>
          <NavIcons menuClicked={ menuClicked }>
            {
              socialIconsData.map((icon) => {
                return (
                  <NavLink
                    rel="noreferrer"
                    target='_blank'
                    href={ icon.url }
                    key={ icon.id }
                  >
                    { icon.component } 
                  </NavLink>
                )
              })
            }
          </NavIcons>
      </Content>
    </Container>
  )
}