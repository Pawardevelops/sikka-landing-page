import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import RoadmapPage from './pages/RoadmapPage';

/**
 * Sikka Hub
 * 
 * Main entry point with React Router.
 */
function App() {
  return (
    <Router>
      <div className="noir-grid" />
      <div className="noise" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
