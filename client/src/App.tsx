import { FC } from 'react';
import './styles/scss/_index.scss';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import OnBoarding from './pages/onBoarding/Onboarding';
import NotFound from './pages/notFound/NotFound';
import Navigation from './components/navigation/Navigation';

const App: FC = () => (
  <div className="App">
    <Navigation />
    <Routes>
      <Route index element={<Home />} />
      <Route path="onBoarding" element={<OnBoarding />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);
export default App;
