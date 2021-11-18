import React from "react";
import * as comp from "../common";
import HeroModelImg from "../../assests/images/hero_model.png";
import Svg1 from "../../assests/images/hero_shape-1.svg";
import Svg2 from "../../assests/images/hero_shape-2.svg";
const Hero = () => {
  return (
    <comp.Row className="bg-gray">
      <div className="container hero-wrapper padding-top-87">
        <div className="hero-item hero-info">
          {/* <comp.HeadLine1 className="test">
            From Zero to Hero <br />
            <span className="headline-span">Full Stack</span>
            Web <br /> Developer
          </comp.HeadLine1> */}
          <comp.HeadLine1>
            From Zero to Hero
            <span className="headline-span">Full Stack</span>
            Web Developer
          </comp.HeadLine1>
          <p className="lead">
            KodeBrewLabs.com is an initiative of Cloudtryx Softwares providing
            the IT trainings in different domains like cloud computing, Devops,
            Data Science, Machine learning and Full Stack Development.{" "}
          </p>
          <div className="flex-wrapper">
            <a href="" className="btn btn-primary">
              Get Started
            </a>
            <a href="" className="btn btn-secondary">
              Book a Free Trial
            </a>
          </div>
        </div>
        <div className="hero-item hero-img">
          <img src={HeroModelImg} alt="" className="hero-model" />
          {/* <Svg1 /> */}
          <img src={Svg2} alt="" className="svg-2" />

          <img src={Svg1} alt="" className="svg-1" />
        </div>
      </div>
    </comp.Row>
  );
};

export default Hero;
