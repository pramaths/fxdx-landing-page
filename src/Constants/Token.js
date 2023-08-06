import btctokenicon from "../img/btc-icon-small.svg";
import ethtokenicon from "../img/eth-icon-small.svg";
import usdctokenicon from "../img/usdc-icon-small.svg";
import usdttokenicon from "../img/usdt-icon-small.svg";

function getCoinGeckoPricesStats() {
  const API_URL =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,usd-coin,tether&vs_currencies=usd&include_24hr_change=true&include_market_cap=true";
  return fetch(API_URL)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err.message);
    });
}

async function getCoinGeckoPriceHistory(asset) {
  const API_URL = `https://api.coingecko.com/api/v3/coins/${asset}/market_chart?vs_currency=usd&days=1`;
  try {
    let res = await fetch(API_URL);
    let resJson = await res.json();
    return resJson;
  } catch (e) {
    console.log(e);
  }
}
export function convertArrayToObject(arr) {
  return arr.map(([timestamp, price]) => ({
    timestamp,
    price,
  }));
}

function modifyPricesForGraph(priceArray, symbol) {
  if (symbol === "BTC" || symbol === "ETH") {
    let lowestPrice = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < priceArray.length; i++) {
      if (priceArray[i][1] < lowestPrice) {
        lowestPrice = priceArray[i][1];
      }
    }

    for (let i = 0; i < priceArray.length; i++) {
      priceArray[i][1] = priceArray[i][1] - lowestPrice;
    }
  }

  return convertArrayToObject(priceArray);
}

function get1hchange(priceArray) {
  const last1hrIndex = 60 / 5;
  const latestPrice = priceArray[priceArray.length - 1][1];
  let priceDifference1h = latestPrice - priceArray[last1hrIndex][1];
  let change1h = (priceDifference1h / latestPrice) * 100;
  return change1h;
}

export async function getTokens() {
  let priceStats = await getCoinGeckoPricesStats();
  let objectArray = Object.values(priceStats);
  for (let i = 0; i < tokenInfo.length; i++) {
    tokenInfo[i].price = objectArray[i].usd;
    tokenInfo[i].change24h = objectArray[i].usd_24h_change;
    tokenInfo[i].marketcap = objectArray[i].usd_market_cap;
    const response = await getCoinGeckoPriceHistory(tokenInfo[i].coinGeckoId);
    tokenInfo[i].priceHistory1D = response.prices;
    tokenInfo[i].change1h = get1hchange(tokenInfo[i].priceHistory1D);
    tokenInfo[i].priceHistory1D = modifyPricesForGraph(
      tokenInfo[i].priceHistory1D,
      tokenInfo[i].symbol
    );
  }
  return tokenInfo;
}
const tokenInfo = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: 0,
    change1h: 0,
    change24h: 0,
    marketcap: 0,
    icon: btctokenicon,
    coinGeckoId: "bitcoin",
    priceHistory1D: [],
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: 0,
    change1h: 0,
    change24h: 0,
    marketcap: 0,
    icon: ethtokenicon,
    coinGeckoId: "ethereum",
    priceHistory1D: [],
  },
  {
    name: "USD Coin",
    symbol: "USDC",
    price: 0,
    change1h: 0,
    change24h: 0,
    marketcap: 0,
    icon: usdctokenicon,
    coinGeckoId: "usd-coin",
    priceHistory1D: [],
  },
  {
    name: "Tether",
    symbol: "USDT",
    price: 0,
    change1h: 0,
    change24h: 0,
    marketcap: 0,
    icon: usdttokenicon,
    coinGeckoId: "tether",
    priceHistory1D: [],
  },
];
