export const config = {
  runtime: "nodejs20.x"
};

export default function handler(req, res) {
  const idx = Math.round((Math.random()*0.4 + Math.random()*0.4 + Math.random()*0.2) * 100);
  res.status(200).json({ bubbleIndex: idx });
}
