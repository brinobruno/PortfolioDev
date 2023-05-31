import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  align-items: center;

  height: 14.938rem;
  width: 100%;

  background-color: var(--primary-color);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0 3.313rem;
  }
`

export const Text = styled.div`
  .last-text {
    color: var(--body-text-color-alt);
    text-align: center;
    padding-top: 1.538rem;
    font-size: var(--body-text-font);

    @media screen and (max-width: 468px) {
      font-size: 0.95rem;
    }
  }
`

export const FooterText = styled.p`
  color: var(--body-text-color-alt);
  font-size: var(--body-text-font);

  @media screen and (max-width: 468px) {
    font-size: 0.95rem;
  }
`

export const FooterDivider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Code = styled.span`
  color: #7c7c7c;
`
