import React from 'react';
import dataAbout from '../../assets/data-about.json';
import Collapse from '../../components/Collapse';
import "./about.scss";
import HeroDesktop from './about-desktop.jpg';
import HeroMobile from './about-mobile.jpg';

const About = () => {

  return (
    <div className="about">
      <div className="aboutHero">
        <picture>
          <source
            type="image/svg+xml"
            srcSet={HeroDesktop}
            media="(min-width: 1100px)"
          />
          <img
            className="aboutHeroImg"
            src={HeroMobile}
            alt=""
          />
        </picture>
      </div>
      <section className="aboutDescription">
        {dataAbout.map((item, index) => (
          <Collapse title={item.title} content={item.description} key={index}/>
        ))}
      </section>
    </div>
  );
};

export default About;