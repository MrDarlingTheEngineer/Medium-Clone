import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ArticleEditor from './pages/ArticleEditor';
import Auth from './components/Auth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-article" element={<ArticleEditor />} />
      </Routes>
    </Router>
  );
}

export default App;

