import React from "react";
import "./MarketSummaryRow.css";
import AreaGraph from "../AreaGraph/AreaGraph";
import {
  getClassColor,
  getPrimaryColor,
  getSign,
  insertCommas,
  roundToTwoDecimals,
} from "../MarketSummary/MarketSummary";
const MarketSummaryRow = ({ asset }) => {
  return (
    <div className="market-summary-row">
      <div className="asset-title">
        <img src={asset.icon} alt="logo" className="asset-logo" />
        <p className="asset-name">{asset.name}</p>
        <p className="asset-symbol">{asset.symbol}</p>
      </div>

      <p className="asset-price">
        ${insertCommas(roundToTwoDecimals(asset.price))}
      </p>

      <p className={`asset-1hchange ${getClassColor(asset.change1h)}`}>
        {`${getSign(asset.change1h)} ${roundToTwoDecimals(asset.change1h)}`}%
      </p>
      <p className={`asset-24hchange  ${getClassColor(asset.change24h)}`}>
        {`${getSign(asset.change24h)} ${roundToTwoDecimals(asset.change24h)}`}%
      </p>
      <p className="asset-marketcap">
        ${insertCommas(roundToTwoDecimals(asset.marketcap))}
      </p>
      <div className="asset-graph">
        <AreaGraph
          price={asset.priceHistory1D}
          primaryColor={getPrimaryColor(asset.change24h)}
          width={150}
          height={40}
        />
      </div>
    </div>
  );
};

export default MarketSummaryRow;
