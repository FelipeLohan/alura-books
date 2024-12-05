import Header from "./components/Header/index.js";
import styled from "styled-components";

const AppContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);

  li {
    list-style: none;
  }
`;

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
