export default function handler(req, res) {
  res.status(200).json([
    { title: "Mobile cases", count: "20", slug: "mobcase" },
    { title: "Flip Cases", count: "15", slug: "flipcase" },
    { title: "Glass Cases", count: "10", slug: "glasscase" },
  ]);
}
