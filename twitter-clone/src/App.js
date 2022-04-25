import "./pages/styles/App.css";
import {
  MainContainer,
  MainContainerItem,
} from "../src/pages/styles/Container.styled";
import Header from "./pages/Header";
import SideBar from "../src/pages/SideBar";
import Feed from "../src/pages/Feed";
import Suggestions from "../src/pages/Suggestions";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MainContainer>
          <MainContainerItem>
            <SideBar />
          </MainContainerItem>
          <MainContainerItem>
            <Feed />
          </MainContainerItem>
          <MainContainerItem>
            <Suggestions />
          </MainContainerItem>
        </MainContainer>
      </header>
    </div>
  );
}

export default App;
