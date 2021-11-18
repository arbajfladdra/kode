import React from "react";
import Hero from "./Hero";
import DesciptionHome from "./DesciptionHome";
import ProgramHome from "./ProgramHome";
import CarrierHome from "./CarrierHome";
import ProgramAbout from "./ProgramAbout";
import TestMonialsHome from "./TestMonialsHome";
import * as comp from "../common";
import As1 from "../../assests/images/as_1.svg";
import As2 from "../../assests/images/as_2.svg";
import As3 from "../../assests/images/as_3.svg";
import As4 from "../../assests/images/as_4.svg";
import As5 from "../../assests/images/as_5.svg";

const HeroPage = () => {
  return (
    <>
      <Hero />
      <div className="row">
        <div className=" container associative-wrapper">
          <comp.HeadLine2>
            Developers from kodebrewlabs have cracked careers in
          </comp.HeadLine2>
          <div className="associative_items">
            <img src={As1} alt="" className="associtaive_item" />
            <img src={As2} alt="" className="associtaive_item" />
            <img src={As3} alt="" className="associtaive_item" />
            <img src={As4} alt="" className="associtaive_item" />
            <img src={As5} alt="" className="associtaive_item" />
          </div>
        </div>
      </div>
      <DesciptionHome />
      <ProgramHome />
      <CarrierHome />
      <ProgramAbout />
      <TestMonialsHome />
      <div className="row bg-gray">
        <div className=" jumbotron">
          <comp.HeadLine1 className="text-center">
            Enrol now to kickstart your career as a Full Stack Developer
          </comp.HeadLine1>
          <div className="flex-wrapper" style={{ justifyContent: "center" }}>
            <a href="" className="btn btn-primary">
              Get Started
            </a>
            <a href="" className="btn btn-secondary">
              Book a Free Trial
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
