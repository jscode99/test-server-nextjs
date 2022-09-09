export default function handler(req, res) {
  res.status(200).json([
    { title: "Smart Tv & Android TV", count: "100", slug: "appliances" },
    { title: "Household Electronics", count: "20", slug: "appliances" },
    { title: "Electronics Spare Parts", count: "40", slug: "appliances" },
  ]);
}
