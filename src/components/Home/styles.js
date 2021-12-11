import styled from 'styled-components'
import './styles.css'

export const Container = styled.section `
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 6.18rem; //99px
  height: 100vh;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 968px) {
    max-width: 730px;
  }
`

export const Content = styled.div `
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 968px) {
    #bruno-img {
      width: 19rem;
    }

    @media screen and (max-width: 590px) {
    #bruno-img {
      width: 22rem;
    }
  }

  @media screen and (max-width: 768px) {
    justify-content: space-around;
  }

  @media screen and (max-width: 590px) {
    flex-direction: column-reverse;
  }
`

export const Text = styled.div ``

export const Title = styled.h1 `
  font-size: var(--opening-font);
  color: var(--body-text-color);
  line-height: 5rem;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
`

export const Subtitle = styled.h4 `
  font-size: var(--opening-subtitle);
  color: var(--primary-color);
  font-weight: 400;

  margin-bottom: 1.188rem;

  @media screen and (max-width: 768px) {
    font-size: 1.43rem;
  }
`

export const DownloadHome = styled.button `
  font-size: 1.315rem;
  font-weight: 700;
  width: 11.5rem;
  height: 2.875rem;
  border-radius: 6px;
`