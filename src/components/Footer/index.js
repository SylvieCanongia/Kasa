import './footer.scss';
import LogoFooter from './logo-footer.svg'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footerLogo">
        <img src={LogoFooter} alt="Kasa logo" />
      </div>
      <p className='footerCopyright'>
      © { currentYear } Kasa. All rights reserved
      </p>
    </div>
  );
};

export default Footer;