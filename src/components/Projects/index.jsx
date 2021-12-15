import { useState } from 'react'

import { Container, Content, Title, Code, ProjectsContainer } from './styles'

import Images from './images';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(Images.imgItem00)

  return (
    <Container>
      <Content>
        <Title>Projects</Title>
        <Code>SELECT &#60;project&#62; FROM &#60;projects_list&#62;</Code>
        <ProjectsContainer>
          <div className='project-display'>
            <img src={selectedProject.image} alt="Screenshot of the project selected" />
          <div>
          <a href={selectedProject.projectUrl}><button>View Project</button></a>
          <a href={selectedProject.repositoryUrl}><button>View Repository</button></a>
          </div>
          </div>

          <div className='projects-list'>
          <a onClick={() => { setSelectedProject(Images.imgItem00) }}>Crossfit Gym Website_</a>
          <a onClick={() => { setSelectedProject(Images.imgItem01) }}>Candy Store Website_</a>
          <a onClick={() => { setSelectedProject(Images.imgItem02) }}>React Todo App_</a>
          <a onClick={() => { setSelectedProject(Images.imgItem03) }}>Snake Game_</a>
          <a onClick={() => { setSelectedProject(Images.imgItem04) }}>JSON Placeholder_</a>
          <a onClick={() => { setSelectedProject(Images.imgItem05) }}>Personal Website_</a>
          </div>
        </ProjectsContainer>
      </Content>
    </Container>
  )
}