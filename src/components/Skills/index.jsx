import { skillsData } from './skillsData'
import {
  Container,
  Content,
  Title,
  Code,
  SkillsGrid,
  SkillsItem,
} from './styles'

export function Skills() {
  return (
    <Container id="skills">
      <Content>
        <div>
          <Title>Skills</Title>
          <Code>&#60;ul id=”mainSkillset”&#62;&#60;/ul&#62;</Code>
        </div>
        <SkillsGrid>
          {skillsData.map((item) => {
            return (
              <SkillsItem key={item.name}>
                <img src={item.icon} alt={item.name} />
                <div>
                  <div className="tag-divider">
                    <p className="typeTag">{item.typeTag0}</p>
                    {item.typeTag1 !== '' ? (
                      <p className="typeTag">{item.typeTag1}</p>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="description-wrapper">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </SkillsItem>
            )
          })}
        </SkillsGrid>
        <Code>
          &#60;details&#62;I also code C++ but don’t tell
          anyone&#60;/details&#62;
        </Code>
      </Content>
    </Container>
  )
}
