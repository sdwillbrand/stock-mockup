import { atom } from "jotai";
import stocks from "../../data/stocks.json";

interface User {
  amount: number;
  stocks: Record<string, number>;
}

export const userAtom = atom<User>({
  amount: 100_000,
  stocks: stocks.reduce((result, stock) => {
    result[stock.ticker] = 0;
    return result;
  }, {} as Record<string, number>),
});
