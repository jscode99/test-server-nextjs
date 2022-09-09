export default function handler(req, res) {
  res.status(200).json([
    { title: "Mobile Accessories", count: "20", slug: "mobacc" },
    { title: "Computer Accessories", count: "15", slug: "compacc" },
    { title: "Electronics Accessories", count: "10", slug: "elecacc" },
  ]);
}
