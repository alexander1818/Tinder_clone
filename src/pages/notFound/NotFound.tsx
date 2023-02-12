import { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFound: FC = () => (
  <div>
    <p>Page not found</p>
    <p>
      <Link to="/">Go to the home page</Link>
    </p>
  </div>
);

export default NotFound;
