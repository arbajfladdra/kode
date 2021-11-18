import React from "react";
import * as comp from "../common";
const ProgramAbout = () => {
  return (
    <div className="row">
      <div className="about-program-wrapper container">
        <div className="about-program-items flex-wrapper">
          <div className="about-program-item">
            <div className="program_card-main-info-item-name">Real</div>

            <comp.HeadLine3>Work Experience</comp.HeadLine3>

            <div className="program_card-main-info-item-name">Real</div>
            <comp.HeadLine3>Project-Based Learning</comp.HeadLine3>

            <div className="program_card-main-info-item-name">Real</div>
            <comp.HeadLine3>Skill Development</comp.HeadLine3>
          </div>
          <div className="about-program-item">
            <div className="lead-1">
              Existing ways available to learn software development through
              video-based courses and expensive bootcamps aren't as effective
              when it comes to solving real-world tech problems.
            </div>
            <div className="lead-1">
              Recruiters too, look for real software development project
              experience when hiring developers and here at Crio, we strive to
              provide just that. We empower developers with high quality applied
              learning opportunities and build skills that translate into career
              growth and success.
            </div>
          </div>
        </div>
        <table className="custom_table">
          <tr className="custom_table-header">
            <th> </th>
            <th>Video Courses</th>
            <th>Bootcamps</th>
            <th>kodebrewlabs</th>
          </tr>
          <tr className="custom_table-main">
            <th className="custom_table-headline">
              True Project Based Learning
            </th>
            <th className="custom_table-data">
              <comp.TableValue value="false" />
            </th>
            <th className="custom_table-data">
              <comp.TableValue value="false" />
            </th>
            <th className="custom_table-data">
              <comp.TableValue value="true" />
            </th>
          </tr>
          <tr className="custom_table-main">
            <th className="custom_table-headline">Practical Dev Skills</th>
            <th className="custom_table-data">
              <comp.TableValue value="false" />
            </th>
            <th className="custom_table-data">
              <comp.TableValue value="false" />
            </th>
            <th className="custom_table-data">
              <comp.TableValue value="true" />
            </th>
          </tr>
          <tr className="custom_table-main">
            <th className="custom_table-headline">Real Work Experience</th>
            <th className="custom_table-data">
              <comp.TableValue value="false" />
            </th>
            <th className="custom_table-data">
              <comp.TableValue value="false" />
            </th>
            <th className="custom_table-data">
              <comp.TableValue value="true" />
            </th>
          </tr>
          <tr className="custom_table-main">
            <th className="custom_table-headline">
              Job-Ready Project Portfolio
            </th>
            <th className="custom_table-data">
              <comp.TableValue value="false" />
            </th>
            <th className="custom_table-data">
              <comp.TableValue value="false" />
            </th>
            <th className="custom_table-data">
              <comp.TableValue value="true" />
            </th>
          </tr>
          <tr className="custom_table-main">
            <th className="custom_table-headline">
              Personalized Career Guidance
            </th>
            <th className="custom_table-data">
              <comp.TableValue value="false" />
            </th>
            <th className="custom_table-data">
              <comp.TableValue value="true" />
            </th>
            <th className="custom_table-data">
              <comp.TableValue value="true" />
            </th>
          </tr>
          <tr className="custom_table-main">
            <th className="custom_table-headline">Job Search Support</th>
            <th className="custom_table-data">
              <comp.TableValue value="false" />
            </th>
            <th className="custom_table-data">
              <comp.TableValue value="true" />
            </th>
            <th className="custom_table-data">
              <comp.TableValue value="true" />
            </th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ProgramAbout;
