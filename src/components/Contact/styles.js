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