import { useState } from 'react'

import { Container, Content, Title, Code, ProjectsContainer } from './styles'

import Images from './images';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(Images[0])

  return (
    <Container>
      <Content>
        <Title>Projects</Title>
        <Code>SELECT &#60;project&#62; FROM &#60;projects_list&#62;</Code>
        <ProjectsContainer>
          <div className='project-display'>
            <img src={selectedProject} alt="Screenshot of the project selected" />
          <div>
            <button>View Project</button>
            <button>View Repository</button>
          </div>
          </div>

          <div className='projects-list'>
          <a onClick={() => { setSelectedProject(Images[0]) }}>Crossfit Gym Website_</a>
          <a onClick={() => { setSelectedProject(Images[1]) }}>Candy Store Website_</a>
          <a onClick={() => { setSelectedProject(Images[2]) }}>React Todo App_</a>
          <a onClick={() => { setSelectedProject(Images[3]) }}>Snake Game_</a>
          <a onClick={() => { setSelectedProject(Images[4]) }}>JSON Placeholder_</a>
          <a onClick={() => { setSelectedProject(Images[5]) }}>Personal Website_</a>
          </div>
        </ProjectsContainer>
      </Content>
    </Container>
  )
}