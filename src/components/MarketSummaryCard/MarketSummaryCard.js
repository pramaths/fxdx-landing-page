import React from "react";
import "./MarketSummaryCard.css";
import AreaGraph from "../AreaGraph/AreaGraph";
import {
  getClassColor,
  getPrimaryColor,
  getSign,
  insertCommas,
  roundToTwoDecimals,
} from "../MarketSummary/MarketSummary";
const MarketSummaryCard = ({ asset }) => {
  return (
    <div className="market-summary-card-wrapper">
      <div className="market-summary-card-row">
        <div className="market-summary-card-title">
          <div className="market-summary-card-title-top">
            <p className="asset-symbol">{asset.symbol}</p>
            <img src={asset.icon} alt={asset.name} className="asset-icon" />
          </div>
          <div className="market-summary-card-title-down">
            <p className="asset-name">{asset.name}</p>
          </div>
        </div>
        <div className="market-summary-graph">
          <AreaGraph
            price={asset.priceHistory1D}
            primaryColor={getPrimaryColor(asset.change24h)}
            width={130}
            height={40}
          />
        </div>
      </div>

      <div className="market-summary-card-row">
        <div className="market-summary-card-body-left">
          <div className="market-summary-card-body-top">
            <p className="asset-price-label">Price</p>
          </div>
          <div className="market-summary-card-body-down">
            <p className="asset-price">
              ${insertCommas(roundToTwoDecimals(asset.price))}
            </p>
          </div>
        </div>
        <div className="market-summary-card-body-right">
          <div className="market-summary-card-body-top">
            <p className="asset-change-label">24H%</p>
          </div>
          <div className="market-summary-card-body-down">
            <p className={`asset-change ${getClassColor(asset.change24h)}`}>
              {`${getSign(asset.change24h)}${roundToTwoDecimals(
                asset.change24h
              )}`}
              %
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSummaryCard;