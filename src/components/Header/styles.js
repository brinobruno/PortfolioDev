import styled from 'styled-components'

export const Container = styled.header `
  background: #0E0E0E;
  position: fixed;
  width: 100%;
`

export const Content = styled.div `
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 2rem 0;
    justify-content: center;  // UNDO HERE TO FLEX-END(ICON SIDE)
  }
`

export const Nav = styled.nav `
  display: flex;
  align-items: center;
`

export const NavMenu = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 2.813rem;

  @media screen and (max-width: 768px) {
    overflow: none;
    flex-direction: column;

    height: ${({menuClicked}) => (menuClicked ? '300px' : '0')};
    display: ${({menuClicked}) => (menuClicked ? 'flex' : 'none')};

    transition: 5s;
  }
`

export const NavIcons = styled.nav `
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  padding: 2rem 0;
  z-index: 99;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavLink = styled.a `
  display: flex;
  align-items: center;

  font-weight: 700;
  font-size: var(--body-text-font);

  &:hover {
    color: var(--primary-color);
    transition: 0.4s;
  }
`