import { useState } from 'react'
import Modal from 'react-modal'

import englishCV from '../../assets/resume/BrunoCorrea Resume EN_us.pdf'
import portugueseCV from '../../assets/resume/BrunoCorrea Resume PT_br.pdf'

import {
  Container,
  Content,
  Text,
  Title,
  Subtitle,
  DownloadHome,
  ModalContainer,
} from './styles'

import brunoImg from '../../assets/images/brunoImg.webp'
import downloadIcon from '../../assets/userIcons/download.svg'
import closeIcon from '../../assets/userIcons/close.svg'

Modal.setAppElement('#root') // accessibility code recommended by documentation

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
      <Container id="home">
        <Content>
          <div className="buttons-div">
            <div>
              <Text>
                <Title>
                  Ciao!
                  <br />
                  I&apos;m Bruno
                </Title>
                <Subtitle>A future fullstack developer</Subtitle>
                <DownloadHome
                  onClick={handleOpenDownloadCVModal}
                  id="download-home"
                >
                  Resumé <img src={downloadIcon} alt="Ícone de download" />
                </DownloadHome>
                <Modal
                  isOpen={isDownloadCVModalOpen}
                  onRequestClose={handleCloseDownloadCVModal}
                  // style
                  overlayClassName="react-modal-overlay"
                  className="react-modal-content"
                >
                  <button
                    type="button"
                    onClick={handleCloseDownloadCVModal}
                    className="react-modal-close-button"
                  >
                    <img src={closeIcon} alt="Close menu" />
                  </button>
                  <ModalContainer>
                    <h3>Download my Resumé</h3>
                    <div>
                      <button>
                        <a rel="noreferrer" target="_blank" href={englishCV}>
                          In English
                        </a>{' '}
                        <img src={downloadIcon} alt="Download" />{' '}
                      </button>
                      <button>
                        <a rel="noreferrer" target="_blank" href={portugueseCV}>
                          Em português
                        </a>{' '}
                        <img src={downloadIcon} alt="Download" />{' '}
                      </button>
                    </div>
                  </ModalContainer>
                </Modal>
              </Text>
            </div>
            <div>
              <a
                href="https://natelha.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <DownloadHome id="visit-blog">Visit my blog</DownloadHome>
              </a>
            </div>
          </div>
          <img id="bruno-img" src={brunoImg} alt="Bruno Corrêa" />
        </Content>
      </Container>
    </>
  )
}
