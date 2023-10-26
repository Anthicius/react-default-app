import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AlbumsPage from "./components/pages/Albums/AlbumsPage";
import HomePage from "./components/pages/Home/HomePage";
import UsersPage from "./components/pages/Users/UsersPage";
import PostsPage from "./components/pages/Posts/PostsPage";
import { ApiDataProvider } from "./components/api/context/ApiDataContext";

function App() {


  return (
    <ApiDataProvider>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/albums">Albums</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/albums" element={<AlbumsPage />} />
        </Routes>
      </div>
    </Router>
    </ApiDataProvider>
  );
}

export default App;
