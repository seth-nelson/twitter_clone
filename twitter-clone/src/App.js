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
                <Route path="/" element={<Feed />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/more" element={<More />} />
                <Route />
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
