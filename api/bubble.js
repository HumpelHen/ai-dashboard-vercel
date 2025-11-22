export default function handler(req, res) {
  const bubbleIndex = Math.round((Math.random()*0.4 + Math.random()*0.4 + Math.random()*0.2) * 100);
  res.status(200).json({ bubbleIndex });
}
