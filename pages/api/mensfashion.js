export default function handler(req, res) {
  res.status(200).json([
    { title: "Formals & Casuals", count: "50", slug: "mensfashion" },
    { title: "Sports Wear", count: "30", slug: "mensfashion" },
    { title: "Watched & Wallets", count: "40", slug: "mensfashion" },
  ]);
}
