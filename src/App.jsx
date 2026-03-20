import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Dashboard  = lazy(() => import('./pages/Dashboard'));
const TopicsPage = lazy(() => import('./pages/TopicsPage'));
const TopicHub   = lazy(() => import('./pages/TopicHub'));
const LearnPage  = lazy(() => import('./pages/LearnPage'));
const MatchPage  = lazy(() => import('./pages/MatchPage'));
const QuizPage   = lazy(() => import('./pages/QuizPage'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-[#080e1c]" />}>
        <Routes>
          <Route path="/"       element={<Dashboard />} />
          <Route path="/topics"     element={<TopicsPage />} />
          <Route path="/topic-hub"  element={<TopicHub />} />
          <Route path="/learn"      element={<LearnPage />} />
          <Route path="/match"  element={<MatchPage />} />
          <Route path="/quiz"   element={<QuizPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
