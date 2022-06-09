import { useState } from 'react'
import { Container, Content, Title, Code, ProjectsContainer, ProjectDisplay, ProjectsList } from './styles'
import { ProjectsObject } from './projectsObject'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(ProjectsObject[0])

  return (
    <Container id='projects'>
      <Content>
        <Title>Projects</Title>
        <Code>SELECT &#60;project&#62; FROM &#60;projects_list&#62;</Code>
        <ProjectsContainer>
          <ProjectDisplay>
            <img src={ selectedProject.image } alt="Screenshot of the project selected" />
          <div>
            <a href={ selectedProject.projectUrl }>
              <button>
                View Project
              </button>
            </a>
            <a href={ selectedProject.repositoryUrl }>
              <button>
                View Repository
              </button>
            </a>
          </div>
          </ProjectDisplay>

          <ProjectsList>
            {
              ProjectsObject.map((item, index) => {
                return (
                  <button
                    key={ item.name }
                    className={ selectedProject === ProjectsObject[index] ? 'selected-item' : '' }
                    onClick={() => { setSelectedProject(ProjectsObject[index]) }}
                  >
                    { item.name }
                  </button>
                )
              })
            }
          </ProjectsList>
        </ProjectsContainer>
      </Content>
    </Container>
  )
}