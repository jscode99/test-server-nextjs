export default function handler(req, res) {
  res.status(200).json([
    { title: "Formals & Casuals Shirts", count: "50", slug: "shirts" },
    { title: "Sports Wear", count: "30", slug: "sports" },
    { title: "Watched & Wallets", count: "40", slug: "watch" },
  ]);
}
