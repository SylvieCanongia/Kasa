import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLogo">
        <img src="./assets/images/logo-footer.svg" alt="Kasa logo" />
      </div>
      <p className='footerCopyright'>
      © 2020 Kasa. All rights reserved
      </p>
    </div>
  );
};

export default Footer;