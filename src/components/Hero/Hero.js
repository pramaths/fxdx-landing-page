import "./Hero.css";
import { HiOutlineArrowRight } from "react-icons/hi";
import { AiFillThunderbolt } from "react-icons/ai";
import tradingpage from "../../img/hero-new.svg";
import tradingterminal from "../../img/mobile-hero-new.mp4";

export function Hero() {
  return (
    <div className="hero-section">
      <a
        className="introducution-wrapper"
        href="https://fxdxdex.medium.com/fxdx-liquidity-booster-season-1-maximizing-liquidity-for-optimal-rewards-24c0749a9eff"
      >
        <div className="introduction">
          <AiFillThunderbolt color="#288BFF" />
          <span>Our Liquidity Booster Event is Now Live!</span>
          <HiOutlineArrowRight color="#288BFF" />
        </div>
      </a>

      <div className="hero">
        <h1 className="trading">Trading</h1>
        <h1 className="supercharged">Supercharged</h1>
        <h1 className="supercharged small">Supercharged</h1>
      </div>

      <h2 className="hero-caption">
        Maximize Your Trading Profits in Cryptocurrency Futures with No Trading
        Fees, and Robust Oracle Pricing for a Legendary Trading Experience.
      </h2>

      <div className="links">
        <a target="_blank" rel="noreferrer" href="https://app.fxdx.exchange/">
          Launch App
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://fxdxdocs.gitbook.io/fxdx-knowledge-base/"
        >
          Docs
        </a>
      </div>

      <div className="trading-terminal">
        <img src={tradingpage} alt="trading terminal" />
      </div>

      <div className="trading-terminal-phone">
        <video
          src={tradingterminal}
          alt="trading terminal"
          autoPlay
          muted
          loop
        />
      </div>
    </div>
  );
}
