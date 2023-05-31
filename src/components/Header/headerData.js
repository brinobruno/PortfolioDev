import { ReactComponent as GithubIcon } from '../../assets/userIcons/github.svg'
import { ReactComponent as LinkedinIcon } from '../../assets/userIcons/linkedin.svg'
import { ReactComponent as EmailIcon } from '../../assets/userIcons/email.svg'
import { ReactComponent as BlogIcon } from '../../assets/userIcons/blog.svg'

export const socialIconsData = [
  {
    id: 1,
    component: <GithubIcon className="socialIcon" />,
    url: 'https://github.com/brinobruno',
  },
  {
    id: 2,
    component: <LinkedinIcon className="socialIcon" />,
    url: 'https://www.linkedin.com/in/brunociao/',
  },
  {
    id: 3,
    component: <EmailIcon className="socialIcon" />,
    url: 'mailto:brunosantos6ft@gmail.com',
  },
  {
    id: 4,
    component: <BlogIcon className="socialIcon" />,
    url: 'https://natelha.blog',
  },
]

export const sectionMenuLinks = [
  {
    name: 'About me',
    href: '#about-me',
  },
  {
    name: 'Skills',
    href: '#skills',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
]
