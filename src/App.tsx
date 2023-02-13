import { FC } from 'react';
import './styles/scss/_index.scss';
import Navigation from './components/navigation/Navigation';
import InternalRouter from './Routes/Router';

const App: FC = () => (
  <div className="App">
    <Navigation />
    <InternalRouter />
  </div>
);
export default App;
