import { Form } from '../Form'
import { Container, Content, Title, Code } from './styles'

export function Contact() {
  return (
    <Container id='contact'>
      <Content>
        <Title>Contact</Title>
        <Code>&#60;Form /&#62;</Code>
          <Form />
      </Content>
    </Container>
  )
}