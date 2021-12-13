import { Header } from './components/Header'
import { Home } from './components/Home'
import { AboutMe } from './components/AboutMe'
import { Skills } from './components/Skills'
import { GlobalStyle } from './global/global'

export function App() {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <GlobalStyle />
    </>
  );
}