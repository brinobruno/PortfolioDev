import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 968px) {
    max-width: 730px;
    height: 110vh;
  }

  @media screen and (max-width: 468px) {
    height: 132vh;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0 3.313rem;
  }

  @media screen and (max-width: 415px) {
    padding: 0 2.6rem;
  }
`

export const Title = styled.h2`
  font-size: var(--heading-title);
  color: var(--primary-color);
  text-align: center;
`

export const Code = styled.span`
  text-align: center;
`

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1.25rem;
  grid-row-gap: 1.25rem;

  padding: 1.688rem 0;

  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`

export const SkillsItem = styled.div`
  display: flex;
  align-items: center;

  width: 27.625rem;
  height: 5.875rem;

  background-color: #1a1a1a;
  padding: 1.5rem;
  cursor: pointer;

  @media screen and (max-width: 968px) {
    width: 35rem;
  }

  @media screen and (max-width: 560px) {
    width: 100%;
  }

  &:hover {
    transition: 0.3s ease;
    background-color: #343434;

    .typeTag {
      transition: 0.3s ease;
      background-color: #202020;
    }
  }

  img {
    padding-right: 0.875rem;
    width: 3.625rem;
    height: 2.75rem;
  }

  @media screen and (max-width: 415px) {
    img {
      width: 3.2rem;
      height: 2.4rem;
    }
  }

  .tag-divider {
    display: flex;
    gap: 0.313rem;

    p {
      font-size: 0.813rem;
      color: var(--primary-color);
      background-color: #595959;
      border-radius: 0.625rem;
      padding: 0 0.43rem;
    }
  }

  .description-wrapper {
    display: flex;
    align-items: center;
    gap: 0.875rem;

    h4 {
      font-size: 1.5rem;
      font-weight: 400;
    }

    p {
      padding-top: 0.6rem;
      color: #979797;
    }

    @media screen and (max-width: 450px) {
      h4 {
        font-size: 1rem;
      }

      p {
        font-size: 0.7rem;
      }
    }
  }
`
