import fxdxtokenicon from "../../img/fxdx-token-icon.svg";
import btctokenicon from "../../img/btc-token-icon.svg";
import ethtokenicon from "../../img/eth-token-icon.svg";
import usdctokenicon from "../../img/usdc-token-icon.svg";
import usdttokenicon from "../../img/usdt-token-icon.svg";
import roadmap from "../../img/updatedQ3_Roadmap.svg";
import React, { useState, useEffect, useRef, useCallback } from "react";
import walletmoneyicon from "../../img/wallet-money-icon.svg";
import drophumidityicon from "../../img/drop-humidity-icon.svg";
import propertymortgageicon from "../../img/property-mortgage-icon.svg";
import Group from "../../img/Group.svg";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./PreFooter.css";
import { isValidEmail } from "../../utils/emailValidation";

export function PreFooter() {
  const [email, setEmail] = useState("");

  const notifySuccess = (message) =>
    toast.success(message, {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      theme: "dark",
    });

  const notifyError = (message) =>
    toast.error(message, {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      theme: "dark",
    });

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    subscribeEmail();
  };

  const getServerBaseUrl = () => {
    if (process.env.REACT_APP_BACKEND_URL) {
      return process.env.REACT_APP_BACKEND_URL;
    }
  };

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const subscribeEmail = useCallback(() => {
    const isValid = isValidEmail(email);

    if (isValid) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email || "" }),
      };

      fetch(`${getServerBaseUrl()}/emails/subscribe`, requestOptions)
        .then((response) => {
          if (!response.ok) {
            notifyError("Something went wrong!");
            // Something went wrong. Please try again
            return;
          }
          notifySuccess("Submited");
          // Email was subscribed successfully
          setEmail("");
        })
        .catch((err) => {
          notifyError("Something went wrong!");
          // Something went wrong. Please try again
          console.log(err);
        });
    } else {
      notifyError("Invalid Email");
      console.log("Invalid Email");
    }
  }, [email]);

  const scrollRef = useRef(null);

  useEffect(() => {
    const mouseEnterHandler = (e) => {
      let { width } = getCurrentDimension();
      if (scrollRef.current.contains(e.target)) {
        const container = scrollRef.current;
        container.scrollLeft = 1850 - width + 250;
        e.preventDefault();
      }
    };

    const mouseLeaveHandler = (e) => {
      let { width } = getCurrentDimension();
      if (scrollRef.current.contains(e.target)) {
        const container = scrollRef.current;
        container.scrollLeft = -(1850 - width + 250);
        e.preventDefault();
      }
    };
    const scrollElement = scrollRef.current;
    scrollElement.addEventListener("mouseenter", mouseEnterHandler);
    scrollElement.addEventListener("mouseleave", mouseLeaveHandler);

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("mouseenter", mouseEnterHandler);
        scrollElement.removeEventListener("mouseleave", mouseLeaveHandler);
      }
    };
  }, []);

  return (
    <div className="pre-footer-section">
      <div className="technical-analysis">
        <h2 className="title">DeFi </h2>
        <h2 className="title">Reimagined</h2>
      </div>

      <div className="token-list">
        <img src={btctokenicon} alt="btc token icon" />
        <img src={ethtokenicon} alt="eth token icon" />
        <img
          src={fxdxtokenicon}
          alt="fxdx token icon"
          className="fxdxtokenicon"
        />
        <img src={usdttokenicon} alt="usdt token icon" />
        <img src={usdctokenicon} alt="usdc token icon" />
      </div>

      <div className="feature-list">
        <div className="feature">
          <h3>
            <span>
              <img src={drophumidityicon} alt="Diversified Listings" />
              Diversified Listings.{" "}
            </span>
          </h3>
          Offering blue chip assets for our traders with deep liquidity.
        </div>

        <div className="feature">
          <h3>
            <span>
              <img src={propertymortgageicon} alt="Robust Risk Control" />
              Robust Risk Control.{" "}
            </span>
          </h3>
          Systematically managed on-chain fee model depending market conditions.
        </div>

        <div className="feature">
          <h3>
            <span>
              <img src={Group} alt="Powerful Oracle" />
              Powerful Oracle.{" "}
            </span>
          </h3>
          Built-in with battle tested outlier detection, our oracle delivers
          best possible pricing.
        </div>
        <div className="feature">
          <h3>
            <span>
              <img src={walletmoneyicon} alt="Multi-asset Structure" />
              Multi-asset Structure.{" "}
            </span>
          </h3>
          Allowing anyone to supply collateral or liquidity with any asset of
          their choice.
        </div>
      </div>

      <div className="new-user-reward">
        <h3 className="info-big">Stay Informed</h3>
        <h2 className="title-small">
          {" "}
          Keep up with FXDX & DeFi news and updates
        </h2>
      </div>

      <div className="new-user-reward-mobile">
        <h3 className="info-big">Stay Informed</h3>
        <h2 className="title-small">
          Keep up with FXDX & DeFi news and updates
        </h2>
      </div>

      <div className="email-subsciption">
        <input
          type="email"
          className="email-input"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => handleEmailChange(e)}
        />
        <button className="email-btn" onClick={(e) => handleSubmit(e)}>
          Get Started
        </button>
      </div>

      <div className="email-subsciption-mobile">
        <input
          type="email"
          className="email-input"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => handleEmailChange(e)}
        />
        <button className="email-btn" onClick={(e) => handleSubmit(e)}>
          Get Started
        </button>
      </div>

      <div className="roadmap-title">Roadmap</div>

      <div className="roadmap-caption">
        Building for an exceptional user experience, one step at a time.
      </div>

      <section className="scroll-roadmap-body section" ref={scrollRef}>
        <span className={`scroll-roadmap-image-container`}>
          <img src={roadmap} alt="roadmap" className="scroll-roadmap-image" />
        </span>
      </section>
    </div>
  );
}
