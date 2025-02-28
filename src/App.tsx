import GlobalStyle from "./assets/styles/GlobalStyle";
import Router from "./router/router";
import Header from "./layouts/Header";
import AddButton from "./components/AddButton";
import Category from "./layouts/Category";
import SearchBar from "./layouts/SearchBar";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SearchBar />
      <Category />
      <Router />
      <AddButton />
    </>
  );
}

export default App;
