import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <p>Page not found</p>
    <p>
      <Link to="/">Go to the home page</Link>
    </p>
  </div>
);

export default NotFound;
