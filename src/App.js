import GlobalStyle from "./styles/GlobalStyle";
import styled from "styled-components";
import Header from "./components/domain/Header"
import ContainerSearch from "./components/domain/Nav"
import Main from "./components/domain/Main"
import Footer from "./components/domain/Footer"

const ContainerDoc= styled.div`
    min-width: 1180px;
`
function App() {
  return (
    <>
      <GlobalStyle />
      <ContainerDoc>
        <Header />
        <ContainerSearch />
        <Main />
        <Footer />
      </ContainerDoc>
    </>
  );
}

export default App;
