import { Container, Content, Text, FooterText, FooterDivider, Code } from './styles'

export function Footer() {
  return (
    <Container>
      <Content>
          <Text>
            <FooterText>São José dos Campos, São Paulo - Brazil</FooterText>
            <FooterText>brunosantos6ft@gmail.com</FooterText>
            <FooterText><a rel="noreferrer" target='_blank' href="https://natelha.blog">Visit my new personal blog &#123;here&#125;</a></FooterText>
            <FooterText><a rel="noreferrer" target='_blank' href="https://meuport.com">Visit my older portfolio &#123;here&#125;</a></FooterText>
          <FooterDivider>
            <p className='last-text'>Made with React, Styled-Components, a few libs and much study by 2022 ©Bruno Corrêa.</p>
            <Code>&#60;3html&#62;</Code>
          </FooterDivider>
          </Text>
      </Content>
    </Container>
  )
}