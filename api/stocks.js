export const config = { runtime: "nodejs" };

export default async function handler(req, res) {
  const key = process.env.ALPHA_KEY;
  if (!key) return res.status(500).json({ error: "API key missing" });

  const symbols = ["NVDA","MSFT","GOOGL","META","AMZN","AMD","TSLA"];

  const fetches = symbols.map(sym => {
    const url = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + sym + "&apikey=" + key;
    return fetch(url).then(r => r.json());
  });

  const data = await Promise.all(fetches);
  const result = data.map((d, i) => ({
    symbol: symbols[i],
    price: d["Global Quote"]?.["05. price"] ?? null
  }));

  res.status(200).json(result);
}
