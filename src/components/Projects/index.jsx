import { useState } from 'react'

import { Container, Content, Title, Code, ProjectsContainer, ProjectDisplay, ProjectsList } from './styles'

import ProjectsObject from './projectsObject';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(ProjectsObject.project00)

  return (
    <Container id='projects'>
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
          <a className={selectedProject === ProjectsObject.project00 ? 'selected-item' : ''} onClick={() => { setSelectedProject(ProjectsObject.project00) }}>Crossfit Gym Website_</a>
          <a className={selectedProject === ProjectsObject.project01 ? 'selected-item' : ''} onClick={() => { setSelectedProject(ProjectsObject.project01) }}>Candy Store Website_</a>
          <a className={selectedProject === ProjectsObject.project02 ? 'selected-item' : ''} onClick={() => { setSelectedProject(ProjectsObject.project02) }}>React Todo App_</a>
          <a className={selectedProject === ProjectsObject.project03 ? 'selected-item' : ''} onClick={() => { setSelectedProject(ProjectsObject.project03) }}>Snake Game_</a>
          <a className={selectedProject === ProjectsObject.project04 ? 'selected-item' : ''} onClick={() => { setSelectedProject(ProjectsObject.project04) }}>JSON Placeholder_</a>
          <a className={selectedProject === ProjectsObject.project05 ? 'selected-item' : ''} onClick={() => { setSelectedProject(ProjectsObject.project05) }}>Personal Blog_</a>
          </ProjectsList>
        </ProjectsContainer>
      </Content>
    </Container>
  )
}