import styled from 'styled-components'
import './styles.css'

export const Container = styled.section`
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

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  align-items: center;

  #bruno-img {
    width: 24.5rem;
  }

  @media screen and (max-width: 968px) {
    #bruno-img {
      width: 19rem;
      height: fit-content;
    }

    @media screen and (max-width: 590px) {
      #bruno-img {
        width: 22rem;
        height: fit-content;
      }

      @media screen and (max-width: 437px) {
        #bruno-img {
          width: 19rem;
          height: fit-content;
        }
      }
    }

    @media screen and (max-width: 768px) {
      justify-content: space-around;
    }

    @media screen and (max-width: 590px) {
      flex-direction: column-reverse;
    }
  }
`

export const Text = styled.div``

export const Title = styled.h1`
  font-size: var(--opening-font);
  color: var(--body-text-color);
  line-height: 5rem;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 437px) {
    font-size: 3.7rem;
  }
`

export const Subtitle = styled.h2`
  font-size: var(--opening-subtitle);
  color: var(--primary-color);
  font-weight: 400;

  margin-bottom: 1.188rem;

  @media screen and (max-width: 768px) {
    font-size: 1.43rem;
  }
`

export const DownloadHome = styled.button`
  font-size: 1.315rem;
  font-weight: 700;
  width: 11.5rem;
  height: 2.875rem;
  border-radius: 6px;
`

export const ModalContainer = styled.div`
  h3 {
    color: var(--body-text-color-alt);
    font-size: var(--opening-subtitle);
    text-align: center;
    padding-top: 0.85rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  button {
    color: var(--body-text-color);
    background-color: #121212;
    font-size: 1.375rem;
    font-weight: 700;

    border: none;
    border-radius: 0.563rem;
    padding: 0.5rem;
    width: 100%;
  }

  button:first-child {
    margin: 0.815rem 0 1.25rem 0;
  }

  button:hover {
    color: var(--primary-color);
    transition: 0.3s ease;
  }

  img {
    padding-left: 0.25rem;
  }
`
