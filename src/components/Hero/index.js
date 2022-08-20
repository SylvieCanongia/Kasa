import "./hero.scss";
import HeroLogoDesktop from './hero-desktop.jpg';
import HeroLogoMobile from './hero-mobile.jpg';

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
        Chez vous, <span>partout et ailleurs</span>
      </h1>
    </div>
  );
};

export default Hero;
