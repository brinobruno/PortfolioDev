import { Container, Content, Text, Title, Subtitle, DownloadHome } from './styles'
import brunoImg from '../../assets/images/brunoImg.png'

import downloadIcon from '../../assets/userIcons/download.svg'

export function Home() {
  return (
    <>
    <Container>
      <Content>
        <Text>
          <Title>Ciao!<br />I'm Bruno</Title>
          <Subtitle>A future fullstack developer</Subtitle>
          <DownloadHome id="download-home" >Resumé <img src={downloadIcon} alt="Ícone de download" /></DownloadHome>
        </Text>
        <img id="bruno-img" src={brunoImg} alt="Foto de Bruno Corrêa" />
      </Content>
    </Container>
    </>
  )
}