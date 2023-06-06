import { ReactComponent as GithubIcon } from '../../assets/userIcons/github.svg'
import { ReactComponent as LinkedinIcon } from '../../assets/userIcons/linkedin.svg'
import { ReactComponent as EmailIcon } from '../../assets/userIcons/email.svg'
import { ReactComponent as BlogIcon } from '../../assets/userIcons/blog.svg'

export const socialIconsData = [
  {
    id: 1,
    name: 'github',
    component: <GithubIcon className="socialIcon" />,
    url: 'https://github.com/brinobruno',
  },
  {
    id: 2,
    name: 'linkedin',
    component: <LinkedinIcon className="socialIcon" />,
    url: 'https://www.linkedin.com/in/brunociao/',
  },
  {
    id: 3,
    name: 'email',
    component: <EmailIcon className="socialIcon" />,
    url: 'mailto:brunosantos6ft@gmail.com',
  },
  {
    id: 4,
    name: 'blog',
    component: <BlogIcon className="socialIcon" />,
    url: 'https://natelha.vercel.app',
  },
]

export const sectionMenuLinks = [
  {
    name: 'Home',
    href: '#home',
  },
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
