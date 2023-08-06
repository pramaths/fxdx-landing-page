import fxdxlogo from "../../img/fxdx-logo.svg";
import oplogo from "../../img/op-logo.svg";
import { SiTwitter, SiDiscord } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "./Header.css";
import { useState } from "react";

export function Header() {
  const [smallOpen, setsmallOpen] = useState(false);

  return (
    <div className="header">
      <div className="header-left">
        <span className="menu-button" onClick={() => setsmallOpen(!smallOpen)}>
          <AiOutlineMenu size={24} />
        </span>
        <div className="logo">
          <img src={fxdxlogo} alt="fxdx-logo" />
        </div>

        <div className="page-links">
          <p className="active">Home</p>
          <a target="_blank" rel="noreferrer" href="https://app.fxdx.exchange/">
            Mainnet
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://fxdxdocs.gitbook.io/fxdx-knowledge-base/"
          >
            Docs
          </a>
        </div>
      </div>

      <div className="header-right">
        <a
          className="socials"
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/fxdxdex"
        >
          <SiTwitter color="white" />
        </a>
        <a
          className="socials"
          target="_blank"
          rel="noreferrer"
          href="https://t.me/fxdxdex"
        >
          <FaTelegramPlane color="white" />
        </a>
        <a
          className="socials"
          target="_blank"
          rel="noreferrer"
          href="https://discord.gg/AdmFvVjfjh"
        >
          <SiDiscord color="white" />
        </a>

        {/* <div className="settings-icon">
                    <IoMdSettings />
                </div> */}

        <div className="launch-button">
          <a target="_blank" rel="noreferrer" href="https://app.fxdx.exchange/">
            Launch App
            <img src={oplogo} alt="op-logo" />
          </a>

          <a target="_blank" rel="noreferrer" href="https://app.fxdx.exchange/">
            Launch App
          </a>
        </div>
      </div>

      {smallOpen && (
        <div
          className="header-small"
          style={{ transform: "translateX(0%) translateZ(0px)" }}
        >
          <div className="logo">
            <img src={fxdxlogo} alt="fxdx-logo" />
            <AiOutlineClose
              color="white"
              onClick={() => setsmallOpen(false)}
              size={24}
            />
          </div>

          <div className="page-links">
            <p className="active">Home</p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://app.fxdx.exchange/"
            >
              Mainnet
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://fxdxdocs.gitbook.io/fxdx-knowledge-base/"
            >
              Docs
            </a>
          </div>

          <div className="socials-container">
            <a
              className="socials"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/fxdxdex"
            >
              <SiTwitter color="white" size={24} />
            </a>
            <a
              className="socials"
              target="_blank"
              rel="noreferrer"
              href="https://t.me/fxdxdex"
            >
              <FaTelegramPlane color="white" size={24} />
            </a>
            <a
              className="socials"
              target="_blank"
              rel="noreferrer"
              href="https://discord.gg/AdmFvVjfjh"
            >
              <SiDiscord color="white" size={24} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}