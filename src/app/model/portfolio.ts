

export interface Portfolio {
  id: string;
  name: string;
  profit: number;
  tickers: StockTicker[];
}

export interface StockTicker {
  id: string;
  symbolName: string;
  sharesPurchased: number;
  dateOfPurchase: number;
  pricePaid: number;
}
