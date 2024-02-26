import { useAtomValue } from "jotai";
import Header from "../../components/Header";
import { userAtom } from "../../atoms/user";
import { stocksAtom } from "../../atoms/stocks";

const Dashboard = () => {
  const user = useAtomValue(userAtom);
  const stocks = useAtomValue(stocksAtom);
  const hasStocks = Object.keys(user.stocks).length > 0;
  return (
    <main>
      <Header />
      <h1 className="text-3xl">Dashboard</h1>
      <p>Balance: ${user.amount}</p>
      {hasStocks && (
        <div className="flex mx-5 flex-wrap gap-5">
          {Object.entries(user.stocks).map(([ticker, amount]) => (
            <div className="border rounded-md border-cyan-300 px-5 py-2">
              <p>{ticker}</p>
              <p>
                Current: {user.stocks[ticker] ?? 0} {ticker} = $
                {(amount * stocks[ticker]?.value).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      )}
      {!hasStocks && <div>You do not own any stocks yet!</div>}
    </main>
  );
};

export default Dashboard;
