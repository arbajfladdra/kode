import React from "react";

import De1 from "../../assests/images/de_1.svg";
import De2 from "../../assests/images/de_2.svg";
import De3 from "../../assests/images/de_3.svg";
import De4 from "../../assests/images/de_4.svg";

import * as comp from "../common";
const DesciptionHome = () => {
  return (
    <div className="row bg-gray">
      <div className="container text-center desc-wrapper">
        <comp.HeadLine2>
          Take your Developer Career to next levels
        </comp.HeadLine2>
        <comp.Lead2>
          We at Kode Brew Labs are focusing on bridging the gap providing the
          latest IT training at low cost. We provide live instructor based
          online training. We also provide corporate and internship programs.
          Remember Its not only resources looking for good companies, Companies
          are also searching for good quality resources.
        </comp.Lead2>
        <div className="flex-wrapper desc_card-wrapper">
          <comp.Desc_Card
            img={De1}
            headline="True Project Based Learning"
            info="
          Learn Full-Stack development or Backend development through an
          immersive project-based curriculum focused on practical
          developer skills."
          />
          <comp.Desc_Card
            img={De2}
            headline="Real Work Experience"
            info="Learn with real work experience by building internship-grade projects, with world-class mentorship, in an actual developer environment."
          />
          <comp.Desc_Card
            img={De3}
            headline="Job-ready Portfolio on GitHub"
            info="Go beyond just certificates with a Kodebrewlabs verified project portfolio on GitHub and impress any recruiter with your skills and experience."
          />
          <comp.Desc_Card
            img={De4}
            headline="Personalised Career Guidance & Support"
            info="Land exciting developer jobs with structured planning and personalised guidance & support from Crio career coaches."
          />
        </div>
      </div>
    </div>
  );
};

export default DesciptionHome;
