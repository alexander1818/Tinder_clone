import { FC } from 'react';
import './styles/scss/_index.scss';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import Onboarding from './pages/onboarding/Onboarding';
import NotFound from './pages/notFound/NotFound';

const App: FC = () => (
  <div className="App">
    <Routes>
      <Route index element={<Home />} />
      <Route path="onboarding" element={<Onboarding />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);
export default App;
