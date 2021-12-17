import styled from 'styled-components'

export const Container = styled.header `
  background: #0E0E0E;
  overflow: hidden;
  width: 100%;
  position: fixed;
  z-index: 100;
`

export const Content = styled.div `
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 968px) {
    max-width: 730px;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 0;
    justify-content: center;
    flex-direction: column;
  }
`

export const Nav = styled.nav `
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    overflow: none;
    flex-direction: column;
  }
`

export const NavMenu = styled.div `
  display: flex;
  align-items: center;
  justify-content: column;

  gap: 2.813rem;

  @media screen and (max-width: 768px) {
    overflow: none;
    flex-direction: column;
    padding-top: 2rem;

    display: ${({menuClicked}) => (menuClicked ? 'flex' : 'none')};

    transition: height 0.5s;
  }
`

export const NavIcons = styled.nav `
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  padding: 2rem 0;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    padding-top: 2.25rem;

    display: ${({menuClicked}) => (menuClicked ? 'flex' : 'none')};
  }
`

export const NavLink = styled.a `
  align-items: center;

  font-weight: 700;
  font-size: var(--body-text-font);

  &:hover {
    color: var(--primary-color);
    transition: 0.4s;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.65rem;
  }
`

export const ProgressContainer = styled.div ` 
    height: 0.2rem;
    width: 100%;
    background-color: #0E0E0E;

    position: sticky;
    z-index: 101;
`

export const ProgressBar = styled.div ` 
  background-color: var(--primary-color);
  font-size: 0.3rem;
`