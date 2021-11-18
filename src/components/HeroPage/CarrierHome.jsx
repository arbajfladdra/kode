import React from "react";
import * as comp from "../common";

import Cr1 from "../../assests/images/cr_1.svg";
import Cr2 from "../../assests/images/cr_2.svg";
import Cr3 from "../../assests/images/cr_3.svg";
const CarrierHome = () => {
  return (
    <div className="row bg-gray">
      <div className="container  carrier-wrapper">
        <comp.HeadLine2 className="text-center">Career Services</comp.HeadLine2>
        <comp.Lead2 className="text-center">
          All of our web development programs come with career services that
          will equip you to use your learnings and skills to ace your next
          interview or excel in your current role.
        </comp.Lead2>
        <div className="carrier-card-wrapper flex-wrapper">
          <div className="carrier-card">
            <img src={Cr1} alt="" className="carrier-card-img" />
            <comp.HeadLine3>Profile Readiness</comp.HeadLine3>
            <ul className="carrier-card-list">
              <li className="carrier-card-list-item">
                Resume & LinkedIn Profile Review
              </li>
              <li className="carrier-card-list-item">
                Tips & Hacks to get noticed by Recruiters
              </li>
              <li className="carrier-card-list-item">
                Playbook on how best to apply to companies
              </li>
            </ul>
          </div>
          <div className="carrier-card">
            <img src={Cr2} alt="" className="carrier-card-img" />
            <comp.HeadLine3>Career Planning & Coaching</comp.HeadLine3>
            <ul className="carrier-card-list">
              <li className="carrier-card-list-item">S.M.A.R.T goal setting</li>
              <li className="carrier-card-list-item">
                Personalised career planning
              </li>
              <li className="carrier-card-list-item">
                Group office hours with career coaches
              </li>
            </ul>
          </div>
          <div className="carrier-card">
            <img src={Cr3} alt="" className="carrier-card-img" />
            <comp.HeadLine3>Referrals & Placement Guarantee</comp.HeadLine3>
            <ul className="carrier-card-list">
              <li className="carrier-card-list-item">
                Assured referrals to exciting dev roles
              </li>
              <li className="carrier-card-list-item">
                Guaranteed placement within
              </li>
              <li className="carrier-card-list-item">
                6 months of program completion
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrierHome;
