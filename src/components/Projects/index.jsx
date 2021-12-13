import { Container, Content, Title, Code, ProjectsContainer } from './styles'
import crossfitImg from '../../assets/images/01-crossfitUncompressed.png'

export function Projects() {
  return (
    <Container>
      <Content>
        <Title>Projects</Title>
        <Code>SELECT &#60;project&#62; FROM &#60;projects_list&#62;</Code>
        <ProjectsContainer>
          <div className='project-display'>
            <img src={crossfitImg} alt='Crossfit project website' />
          <div>
            <button>View Project</button>
            <button>View Repository</button>
          </div>
          </div>

          <div className='projects-list'>
          <a href="">Crossfit Gym Website_</a>
          <a href="">Candy Store Website_</a>
          <a href="">React Todo App_</a>
          <a href="">Snake Game_</a>
          <a href="">JSON Placeholder_</a>
          <a href="">Personal Website_</a>
          </div>
        </ProjectsContainer>
      </Content>
    </Container>
  )
}