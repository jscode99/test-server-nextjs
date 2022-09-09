export default function handler(req, res) {
  res.status(200).json([
    { title: "Samsung Smart TV", count: "100", slug: "samsung" },
    { title: "Mi TV", count: "20", slug: "mi" },
    { title: "Realme TV", count: "40", slug: "realme" },
  ]);
}
