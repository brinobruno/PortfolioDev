import { Container, Content, Text, FooterText, FooterDivider, Code } from './styles'

export function Footer() {
  return (
    <Container>
      <Content>
          <Text>
            <FooterText>São José dos Campos, São Paulo - Brazil</FooterText>
            <FooterText>brunosantos6ft@gmail.com</FooterText>
          <FooterDivider>
            <p className='last-text'>Made with React, Styled-Components, a few libs and much study by 2021 ©Bruno Corrêa.</p>
            <Code>&#60;3html&#62;</Code>
          </FooterDivider>
          </Text>
      </Content>
    </Container>
  )
}