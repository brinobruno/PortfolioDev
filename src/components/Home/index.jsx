import { useState } from 'react'
import Modal from 'react-modal'

import { Container, Content, Text, Title, Subtitle, DownloadHome } from './styles'
import brunoImg from '../../assets/images/brunoImg.png'

import downloadIcon from '../../assets/userIcons/download.svg'

Modal.setAppElement('#root') //accessibility code recommended by documentation

export function Home() {
  const [isDownloadCVModalOpen, setIsDownloadCVModalOpen] = useState(false)

  function handleOpenDownloadCVModal() {
    setIsDownloadCVModalOpen(true)
  }

  function handleCloseDownloadCVModal() {
    setIsDownloadCVModalOpen(false)
  }

  return (
    <>
    <Container>
      <Content>
        <Text>
          <Title>Ciao!<br />I'm Bruno</Title>
          <Subtitle>A future fullstack developer</Subtitle>
          <DownloadHome onClick={handleOpenDownloadCVModal} id="download-home" >Resumé <img src={downloadIcon} alt="Ícone de download" /></DownloadHome>
          <Modal
          isOpen={isDownloadCVModalOpen}
          onRequestClose={handleCloseDownloadCVModal}
          >
            <h3>Download my Resumé</h3>
          </Modal>
        </Text>
        <img id="bruno-img" src={brunoImg} alt="Foto de Bruno Corrêa" />
      </Content>
    </Container>
    </>
  )
}