import styled from 'styled-components'

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
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0 3.313rem;
  }
`

export const Title = styled.h2 `
  font-size: var(--heading-title);
  color: var(--primary-color);
`

export const Code = styled.span ``

export const ProjectsContainer = styled.div `
  display: flex;
  padding-top: 2.813rem;
`


export const ProjectDisplay = styled.div `
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    gap: 1.065rem;
  }

  button {
    background-color: #1A1A1A;
    border: none;
    padding: 0.438rem 1.18rem;
    font-size: var(--body-text-font);
    border-radius: 0.375rem;

    &:hover {
      transition: 0.12s ease;
      background-color: #343434;
    }
  }
  
  img {
    margin: 0 2.813rem 1.5rem 0;
    cursor: pointer;
  }
`

export const ProjectsList = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1.17rem;

  a {
    font-size: 1.875rem;
    color: #696969;

    &:hover {
        ransition: 0.1s ease;
      color: #AEAEAE;
    }
  }
`