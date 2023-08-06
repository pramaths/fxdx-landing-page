import tradingpage from "../../img/trading-sec-img.svg";
import advorders from "../../img/adv-orders.svg";
import onchainengine from "../../img/onchain-engine.svg";
import robustoracle from "../../img/robust-oracle.svg";
import socialprofit from "../../img/social-profit.svg";
import lowfees from "../../img/low-fees.svg";
import multicollateral from "../../img/multi-collateral.svg";
import positionconfirmation from "../../img/position-confirmation.png";
import TP_SL from "../../img/tp-sl2.png";

import "./TradingExperience.css";

export function TradingExperience() {
  return (
    <div className="trader-section">
      <h2 className="title">Legendary Trading Experience</h2>

      <div className="trading-terminal">
        <img src={tradingpage} alt="trading-page" />
      </div>

      <h3 className="caption">
        Built for traders, our platform offers zero trading fees and low funding
        fees, advanced order management, and robust oracle pricing - all
        on-chain. Experience trading like a legend.
      </h3>

      <div className="feature-list">
        <div className="feature">
          <h3>
            <span>
              <img src={lowfees} alt="low fees" />
              Low funding Fees.{" "}
            </span>{" "}
          </h3>
          Charging the lowest funding fees to all position in loss irrespective
          of size and duration.
        </div>

        <div className="feature">
          <h3>
            <span>
              <img src={onchainengine} alt="onchain engine" />
              On-chain Engine.{" "}
            </span>{" "}
          </h3>
          Trade directly from your wallet on-chain securely.
        </div>

        <div className="feature">
          <h3>
            <span>
              <img src={multicollateral} alt="multi collateral" />
              Multi-Collateral.{" "}
            </span>{" "}
          </h3>
          Open position with any token of choice listed in the pool. as
          collateral.
        </div>

        <div className="feature">
          <h3>
            <span>
              <img src={robustoracle} alt="robust oracle" />
              Robust Oracle Pricing.{" "}
            </span>{" "}
          </h3>
          Built with powerful outlier detection mechanism for resilient pricing
          updates.
        </div>

        <div className="feature">
          <h3>
            <span>
              <img src={socialprofit} alt="social profit" />
              Socialized Profit Model.{" "}
            </span>{" "}
          </h3>
          Sharing profits with your counterparties, making them a winner,
          traders a hero.
        </div>

        <div className="feature">
          <h3>
            <span>
              <img src={advorders} alt="advanced orders" />
              Advanced Order Types.{" "}
            </span>{" "}
          </h3>
          Manage your positions and risks with limit, take-profit, and stop-loss
          order types.
        </div>
      </div>

      <div className="image-feature-list">
        <div className="image-feature">
          <h2 className="title">Zero trading fees</h2>
          <h3 className="caption">
            FXDX charges 0 trading fees to all traders, irrespective of size,
            asset or direction.
          </h3>

          <div className="image-center">
            <img src={positionconfirmation} alt="position confirmation" />
          </div>
        </div>

        <div className="image-feature">
          <h2 className="title">Superior trade management</h2>
          <h3 className="caption">
            Manage your positions and risks with limit, take-profit, and
            stop-loss order types. More order types to come by.
          </h3>

          <div className="image">
            <img src={TP_SL} alt="take profit" />
          </div>
        </div>
      </div>
    </div>
  );
}
