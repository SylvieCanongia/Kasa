import "./hero.scss";
import HeroLogoDesktop from './hero-desktop.svg';
import HeroLogoMobile from './hero-mobile.svg';

const Hero = () => {
  return (
    <div className="hero">
      <picture>
        <source
          type="image/svg+xml"
          srcSet={HeroLogoDesktop}
          media="(min-width: 1100px)"
        />
        <img
          className="heroImg"
          src={HeroLogoMobile}
          alt="Chez vous, partout et ailleurs"
        />
      </picture>
      <h1 className="heroText">
        Chez vous,<span>partout et ailleurs</span>
      </h1>
    </div>
  );
};

export default Hero;
