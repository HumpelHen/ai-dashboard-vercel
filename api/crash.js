export const config = { runtime: "nodejs" };

export default function handler(req, res) {
  const crash = Math.round((Math.random()*0.5 + Math.random()*0.3 + Math.random()*0.2) * 100);
  res.status(200).json({ crashProbability: crash });
}
