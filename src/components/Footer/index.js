import './footer.scss';
import LogoFooter from './logo-footer.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLogo">
        <img src={LogoFooter} alt="Kasa logo" />
      </div>
      <p className='footerCopyright'>
      © 2020 Kasa. All rights reserved
      </p>
    </div>
  );
};

export default Footer;