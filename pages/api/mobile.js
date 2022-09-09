export default function handler(req, res) {
  res.status(200).json([
    { title: "All Mobile Phones", count: "20", slug: "mobile" },
    { title: "All Mobile Accessories", count: "15", slug: "mobile" },
    { title: "Cases Covers", count: "10", slug: "mobile" },
  ]);
}
