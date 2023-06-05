import { Container, Content, Text, TextContent, Title, Code } from './styles'

export function AboutMe() {
  return (
    <Container id="about-me">
      <Content>
        <Title>About me</Title>
        <Text>
          <Code>&#60;h2&#62;Hello World!&#60;/h2&#62;</Code>
          <TextContent>
            <br />
            You know that guy who&apos;s always on a computer, either gaming,
            watching stuff or typing <span id="colorful-purple">
              colorful
            </span>{' '}
            <span id="colorful-green">words</span> on a text editor? Yup,
            that&apos;s me!
            <br />
            <br />
            I&apos;m a software engineer based in São Paulo - Brazil, I&apos;m
            currently an undergraduate in Computer Engineering and since 2020
            I&apos;ve worked with technologies such as JavaScript, ReactJS,
            NodeJS, SCSS, Git and more to build powerful interfaces and APIs.
            <br />
            <br />
            At the moment I&apos;m a Junior Developer at Binary Future, from
            Ukraine, needless to say I&apos;m extremely passionate about
            education and its impact globally.
          </TextContent>
        </Text>
      </Content>
    </Container>
  )
}
