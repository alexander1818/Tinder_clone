import Logo from './logo/Logo';

const Navigation = () => {
  //TODO: if auth true
  const auth = false;
  return (
    <nav>
      <div className="logo-container">
        <Logo />
      </div>
      {!auth && <button className="logo-container__nav-button">Log in</button>}
    </nav>
  );
};

export default Navigation;
