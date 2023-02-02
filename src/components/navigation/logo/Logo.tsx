import whiteLogo from '../../../assets/images/tinder_logo_white.png';
import colorLogo from '../../../assets/images/color-logo-tinder.png';

const Logo = () => {
  //TODO: if auth true
  const auth = true;
  return <img className="logo-container__logo" src={auth ? colorLogo : whiteLogo} alt="" />;
};

export default Logo;
