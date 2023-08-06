import tradingpage from "../../img/liquidity-page-img.svg";
import freeexit from "../../img/free-exit.svg";
import singlesidedliquidity from "../../img/single-sided-liquidity.svg";
import liquidityhistory from "../../img/liquidity-history.svg";
import rewardhistory from "../../img/reward-history.svg";
import stablerewards from "../../img/stable-rewards.svg";
import rewardredemption from "../../img/reward-redemption.svg";
import liquiditymanager from "../../img/liquidity-manager.png";
import claimreward from "../../img/claim-reward.gif";

import "./LiquidityExperience.css";

export function LiquidityExperience() {
  return (
    <div className="liquidity-section">
      <h2 className="title">Epic Liquidity Management Experience</h2>

      <div className="trading-terminal">
        <img src={tradingpage} alt="trading-page" />
      </div>

      <h3 className="caption">
        Built to capture deep liquidity using a one-sided model, our platform
        allows LPs to earn rewards in stablecoins that can be easily redeemed
        for other assets. Plus, tracking liquidity history is a breeze.
      </h3>

      <div className="feature-list">
        <div className="feature">
          <h3>
            <span>
              <img src={rewardredemption} alt=" Reward Redemption" />
              Reward Redemption.{" "}
            </span>{" "}
          </h3>
          Redeem rewards with any token of your choice.
        </div>

        <div className="feature">
          <h3>
            <span>
              <img src={stablerewards} alt="Stable Rewards" />
              Stable Rewards.{" "}
            </span>{" "}
          </h3>
          LP rewards are stored as stablecoins, hence risk-free returns.
        </div>

        <div className="feature">
          <h3>
            <span>
              <img src={rewardhistory} alt="Reward History" />
              Reward History.{" "}
            </span>{" "}
          </h3>
          Track your rewards distribution and claim history easily.
        </div>

        <div className="feature">
          <h3>
            <span>
              <img src={liquidityhistory} alt=" Liquidity History" />
              Liquidity History.{" "}
            </span>{" "}
          </h3>
          Use the Liquidity History to track your liquidity actions and evaluate
          your performance on the platform.
        </div>

        <div className="feature">
          <h3>
            <span>
              <img src={singlesidedliquidity} alt="Single sided liquidity" />
              Single sided liquidity.{" "}
            </span>
          </h3>
          Supply Liquidity to FLP pool with a single asset of your choice.
        </div>

        <div className="feature">
          <h3>
            <span>
              <img src={freeexit} alt="Free Exit" />
              Free Exit.{" "}
            </span>{" "}
          </h3>
          Users' liquidity is not locked, giving LPs freedom to enter exit
          anytime with asset of their choice.
        </div>
      </div>

      <div className="image-feature-list">
        <div className="image-feature">
          <h2 className="title">Multi-Asset Reward Redemption</h2>
          <h3 className="caption">
            LP can now redeem their rewards in any asset of their choice out of
            pool.
          </h3>

          <div className="image-center">
            <img src={claimreward} alt="position confirmation" />
          </div>
        </div>

        <div className="image-feature">
          <h2 className="title">Advanced Liquidity Management</h2>
          <h3 className="caption">
            Utilize our tracking tools to monitor your liquidity and evaluate
            its performance on the platform.
          </h3>

          <div className="image">
            <img src={liquiditymanager} alt="take profit" />
          </div>
        </div>
      </div>
    </div>
  );
}