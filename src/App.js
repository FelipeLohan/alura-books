import Header from "./components/Header/index.js";
import Search from "./components/Search/index.js";
import LatestReleases from "./components/LatestReleases/index.js";
import styled from "styled-components";

const AppContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    height: 100%;
    
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <LatestReleases />
    </AppContainer>
  );
}

export default App;
