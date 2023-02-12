import whiteLogo from '../../../assets/images/tinder_logo_white.png';
import colorLogo from '../../../assets/images/color-logo-tinder.png';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const Logo = () => {
  const { isCreatedUser } = useTypedSelector((state) => state.createAccount);
  return (
    <img className="logo-container__logo" src={isCreatedUser ? colorLogo : whiteLogo} alt="" />
  );
};

export default Logo;
