export default function handler(req, res) {
  const crashProbability = Math.round((Math.random()*0.5 + Math.random()*0.3 + Math.random()*0.2) * 100);
  return res.status(200).json({ crashProbability });
}
