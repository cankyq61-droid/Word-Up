import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TopicsPage from './pages/TopicsPage';
import LearnPage from './pages/LearnPage';
import MatchPage from './pages/MatchPage';
import QuizPage from './pages/QuizPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/topics" element={<TopicsPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/match" element={<MatchPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  );
}
