import { Container, Content, Title, Code, SkillsGrid, SkillsItem } from './styles'

import javascriptIcon from '../../assets/skillsIcons/01-javascript.svg'
import reactIcon from '../../assets/skillsIcons/02-react.svg'
import nodeIcon from '../../assets/skillsIcons/03-node.svg'
import expressIcon from '../../assets/skillsIcons/04-express.svg'
import gitIcon from '../../assets/skillsIcons/05-git.svg'
import sqlIcon from '../../assets/skillsIcons/06-sql.svg'
import htmlIcon from '../../assets/skillsIcons/07-html.svg'
import sassIcon from '../../assets/skillsIcons/08-sass.svg'

export function Skills() {
  return (
    <Container id='skills'>
      <Content>
        <div>
        <Title>Skills</Title>
        <Code>&#60;ul id=”mainSkillset”&#62;&#60;/ul&#62;</Code>
        </div>
          <SkillsGrid>
            <SkillsItem>
              <img src={javascriptIcon} alt="" />
              <div>
                <div className="tag-divider">
                  <p className="typeTag">Frontend</p>
                  <p className="typeTag">Backend</p>
                </div>
              <div className="description-wrapper">
                <h4>Javascript</h4>
                <p>Programming language</p>
              </div>
              </div>
            </SkillsItem>

            <SkillsItem>
              <img src={gitIcon} alt="" />
              <div>
                <div className="tag-divider">
                  <p className="typeTag">Versioning</p>
                </div>
              <div className="description-wrapper">
                <h4>Git</h4>
                <p>Version control system</p>
              </div>
              </div>
            </SkillsItem>

            <SkillsItem>
              <img src={reactIcon} alt="" />
              <div>
                <div className="tag-divider">
                  <p className="typeTag">Frontend</p>
                </div>
              <div className="description-wrapper">
                <h4>ReactJS</h4>
                <p>JavaScript UI library</p>
              </div>
              </div>
            </SkillsItem>

            <SkillsItem>
              <img src={sqlIcon} alt="" />
              <div>
                <div className="tag-divider">
                  <p className="typeTag">Database</p>
                </div>
              <div className="description-wrapper">
                <h4>SQL</h4>
                <p>Structured Query Language</p>
              </div>
              </div>
            </SkillsItem>

            <SkillsItem>
              <img src={nodeIcon} alt="" />
              <div>
                <div className="tag-divider">
                  <p className="typeTag">Backend</p>
                </div>
              <div className="description-wrapper">
                <h4>NodeJS</h4>
                <p>JavaScript runtime</p>
              </div>
              </div>
            </SkillsItem>

            <SkillsItem>
              <img src={htmlIcon} alt="" />
              <div>
                <div className="tag-divider">
                  <p className="typeTag">Frontend</p>
                </div>
              <div className="description-wrapper">
                <h4>HTML5</h4>
                <p>Hypertext Markup Language</p>
              </div>
              </div>
            </SkillsItem>

            <SkillsItem>
              <img src={expressIcon} alt="" />
              <div>
                <div className="tag-divider">
                  <p className="typeTag">Backend</p>
                </div>
              <div className="description-wrapper">
                <h4>ExpressJS</h4>
                <p>NodeJS framework</p>
              </div>
              </div>
            </SkillsItem>

            <SkillsItem>
              <img src={sassIcon} alt="" />
              <div>
                <div className="tag-divider">
                  <p className="typeTag">Frontend</p>
                </div>
              <div className="description-wrapper">
                <h4>Sass</h4>
                <p>CSS preprocessor</p>
              </div>
              </div>
            </SkillsItem>
          </SkillsGrid>
          <Code>&#60;details&#62;I also code C++ but don’t tell anyone&#60;/details&#62;</Code>
      </Content>
    </Container>
  )
}