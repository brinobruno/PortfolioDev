import styled from 'styled-components'

export const Container = styled.header `
  background: #0E0E0E;
`

export const Content = styled.div `
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export const Nav = styled.nav `
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 2rem;

  padding: 2rem 0;
  z-index: 100;
`

export const NavIcons = styled.nav `
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  padding: 2rem;
  z-index: 100;
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