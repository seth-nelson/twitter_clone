import "./pages/styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  MainContainer,
  MainContainerItem,
} from "../src/pages/styles/Container.styled";
import Header from "./pages/Header";
import Sidebar from "./pages/Sidebar";
import Feed from "./pages/Feed";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import Bookmarks from "./pages/Bookmarks";
import Profile from "./pages/Profile";
import More from "./pages/More";
import Suggestions from "../src/pages/Suggestions";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <MainContainer>
            <MainContainerItem>
              <Sidebar />
            </MainContainerItem>
            <MainContainerItem>
              <Routes>
                <Route path="/" component={<Feed />} />
                <Route path="/explore" component={<Explore />} />
                <Route path="/notifications" component={<Notifications />} />
                <Route path="/messages" component={<Messages />} />
                <Route path="/bookmarks" component={<Bookmarks />} />
                <Route path="/profile" component={<Profile />} />
                <Route path="/more" component={<More />} />
              </Routes>
            </MainContainerItem>
            <MainContainerItem>
              <Suggestions />
            </MainContainerItem>
          </MainContainer>
        </header>
      </div>
    </Router>
  );
}

export default App;
