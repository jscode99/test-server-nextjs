export default function handler(req, res) {
  res.status(200).json([
    { title: "Smart Phones", count: "20", slug: "smartphone" },
    { title: "Basic Phones", count: "15", slug: "basicphone" },
    { title: "Android", count: "10", slug: "android" },
  ]);
}
