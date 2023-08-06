import { useState } from "react";
import "./MarketSummary.css";
import { useEffect } from "react";
import MarketSummaryRow from "../MarketSummaryRow/MarketSummaryRow";
import MarketSummaryCard from "../MarketSummaryCard/MarketSummaryCard";
import { getTokens } from "../../Constants/Token";

export function insertCommas(dollarValue) {
  let valueString = dollarValue.toString();
  let [dollars, cents = ""] = valueString.split(".");

  dollars = dollars.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let result = cents ? dollars + "." + cents : dollars;
  return result;
}

export function roundToTwoDecimals(number) {
  return parseFloat(number).toFixed(2);
}

export function getClassColor(value) {
  return value < 0 ? "red-text" : "green-text";
}

export function getSign(value) {
  return value < 0 ? "" : "+";
}

export function getPrimaryColor(value) {
  if (value < 0) {
    return "#F93333";
  } else {
    return "#22C761";
  }
}

export function MarketSummary() {
  const [tokenData, settokenData] = useState([]);
  const mobileCards = ["BTC", "ETH"];
  async function fetchData() {
    const data = await getTokens();
    settokenData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    tokenData?.length > 0 && (
      <div className="market-summary-section">
        <h2 className="title">Market Summary</h2>

        <div className="market-summary-table">
          <div className="market-summary-table-title">
            <p>Assets</p>
            <p>Price</p>
            <p>1h%</p>
            <p>24h%</p>
            <p>Market Cap</p>
            <p>Last24h</p>
          </div>
          <div className="market-summary-row-wrapper">
            {tokenData?.map((token, index) => {
              return <MarketSummaryRow asset={token} key={index} />;
            })}
          </div>
        </div>

        <div className="market-summary-section-mobile">
          {tokenData
            ?.filter((token) => mobileCards.includes(token.symbol))
            ?.map((token, index) => (
              <MarketSummaryCard asset={token} key={index} />
            ))}
        </div>
        <a
          className="market-summary-redirect"
          href="https://app.fxdx.exchange/trade"
        >
          <button className="market-summary-btn">Trade Now</button>
        </a>
      </div>
    )
  );
}
