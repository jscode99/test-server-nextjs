export default function handler(req, res) {
  console.log("Request", req.query.cate);
  switch (req.query.cate) {
    case "mobile":
      res.status(200).json([
        { title: "All Mobile Phones", count: "20", slug: "all" },
        { title: "All Mobile Accessories", count: "15", slug: "accessories" },
        { title: "Cases Covers", count: "10", slug: "case" },
      ]);
      break;
    case "appliances":
      res.status(200).json([
        { title: "Smart Tv & Android TV", count: "100", slug: "smarttv" },
        { title: "Household Electronics", count: "20", slug: "household" },
        { title: "Electronic Components", count: "40", slug: "spare" },
      ]);
      break;
    case "mensfashion":
      res.status(200).json([
        { title: "Formals & Casuals Shirts", count: "50", slug: "shirts" },
        { title: "Sports Wear", count: "30", slug: "sports" },
        { title: "Watched & Wallets", count: "40", slug: "watch" },
      ]);
      break;
    case "all":
      res.status(200).json([
        { title: "Smart Phones", count: "20", slug: "smartphone" },
        { title: "Basic Phones", count: "15", slug: "basicphone" },
        { title: "Android", count: "10", slug: "android" },
      ]);
      break;
    case "accessories":
      res.status(200).json([
        { title: "Mobile Accessories", count: "20", slug: "mobacc" },
        { title: "Computer Accessories", count: "15", slug: "compacc" },
        { title: "Electronics Accessories", count: "10", slug: "elecacc" },
      ]);
      break;
    case "case":
      res.status(200).json([
        { title: "Mobile cases", count: "20", slug: "mobcase" },
        { title: "Flip Cases", count: "15", slug: "flipcase" },
        { title: "Glass Cases", count: "10", slug: "glasscase" },
      ]);
      break;
    case "smartphone":
      res.status(200).json({});
      break;
    case "basicphone":
      res.status(200).json({});
      break;
    case "android":
      res.status(200).json({});
      break;
    case "mobacc":
      res.status(200).json({});
      break;
    case "compacc":
      res.status(200).json({});
      break;
    case "elecacc":
      res.status(200).json({});
      break;
    case "mobcase":
      res.status(200).json({});
      break;
    case "flipcase":
      res.status(200).json({});
      break;
    case "glasscase":
      res.status(200).json({});
      break;
    case "smarttv":
      res.status(200).json([
        { title: "Samsung Smart TV", count: "100", slug: "samsung" },
        { title: "Mi TV", count: "20", slug: "mi" },
        { title: "Realme TV", count: "40", slug: "realme" },
      ]);
      break;
    case "household":
      res.status(200).json([
        { title: "Microwave Owen", count: "10", slug: "owen" },
        { title: "Washing Machine", count: "23", slug: "wm" },
        { title: "Water Heater", count: "40", slug: "wh" },
      ]);
      break;
    case "spare":
      res.status(200).json([
        { title: "Transistors", count: "30", slug: "transistor" },
        { title: "Capacitors", count: "28", slug: "capacitors" },
        { title: "Resistors", count: "60", slug: "Resistors" },
      ]);
      break;
    case "samsung":
      res.status(200).json({});
      break;
    case "mi":
      res.status(200).json({});
      break;
    case "realme":
      res.status(200).json({});
      break;
    case "owen":
      res.status(200).json({});
      break;
    case "wm":
      res.status(200).json({});
      break;
    case "wh":
      res.status(200).json({});
      break;
    case "transistor":
      res.status(200).json({});
      break;
    case "capacitors":
      res.status(200).json({});
      break;
    case "Resistors":
      res.status(200).json({});
      break;
    case "shirts":
      res.status(200).json([
        { title: "OTTO Shirts", count: "50", slug: "otto" },
        { title: "U.S Polo", count: "30", slug: "polo" },
        { title: "Peter England", count: "40", slug: "peter" },
      ]);
      break;
    case "sports":
      res.status(200).json([
        { title: "Track Suits", count: "60", slug: "track" },
        { title: "Sports Shoes", count: "30", slug: "ss" },
        { title: "Sports Equipments", count: "50", slug: "se" },
      ]);
      break;
    case "watch":
      res.status(200).json([
        { title: "Rolex Watches", count: "10", slug: "rolex" },
        { title: "Casio", count: "60", slug: "casio" },
        { title: "Police", count: "20", slug: "police" },
      ]);
      break;
    case "otto":
      res.status(200).json({});
      break;
    case "polo":
      res.status(200).json({});
      break;
    case "peter":
      res.status(200).json({});
      break;
    case "track":
      res.status(200).json({});
      break;
    case "ss":
      res.status(200).json({});
      break;
    case "se":
      res.status(200).json({});
      break;
    case "rolex":
      res.status(200).json({});
      break;
    case "casio":
      res.status(200).json({});
      break;
    case "police":
      res.status(200).json({});
      break;
    default:
      res.status(200).json([
        { title: "Mobiles, Computers", count: "30", slug: "mobile" },
        {
          title: "TV, Appliances, Electronics",
          count: "30",
          slug: "appliances",
        },
        { title: "Mens Fashion", count: "30", slug: "mensfashion" },
      ]);
  }
}
