

export const FetchData = async (symbol, interval) => {
   try {
    const response = await fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=500`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const FetchTradingTicker = async () => {
  try {
    const response = await fetch(
      `https://api.binance.com/api/v3/ticker/24hr`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const FetchTicker = async (symbol) => {
  try {
    const response = await fetch(
      `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

//fetching all the users repository using their username 
export const FetchRepo = async (user) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${user}/repos`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};