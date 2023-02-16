import { Container, Header } from "./App.styles"
import TextHeader from "./components/TextHeader"

export default function App() {

  return (
    <Container>
      <Header>
        <img src="./image1.svg" alt="imagem 1" id="image1"/>
        <img src="./image2.svg" alt="imagem 2" id="image2"/>
        <TextHeader />
      </Header>
    </Container>
  )
}
