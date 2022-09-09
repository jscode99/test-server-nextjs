export default function handler(req, res) {
  res.status(200).json([
    { title: "Smart Tv & Android TV", count: "100", slug: "smarttv" },
    { title: "Household Electronics", count: "20", slug: "household" },
    { title: "Electronics Spare Parts", count: "40", slug: "spare" },
  ]);
}
