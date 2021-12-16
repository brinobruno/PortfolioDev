import { Header } from './components/Header'
import { Home } from './components/Home'
import { AboutMe } from './components/AboutMe'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

import { GlobalStyle } from './global/global'

export function App() {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <GlobalStyle />
    </>
  );
}