import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <picture>
        <source
          type="image/svg+xml"
          srcSet="
            ./assets/images/hero-desktop.svg"
          media="(min-width: 1100px)"
        />
        <img
          className="heroImg"
          src="./assets/images/hero-mobile.svg"
          alt="Chez vous, partout et ailleurs"
        />
      </picture>
      <p className="heroText">
        Chez vous,<span>partout et ailleurs</span>
      </p>
    </div>
  );
};

export default Hero;
