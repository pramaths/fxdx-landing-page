import React from "react";
import "./Partners.css";
import investorsdesktop from "../../img/Invester Logos- Desktop.svg";
import investorsmobile from "../../img/Invester Logos- Mobile.svg";

const Partners = () => {
  return (
    <div className="partners-wrapper">
      <h2 className="title">Our Partners</h2>
      <img
        className="partners-logos-desktop"
        alt="partners-logos"
        src={investorsdesktop}
      />
      <img
        className="partners-logos-mobile"
        alt="partners-logos"
        src={investorsmobile}
      />
    </div>
  );
};

export default Partners;
