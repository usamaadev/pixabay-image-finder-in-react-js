import "./App.css";
// import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search"
import { Container } from "@material-ui/core";


function App() {


  return (
    // <MuiThemeProvider>
      <Container>
        <NavBar />
        <Search />
      </Container>
    // </MuiThemeProvider>
  );
}

export default App;
