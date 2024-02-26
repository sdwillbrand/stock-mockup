import { useState } from "react";
import Header from "../../components/Header";
import stocksData from "../../../data/stocks.json";
import { useAtom } from "jotai";
import { stocksAtom } from "../../atoms/stocks";
import { useInterval } from "../../hooks/useInterval";
import { userAtom } from "../../atoms/user";

const Stocks = () => {
  const [selectedStock, setSelectedStock] = useState(stocksData[0].ticker);
  const [stocks, setStocks] = useAtom(stocksAtom);
  const [user, setUser] = useAtom(userAtom);
  const [amount, setAmount] = useState(0);

  function generateStockPrice(name: string) {
    const hash = name.split("").reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
    const amplitude = 100;
    const d = new Date();
    const n = d.getTime();
    return Math.abs(3 * Math.sin(2 * hash * n) + Math.random() * amplitude);
  }
  // Using a dynamic import to load the worker
  useInterval(() => {
    const nextStocks = { ...stocks };
    for (const stock of stocksData) {
      nextStocks[stock.ticker] = {
        date: new Date(),
        value: generateStockPrice(stock.name),
      };
    }
    setStocks(nextStocks);
  }, 3000);

  function handleBuy() {
    const stockPrice = stocks[selectedStock].value;
    const buyPrice = stockPrice * amount;
    if (buyPrice < user.amount) {
      user.amount -= buyPrice;
      if (!user.stocks[selectedStock]) user.stocks[selectedStock] = 0;
      user.stocks[selectedStock] += amount;
      setUser({ ...user });
    }
  }

  function handleSell() {
    const stockPrice = stocks[selectedStock].value;
    const sellPrice = stockPrice * amount;
    if (amount <= user.stocks[selectedStock]) {
      user.amount += sellPrice;
      user.stocks[selectedStock] -= amount;
      setUser({ ...user });
    }
  }

  return (
    <main>
      <Header />
      <div>
        <h1 className="text-3xl mb-10">Stocks</h1>
        <p>Balance: ${user.amount}</p>
        <select
          value={selectedStock}
          onChange={(e) => setSelectedStock(e.currentTarget.value)}
        >
          {stocksData.map((stock) => (
            <option key={stock.ticker} value={stock.ticker}>
              {stock.name}
            </option>
          ))}
        </select>
        <div>Current Price: ${stocks[selectedStock]?.value.toFixed(2)}</div>
        <div>
          <p>
            Current: {user.stocks[selectedStock] ?? 0} {selectedStock} = $
            {(user.stocks[selectedStock] ?? 0) * stocks[selectedStock]?.value}
          </p>
          <input
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.currentTarget.value))}
          />
          <button onClick={handleBuy}>Buy</button>
          <button onClick={handleSell}>Sell</button>
        </div>
      </div>
    </main>
  );
};

export default Stocks;
