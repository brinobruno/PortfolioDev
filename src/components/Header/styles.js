import styled from 'styled-components'

import { FaBars } from 'react-icons/fa'

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

  z-index: 100;
`

export const NavIcons = styled.nav `
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  padding: 2rem 0;
  z-index: 99;
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

  img {
    fill: #6A040E;

    svg {
    fill: #6A040E;
  }
  path {
    fill: #6A040E;
  }
  }

`

export const Bars = styled(FaBars) `
  display: none;
  color: var(--body-text-color);

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
    display: block;

    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-100%, 75%) 
  }
`