import { atom } from "jotai";
import stocks from "../../data/stocks.json";

export interface Snapshot {
  date: Date;
  value: number;
}

export const stocksAtom = atom<Record<string, Snapshot>>(
  stocks.reduce((result, stock) => {
    result[stock.ticker] = { value: 0, date: new Date() };
    return result;
  }, {} as Record<string, Snapshot>)
);
