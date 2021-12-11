import { Header } from './components/Header'
import { Home } from './components/Home'
import { AboutMe } from './components/AboutMe'
import { GlobalStyle } from './global/global'

export function App() {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <GlobalStyle />
    </>
  );
}