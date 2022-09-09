export default function handler(req, res) {
  res.status(200).json([
    { title: "OTTO Shirts", count: "50", slug: "otto" },
    { title: "U.S Polo", count: "30", slug: "polo" },
    { title: "Peter England", count: "40", slug: "peter" },
  ]);
}
