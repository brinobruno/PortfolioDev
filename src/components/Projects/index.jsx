import { useState } from 'react'

import { Container, Content, Title, Code, ProjectsContainer, ProjectDisplay, ProjectsList } from './styles'

import Images from './images';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(Images.imgItem00)

  return (
    <Container>
      <Content>
        <Title>Projects</Title>
        <Code>SELECT &#60;project&#62; FROM &#60;projects_list&#62;</Code>
        <ProjectsContainer>
          <ProjectDisplay>
            <img src={selectedProject.image} alt="Screenshot of the project selected" />
          <div>
          <a href={selectedProject.projectUrl}><button>View Project</button></a>
          <a href={selectedProject.repositoryUrl}><button>View Repository</button></a>
          </div>
          </ProjectDisplay>

          <ProjectsList>
          <a className={selectedProject === Images.imgItem00 ? 'selected-item' : ''} onClick={() => { setSelectedProject(Images.imgItem00) }}>Crossfit Gym Website_</a>
          <a className={selectedProject === Images.imgItem01 ? 'selected-item' : ''} onClick={() => { setSelectedProject(Images.imgItem01) }}>Candy Store Website_</a>
          <a className={selectedProject === Images.imgItem02 ? 'selected-item' : ''} onClick={() => { setSelectedProject(Images.imgItem02) }}>React Todo App_</a>
          <a className={selectedProject === Images.imgItem03 ? 'selected-item' : ''} onClick={() => { setSelectedProject(Images.imgItem03) }}>Snake Game_</a>
          <a className={selectedProject === Images.imgItem04 ? 'selected-item' : ''} onClick={() => { setSelectedProject(Images.imgItem04) }}>JSON Placeholder_</a>
          <a className={selectedProject === Images.imgItem05 ? 'selected-item' : ''} onClick={() => { setSelectedProject(Images.imgItem05) }}>Personal Website_</a>
          </ProjectsList>
        </ProjectsContainer>
      </Content>
    </Container>
  )
}