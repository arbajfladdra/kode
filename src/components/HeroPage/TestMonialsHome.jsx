import React from "react";

import Tm from "../../assests/images/tm_1.jpg";
import AmazonImg from "../../assests/images/amazon.svg";
import * as comp from "../common";

const TestMonialsHome = () => {
  return (
    <div className="row bg-gray">
      <div className="container testimonal-wrapper">
        <comp.HeadLine2 className="text-center">Testimonials</comp.HeadLine2>
        <comp.Lead2 className="text-center">
          {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
          Hear What our students have to say about the course
        </comp.Lead2>

        <div className="Testimonial-items flex-wrapper">
          <div className="testimonial_card">
            <div className="testimonial_card-info">
              Their cutting edge platform and pedagogical methods are a class
              apart and help groom engineers not only on the technical skills
              but also the tools necessary for today's software development
              industry
            </div>
            <div className="testimonial_card-user">
              <img src={Tm} alt="" className="testimonial_card-user-img" />
              <p className="testimonial_card-user-name">Amrit Satsangi</p>
              <p className="testimonial_card-user-occupatio">Developer</p>
              <img
                src={AmazonImg}
                alt=""
                className="testimonial_card-user-affiiated_company-img"
              />
            </div>
          </div>
          <comp.TestimonialCard
            text="Their cutting edge platform and pedagogical methods are a class
                apart and help groom engineers not only on the technical skills
                but also the tools necessary for today's software development
                industry"
            user_name="Amrit Satsangi"
            user_occupation="developer"
            user_img={Tm}
            user_affiliated_company={AmazonImg}
          />
        </div>
      </div>
    </div>
  );
};

export default TestMonialsHome;
