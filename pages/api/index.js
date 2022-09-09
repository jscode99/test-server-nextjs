export default function handler(req, res) {
  res.status(200).json([
    { title: "Mobiles, Computers", count: "30", slug: "mobile" },
    { title: "TV, Appliances, Electronics", count: "30", slug: "appliances" },
    { title: "Mens Fashion", count: "30", slug: "mensfashion" },
  ]);
}
