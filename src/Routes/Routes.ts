import Dashboard from '../pages/dashboard/Dashboard';
import Home from '../pages/home/Home';
import NotFound from '../pages/notFound/NotFound';
import OnBoarding from '../pages/onBoarding/Onboarding';

export const mainRoutes = {
  onBoarding: {
    title: 'On Boarding',
    path: '/onBoarding',
    element: OnBoarding,
  },
  dashboard: {
    title: 'Dashboard',
    path: '/dashboard',
    element: Dashboard,
  },
  notFound: {
    title: 'Not found',
    path: '*',
    element: NotFound,
  },
  home: {
    title: 'Home Page',
    path: '/',
    element: Home,
  },
};
