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

  @media screen and (max-width: 768px) {
    height: 110vh;
  }

  @media screen and (max-width: 568px) {
    height: 127vh;
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

  @media screen and (max-width: 438px) {
    padding: 0 1.4rem;
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

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 2.213rem;
    gap: 2rem;
  }
`

export const ProjectDisplay = styled.div `
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    gap: 1.065rem;

    @media screen and (max-width: 768px) {
      justify-content: center;
    }
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

    @media screen and (max-width: 768px) {
      width: 13.5rem;
    }

    @media screen and (max-width: 438px) {
      width: 10.5rem;
      font-size: 1rem;
    }
  }
  
  img {
    margin: 0 2.213rem 1.5rem 0;
    cursor: pointer;

    @media screen and (max-width: 968px) {
      width: 28rem;
    }

    @media screen and (max-width: 768px) {
      margin: 0 0 1.5rem 0;
    }

    @media screen and (max-width: 438px) {
      width: 22rem;
    }
  }
`

export const ProjectsList = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1.17rem;

  a {
    font-size: 1.775rem;
    color: #696969;

    &:hover:not(.selected-item) {
      transition: 0.1s ease;
      color: #AEAEAE;
    }

    @media screen and (max-width: 968px) {
      font-size: 1.4rem;
    }
  }

  .selected-item {
    color: var(--primary-color);
    font-weight: bold;
  }
`