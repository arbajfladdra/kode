import Truee from "../assests/images/true.svg";
import Falsee from "../assests/images/false.svg";

export const HeadLine1 = ({ className, children }) => {
  return <h1 className={`headline-1 ${className}`}>{children}</h1>;
};
export const HeadLine2 = ({ className, children }) => {
  return <h2 className={`headline-2 ${className}`}>{children}</h2>;
};
export const HeadLine3 = ({ className, children }) => {
  return <h2 className={`headline-3 ${className}`}>{children}</h2>;
};
export const HeadLine4 = ({ className, children }) => {
  return <h2 className={`headline-4 ${className}`}>{children}</h2>;
};
export const Lead1 = ({ className, children }) => {
  return <p className={`lead-1 ${className}`}>{children}</p>;
};
export const Lead2 = ({ className, children }) => {
  return <p className={`lead-2 ${className}`}>{children}</p>;
};
export const Lead3 = ({ className, children }) => {
  return <p className={`lead-3 ${className}`}>{children}</p>;
};

export const Row = ({ className, children }) => {
  return <div className={`row ${className}`}>{children}</div>;
};

export const Desc_Card = ({ headline, info, img }) => {
  return (
    <div className="desc_card">
      <img src={img} alt="" className="desc_card-img" />
      <HeadLine3>{headline}</HeadLine3>
      <Lead3>{info}</Lead3>
    </div>
  );
};

// prpgram card components starts here .......................................................................
// i made here separate section of code program
//  Desc_Card.apply.becasue program card containe so many elements

export const ProgramCard = ({ children, className }) => (
  <div className={`program_item program_card ${className}`}>{children}</div>
);
export const PorgramHeader = ({ children }) => (
  <div className="program_card-header">{children}</div>
);
export const PorgramHeaderName = ({ children }) => (
  <HeadLine3 className="program_card-header-name">{children}</HeadLine3>
);

export const ProgramHeaderLead = ({ children }) => <Lead3>{children}</Lead3>;

export const ProgramMain = ({ children }) => (
  <div className="program_card-main">{children}</div>
);
export const ProgramMainInfo = ({ children }) => (
  <div className="program_card-main-info">{children}</div>
);
export const ProgramMainInfoLeft = ({ children }) => (
  <div className=" program_card-main-info_left">{children}</div>
);
export const ProgramMainInfoRight = ({ children }) => (
  <div className=" program_card-main-info_right">{children}</div>
);
export const ProgramMainInfoItem = ({ children }) => (
  <p className="program_card-main-info-item">{children}</p>
);
export const ProgramMainInfoItemName = ({ children }) => (
  <p className="program_card-main-info-item-name">{children}</p>
);
export const ProgramMainInfoItemLead = ({ children }) => (
  <p className="program_card-main-info-item-lead">{children}</p>
);

// prpgram card components ends here .........................................................................
export const TableValue = ({ value }) => {
  return (
    <div className={`custom_table-${value}Value`}>
      <img src={value == "true" ? Truee : Falsee} alt="" />
    </div>
  );
};
export const TestimonialCard = ({
  text,
  user_img,
  user_name,
  user_occupation,
  user_affiliated_company,
}) => {
  return (
    <div className="testimonial_card">
      <div className="testimonial_card-info">{text}</div>
      <div className="testimonial_card-user">
        <img src={user_img} alt="" className="testimonial_card-user-img" />
        <p className="testimonial_card-user-name">{user_name}</p>
        <p className="testimonial_card-user-occupation">{user_occupation}</p>
        <img
          src={user_affiliated_company}
          alt=""
          className="testimonial_card-user-affiiated_company-img"
        />
      </div>
    </div>
  );
};
