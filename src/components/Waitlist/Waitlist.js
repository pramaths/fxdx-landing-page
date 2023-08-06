import React from "react";
import "./Waitlist.css";
import Helmet from "react-helmet";
import fxdxLogoNew from "../../img/fxdx-logo.svg";

export function Waitlist() {
  return (
      <div className="default-container Page page-layout waitlist">
        <img src={fxdxLogoNew} alt="fxdx Logo New" className="logo"/>
        <div
            id="getWaitlistContainer"
            className="waitlist-container"
            data-waitlist_id="6882"
        ></div>
        <Helmet>
            <link
                rel="stylesheet"
                type="text/css"
                href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
            />
            <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
        </Helmet>
      </div>
  );
}

