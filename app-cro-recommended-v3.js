const A = (name) => `./assets/${name}`;

const routes = ["merch", "all", "serveware", "cookware", "table-linen"];

const iconPaths = {
  serveware: '<path d="M7 9h10"/><path d="M8 9c.4 4.2 2.1 7 4 9 1.9-2 3.6-4.8 4-9"/><path d="M5 18h14"/>',
  cookware: '<path d="M7 10h10v5a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-5Z"/><path d="M9 10V7a3 3 0 0 1 6 0v3"/><path d="M17 12h3"/>',
  linen: '<path d="M7 5h10v14H7z"/><path d="M10 5v14"/><path d="M14 5v14"/><path d="M7 9h10"/>',
  all: '<path d="M5 5h6v6H5z"/><path d="M13 5h6v6h-6z"/><path d="M5 13h6v6H5z"/><path d="M13 13h6v6h-6z"/>',
  direct: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/><path d="M5 7v10"/>',
  homes: '<path d="m4 11 8-6 8 6"/><path d="M7 10v9h10v-9"/><path d="M10 19v-5h4v5"/>',
  made: '<path d="M12 3v18"/><path d="M6 7h12"/><path d="M8 7l-3 5h6L8 7Z"/><path d="M16 7l-3 5h6l-3-5Z"/>',
  complete: '<path d="M12 5v14"/><path d="M5 12h14"/><path d="M7 7l10 10"/><path d="m17 7-10 10"/>',
};

const iconSvg = (name) => `
  <svg class="icon-mark" viewBox="0 0 24 24" aria-hidden="true">
    ${iconPaths[name] || iconPaths.complete}
  </svg>
`;

const categoryNavItems = [
  ["serveware", "Serveware", "#/serveware"],
  ["cookware", "Cookware", "#/cookware"],
  ["linen", "Table Linen", "#/table-linen"],
  ["all", "View All", "#/all"],
];

const assuranceItems = [
  ["12,000+", "Happy Homes", 12000, "", "+"],
  ["£6M+", "Total Customer Savings", 6, "£", "M+"],
  ["100%", "Responsibly Sourced", 100, "", "%"],
  ["0", "Middlemen Markups", 0, "", ""],
];

const featuredInItems = [
  {
    name: "HouseBeautiful",
    date: "April 2026",
    image: A("press-housebeautiful-2026.png"),
  },
  {
    name: "Daily Mail",
    date: "March 2026",
    image: A("press-daily-mail-2026.png"),
  },
  {
    name: "Ideal Home",
    date: "Jan 2026",
    image: A("press-ideal-home-2026.png"),
  },
  {
    name: "House & Garden",
    date: "September 2025",
    image: A("press-house-garden-2025.png"),
  },
];

const categoryTiles = [
  {
    id: "serveware",
    title: "Serveware",
    count: "70+ pieces",
    image: A("ai-circle-serveware-20260706.png"),
    copy: "Dinner plates, side plates, bowls, cups, saucers and tea pieces for everyday hosting.",
  },
  {
    id: "cookware",
    title: "Cookware",
    count: "Everyday essentials",
    image: A("ai-circle-cookware-20260706.png"),
    copy: "Stainless steel pans and pots made for everyday cooking, slow simmering and easy hosting.",
  },
  {
    id: "table-linen",
    title: "Table Linen",
    count: "36 products",
    image: A("ai-circle-table-linen-20260706.png"),
    copy: "Runners, placemats, napkins and coasters that soften the table and finish the setting.",
  },
];

const browsePaths = [
  "Cup & Saucer",
  "Dinner Plates",
  "Serving Bowl",
  "Side Plates",
  "Tea Pot & Creamer",
  "Frying Pan",
  "Sauce Pan",
  "Dutch Oven",
  "Napkins",
  "Runners",
];

const merchRails = {
  table: [
    "Renata Dinner Plates (Set of 6)",
    "Zoraida Serving Bowl (Set of 2)",
    "Rainbow Gold Cup & Saucer (Set of 2)",
    "Pritha Digital Print Table Runner",
  ],
  hosting: [
    "Matt Grey Sky Tea Pot & Creamer",
    "Rustic Navy Serving Bowl (Set of 2)",
    "Arabella Merrow-Edge Napkins, Set of 6",
    "Auren Tri-Ply Stainless Steel Frying Pan, 24 cm",
  ],
};

const launchLayers = [
  {
    title: "Prep",
    kicker: "Cookware",
    image: A("ai-cook-layer-symmetric.png"),
    copy: "Begin with reliable cookware for weekday meals, slow dinners and everything that comes before the table is set.",
    cta: "Explore cookware",
    href: "#/cookware",
  },
  {
    title: "Set",
    kicker: "Serveware",
    image: A("ai-serve-layer-symmetric.png"),
    copy: "Bring out plates, bowls, cups and tea pieces that make everyday dining feel quietly considered.",
    cta: "Explore serveware",
    href: "#/serveware",
  },
  {
    title: "Finish",
    kicker: "Table Linen",
    image: A("ai-linen-layer-symmetric.png"),
    copy: "Finish the setting with runners, napkins and coasters that add softness, texture and a hosted feel.",
    cta: "Explore table linen",
    href: "#/table-linen",
  },
];

const conceptLifestyleImages = {
  "White Sparkle Dinner Plates (Set of 6)": A("lifestyle-white-sparkle-plates.png"),
  "Zoraida Serving Bowl (Set of 2)": A("lifestyle-zoraida-bowl.png"),
  "Rainbow Gold Cup & Saucer (Set of 2)": A("lifestyle-rainbow-cup-saucer.png"),
};

const launchProductTitles = [
  "White Sparkle Dinner Plates (Set of 6)",
  "Renata Dinner Plates (Set of 6)",
  "Zoraida Serving Bowl (Set of 2)",
  "Rainbow Gold Cup & Saucer (Set of 2)",
  "Matt Grey Sky Tea Pot & Creamer",
  "Auren Tri-Ply Stainless Steel Frying Pan, 24 cm",
  "Pritha Digital Print Table Runner",
  "Rivello European Linen Fringe Table Linen Set",
];

const brandBenefits = [
  ["direct", "Straight from the makers", "Fewer markups"],
  ["homes", "Loved by 12,000+ homes", "Daily hosting"],
  ["made", "Thoughtfully made", "Considered materials"],
];

const shopLookItems = [
  {
    label: "Dinner plates",
    title: "Renata Dinner Plates",
    href: "#/serveware",
    x: 31,
    y: 66,
  },
  {
    label: "Serving bowl",
    title: "Zoraida Serving Bowl",
    href: "#/serveware",
    x: 52,
    y: 47,
  },
  {
    label: "Table runner",
    title: "Pritha Table Runner",
    href: "#/table-linen",
    x: 67,
    y: 67,
  },
  {
    label: "Tea set",
    title: "Rainbow Gold Tea Pieces",
    href: "#/serveware",
    x: 42,
    y: 56,
  },
];

const categoryExplorer = {
  serveware: {
    title: "Serveware",
    tiles: [
      ["Cups & saucers", "Rainbow Gold Cup & Saucer (Set of 2)", A("lifestyle-rainbow-cup-saucer.png"), "#/serveware"],
      ["Dinner plates", "Renata Dinner Plates (Set of 6)", A("p-renata-dinner.jpg"), "#/serveware"],
      ["Serving bowls", "Zoraida Serving Bowl (Set of 2)", A("lifestyle-zoraida-bowl.png"), "#/serveware"],
      ["Side plates", "White Sparkle Side Plates (Set of 6)", A("p-white-side.jpg"), "#/serveware"],
      ["Teapots & creamers", "Matt Grey Sky Tea Pot & Creamer", A("p-grey-teapot.jpg"), "#/serveware"],
    ],
  },
  cookware: {
    title: "Cookware",
    tiles: [
      ["Frying pans", "Auren Tri-Ply Frying Pan", A("cookware-pan.jpg"), "#/cookware"],
      ["Sauce pans", "Solis Tri-Ply Sauce Pan", A("cookware-sauce.jpg"), "#/cookware"],
      ["Dutch ovens", "Verro Tri-Ply Dutch Oven", A("cookware-dutch.jpg"), "#/cookware"],
    ],
  },
  "table-linen": {
    title: "Table Linen",
    tiles: [
      ["Table runners", "Pritha Digital Print Table Runner", A("linen-pritha-runner.png"), "#/table-linen"],
      ["Napkins", "Arabella Merrow-Edge Napkins", A("linen-arabella.png"), "#/table-linen"],
      ["Coasters", "Hallie Merrow-Edge Coasters", A("linen-hallie.png"), "#/table-linen"],
      ["Linen sets", "Rivello European Linen Fringe Set", A("linen-rivello.png"), "#/table-linen"],
    ],
  },
};

const ritualProofItems = [
  ["serveware", "Daily dining"],
  ["cookware", "Weekday meals"],
  ["linen", "Finished setting"],
];

const customerReviews = [
  {
    icon: "direct",
    image: A("ai-tableware-about-v2.png"),
    title: "Great value without the markup",
    quote: "Customers call out quality pieces at a fair price point, with the direct-from-makers model making the value feel clear.",
    meta: "Fableroom Value",
  },
  {
    icon: "homes",
    image: A("hero-tableware-slide-2.png"),
    title: "Delivery that keeps customers updated",
    quote: "Many Fableroom shoppers mention quick delivery, clear courier updates and a smoother arrival experience.",
    meta: "Delivery Experience",
  },
  {
    icon: "made",
    image: A("launch-highlight-lifestyle.png"),
    title: "Service that feels responsive",
    quote: "Reviews often highlight helpful support, regular communication and a team that stays close to the order.",
    meta: "Customer Support",
  },
  {
    icon: "serveware",
    image: A("ai-tableware-hero-v2.png"),
    title: "Thoughtfully priced home pieces",
    quote: "The pricing story is simple: considered materials, fewer middlemen and pieces that feel more premium than expected.",
    meta: "Brand Promise",
  },
];

const heroVideoProducts = [
  ["p-white-dinner.jpg", "Dinner plates"],
  ["p-renata-dinner.jpg", "Dinner set"],
  ["p-rainbow-cup.jpg", "Cup and saucer"],
  ["p-grey-teapot.jpg", "Tea set"],
  ["linen-pritha-runner.png", "Table runner"],
  ["cookware-pan.jpg", "Cookware"],
];

const showcaseTitles = [
  "White Sparkle Dinner Plates (Set of 6)",
  "Crackled Blue Matt Dinner Plates (Set of 6)",
  "Renata Dinner Plates (Set of 6)",
  "Zoraida Dinner Plates (Set of 6)",
  "Rustic Navy Dinner Plates (Set of 6)",
  "15205 Dinner Plates (Set of 6)",
  "White Sparkle Side Plates (Set of 6)",
  "Renata Side Plates (Set of 6)",
  "Rainbow Gold Cup & Saucer (Set of 2)",
  "Matt Grey Sky Cup & Saucer (Set of 2)",
  "Copper Wash Cup & Saucer (Set of 2)",
  "Rainbow Gold Tea Pot & Creamer",
  "Matt Grey Sky Tea Pot & Creamer",
  "Zoraida Serving Bowl (Set of 2)",
  "Pritha Digital Print Table Runner",
  "Rivello European Linen Fringe Table Linen Set",
];

const showcaseImages = {
  FRHG00001A: "p-white-dinner.jpg",
  FRHG00004A: "p-crackled-dinner.jpg",
  FRHG00007A: "p-renata-dinner.jpg",
  FRHG00010A: "p-zoraida-dinner.jpg",
  FRHG00013A: "p-rustic-dinner.jpg",
  FRHG00016A: "p-15205-dinner.jpg",
  FRHG00002A: "p-white-side.jpg",
  FRHG00008A: "p-renata-side.jpg",
  FRHG00019A: "p-rainbow-cup.jpg",
  FRHG00021A: "p-matt-grey-cup.jpg",
  FRHG00023A: "p-copper-cup.jpg",
  FRHG00020A: "p-rainbow-teapot.jpg",
  FRHG00022A: "p-grey-teapot.jpg",
  FRHG00012A: "p-zoraida-bowl.jpg",
};

const servewareProducts = [
  p("FRHG00019A", "Rainbow Gold Cup & Saucer (Set of 2)", "Cup & Saucer", "Porcelain", "Ready to Ship", "cutouts/c-rainbow-cup.png", 68, "serveware"),
  p("FRHG00021A", "Matt Grey Sky Cup & Saucer (Set of 2)", "Cup & Saucer", "Porcelain", "Ready to Ship", "cutouts/c-matt-grey-cup.png", 62, "serveware"),
  p("FRHG00023A", "Copper Wash Cup & Saucer (Set of 2)", "Cup & Saucer", "Porcelain", "New Arrival", "cutouts/c-copper-cup.png", 64, "serveware"),
  p("FRHG00024A", "Renata Cup & Saucer (Set of 2)", "Cup & Saucer", "Porcelain", "New Arrival", "cutouts/c-renata-cup.png", 66, "serveware"),
  p("FRHG00001A", "White Sparkle Dinner Plates (Set of 6)", "Dinner Plates", "Porcelain", "Ready to Ship", "cutouts/c-white-dinner.png", 88, "serveware"),
  p("FRHG00004A", "Crackled Blue Matt Dinner Plates (Set of 6)", "Dinner Plates", "Porcelain", "Ready to Ship", "cutouts/c-crackled-dinner.png", 96, "serveware"),
  p("FRHG00007A", "Renata Dinner Plates (Set of 6)", "Dinner Plates", "Porcelain", "New Arrival", "cutouts/c-renata-dinner.png", 98, "serveware"),
  p("FRHG00010A", "Zoraida Dinner Plates (Set of 6)", "Dinner Plates", "Porcelain", "New Arrival", "cutouts/c-zoraida-dinner.png", 92, "serveware"),
  p("FRHG00013A", "Rustic Navy Dinner Plates (Set of 6)", "Dinner Plates", "Stoneware", "Ready to Ship", "cutouts/c-rustic-dinner.png", 92, "serveware"),
  p("FRHG00016A", "15205 Dinner Plates (Set of 6)", "Dinner Plates", "Porcelain", "Ready to Ship", "cutouts/c-15205-dinner.png", 104, "serveware"),
  p("FRHG00003A", "White Sparkle Serving Bowl (Set of 2)", "Serving Bowl", "Porcelain", "Ready to Ship", "p-white-bowl.jpg", 72, "serveware"),
  p("FRHG00006A", "Crackled Blue Matt Serving Bowl (Set of 2)", "Serving Bowl", "Porcelain", "Ready to Ship", "cutouts/c-crackled-bowl.png", 76, "serveware"),
  p("FRHG00009A", "Renata Serving Bowl (Set of 2)", "Serving Bowl", "Porcelain", "New Arrival", "cutouts/c-renata-bowl.png", 78, "serveware"),
  p("FRHG00012A", "Zoraida Serving Bowl (Set of 2)", "Serving Bowl", "Porcelain", "New Arrival", "cutouts/c-zoraida-bowl.png", 78, "serveware"),
  p("FRHG00015A", "Rustic Navy Serving Bowl (Set of 2)", "Serving Bowl", "Stoneware", "Ready to Ship", "cutouts/c-rustic-bowl.png", 76, "serveware"),
  p("FRHG00018A", "15205 Serving Bowl (Set of 2)", "Serving Bowl", "Porcelain", "Ready to Ship", "cutouts/c-15205-bowl.png", 82, "serveware"),
  p("FRHG00002A", "White Sparkle Side Plates (Set of 6)", "Side Plates", "Porcelain", "Ready to Ship", "cutouts/c-white-side.png", 64, "serveware"),
  p("FRHG00005A", "Crackled Blue Matt Side Plates (Set of 6)", "Side Plates", "Porcelain", "Ready to Ship", "cutouts/c-crackled-side.png", 68, "serveware"),
  p("FRHG00008A", "Renata Side Plates (Set of 6)", "Side Plates", "Porcelain", "New Arrival", "cutouts/c-renata-side.png", 70, "serveware"),
  p("FRHG00011A", "Zoraida Side Plates (Set of 6)", "Side Plates", "Porcelain", "New Arrival", "cutouts/c-zoraida-side.png", 70, "serveware"),
  p("FRHG00014A", "Rustic Navy Side Plates (Set of 6)", "Side Plates", "Stoneware", "Ready to Ship", "cutouts/c-rustic-side.png", 68, "serveware"),
  p("FRHG00017A", "15205 Side Plates (Set of 6)", "Side Plates", "Porcelain", "Ready to Ship", "cutouts/c-15205-side.png", 74, "serveware"),
  p("FRHG00020A", "Rainbow Gold Tea Pot & Creamer", "Tea Pot & Creamer", "Porcelain", "New Arrival", "cutouts/c-rainbow-teapot.png", 88, "serveware"),
  p("FRHG00022A", "Matt Grey Sky Tea Pot & Creamer", "Tea Pot & Creamer", "Porcelain", "New Arrival", "cutouts/c-grey-teapot.png", 84, "serveware"),
];

const cookwareProducts = [
  p("FRCW00001A", "Auren Tri-Ply Stainless Steel Frying Pan, 20 cm", "Frying Pan", "Tri-ply", "Image Pending", "cookware-pan.jpg", 74, "cookware"),
  p("FRCW00002A", "Auren Tri-Ply Stainless Steel Frying Pan, 24 cm", "Frying Pan", "Tri-ply", "Image Pending", "cookware-pan.jpg", 88, "cookware"),
  p("FRCW00003A", "Solis Tri-Ply Stainless Steel Sauce Pan, 17.5 cm", "Sauce Pan", "Tri-ply", "Image Pending", "cookware-sauce.jpg", 82, "cookware"),
  p("FRCW00004A", "Solis Tri-Ply Stainless Steel Sauce Pan, 20 cm", "Sauce Pan", "Tri-ply", "Image Pending", "cookware-sauce.jpg", 96, "cookware"),
  p("FRCW00005A", "Verro Tri-Ply Stainless Steel Dutch Oven, 20 cm", "Dutch Oven", "Tri-ply", "Image Pending", "cookware-dutch.jpg", 104, "cookware"),
  p("FRCW00006A", "Verro Tri-Ply Stainless Steel Dutch Oven, 24 cm", "Dutch Oven", "Tri-ply", "Image Pending", "cookware-dutch.jpg", 126, "cookware"),
];

const linenProducts = [
  p("TL001", "Cotto Organic Slub Cotton Table Linen Set", "Table Linen", "Cotton", "New Arrival", "linen-cotto.png", 67, "table-linen"),
  p("TL002", "Hallie Merrow-Edge Coasters, Set of 6", "Coasters", "Cotton", "Ready to Ship", "linen-hallie.png", 35, "table-linen"),
  p("TL003", "Pritha Digital Print Table Runner", "Runner", "Cotton", "Ready to Ship", "linen-pritha-runner.png", 55, "table-linen"),
  p("TL004", "Sorelli Pure Linen Table Linen", "Table Linen", "Linen", "New Arrival", "linen-sorelli.png", 126, "table-linen"),
  p("TL005", "Rivello European Linen Fringe Table Linen Set", "Table Linen", "Linen", "New Arrival", "linen-rivello.png", 103, "table-linen"),
  p("TL006", "Joey Merrow-Edge Napkin, Set of 6", "Napkins", "Cotton", "Ready to Ship", "linen-joey.png", 44, "table-linen"),
  p("TL007", "Lunaro Pure Linen Table Linen", "Table Linen", "Linen", "New Arrival", "linen-lunaro.png", 126, "table-linen"),
  p("TL008", "Averra Cotton Table Linen", "Table Linen", "Cotton", "New Arrival", "linen-averra.png", 59, "table-linen"),
  p("TL009", "Arabella Merrow-Edge Napkins, Set of 6", "Napkins", "Cotton", "Ready to Ship", "linen-arabella.png", 43, "table-linen"),
];

const allMerchProducts = [...servewareProducts, ...cookwareProducts, ...linenProducts];

const guideGroups = [
  {
    title: "Serveware",
    links: ["Cup & Saucer", "Dinner Plates", "Serving Bowl", "Side Plates", "Tea Pot & Creamer"],
  },
  {
    title: "Cookware",
    links: ["Frying Pan", "Sauce Pan", "Dutch Oven", "Tri-ply"],
  },
  {
    title: "Table Linen",
    links: ["Table Linen", "Runner", "Napkins", "Coasters", "Cotton", "Linen"],
  },
];

const collections = {
  all: {
    title: "All Tableware & Kitchen",
    room: "The Home Edit",
    count: servewareProducts.length + cookwareProducts.length + linenProducts.length,
    path: "/collections/all-tableware-kitchen-collection",
    intro: "A complete home-table edit across serving, cooking and linen layers. Browse by room, ritual or product type.",
    image: A("hero-dining.jpg"),
    products: [...servewareProducts, ...cookwareProducts, ...linenProducts],
    filters: ["All", "Serveware", "Cookware", "Table Linen", ...browsePaths, "Porcelain", "Cotton", "Linen", "Tri-ply"],
  },
  serveware: {
    title: "Serveware",
    room: "The Dining Room",
    count: "70+",
    path: "/collections/serveware",
    intro: "Plates, bowls, cups and tea pieces arranged for daily meals, casual hosting and considered table settings.",
    image: A("cat-dinnerware.jpg"),
    products: servewareProducts,
    filters: ["All", "Cup & Saucer", "Dinner Plates", "Serving Bowl", "Side Plates", "Tea Pot & Creamer", "Porcelain", "Stoneware"],
  },
  cookware: {
    title: "Cookware",
    room: "The Kitchen",
    count: cookwareProducts.length,
    path: "/collections/cookware",
    intro: "A focused tri-ply stainless steel range for slower cooking, everyday rituals and pieces that stay on the hob.",
    image: A("cookware-dutch.jpg"),
    products: cookwareProducts,
    filters: ["All", "Frying Pan", "Sauce Pan", "Dutch Oven", "Tri-ply", "Image Pending"],
  },
  "table-linen": {
    title: "Table Linen",
    room: "The Linen Layer",
    count: 36,
    path: "/collections/table-linen",
    intro: "Runners, napkins, coasters and cloths that soften the table and finish the room.",
    image: A("linen-rivello.png"),
    products: linenProducts,
    filters: ["All", "Table Linen", "Runner", "Coasters", "Napkins", "Cotton", "Linen", "Ready to Ship", "New Arrival"],
  },
};

let activeFilter = "All";
let activeSort = "featured";

function p(sku, title, type, material, badge, image, price, category) {
  return { sku, title, type, material, badge, image: A(image), useImage: getUseImage(type, category), price, category };
}

function getUseImage(type, category) {
  if (category === "table-linen") return A("linen-rivello.png");
  if (category === "cookware") return A("hero-dining.jpg");
  if (type === "Cup & Saucer" || type === "Tea Pot & Creamer") return A("cat-drinkware.jpg");
  if (type === "Dinner Plates" || type === "Side Plates") return A("cat-dinnerware.jpg");
  if (type === "Serving Bowl") return A("cat-serveware.jpg");
  return A("hero-close.jpg");
}

function currentRoute() {
  const key = location.hash.replace("#/", "") || "merch";
  return routes.includes(key) ? key : "merch";
}

function render() {
  const key = currentRoute();
  activeFilter = "All";
  activeSort = "featured";
  document.querySelectorAll("[data-route]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.route === key);
  });
  document.querySelector(".primary-nav").classList.remove("is-open");
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
  key === "merch" ? renderMerch() : renderCollection(key);
  initMotionText();
  initParallax();
  initVengeanceEffects();
  initCategoryExplorer();
  updateScrollProgress();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function renderMerch() {
  const launchProducts = productsByTitle(launchProductTitles);
  app.innerHTML = `
    <article class="concept-page launch-page">
      <section class="concept-hero" aria-labelledby="concept-title">
        <figure class="concept-hero-media" data-parallax>
          <img src="${A("ai-tableware-hero-v2.png")}" alt="Fableroom tableware, cookware and linen styled in a bright home kitchen" />
        </figure>
        <div class="concept-hero-copy reveal-block">
          <span>New · Tableware & Kitchen</span>
          <h1 id="concept-title" class="motion-text">Set the table for every kind of gathering.</h1>
        </div>
      </section>

      <nav class="landing-pill-nav reveal-block" aria-label="Shop Tableware and Kitchen">
        ${categoryNavItems.map(renderLandingNavItem).join("")}
      </nav>

      <section id="launch-edit" class="launch-layers reveal-block" aria-labelledby="launch-layer-title">
        <div class="launch-ritual-panel">
        <div class="launch-section-head split reveal-block">
          <div>
            <span>Most loved collection</span>
            <h2 id="launch-layer-title" class="motion-text">Tableware and kitchen.</h2>
          </div>
          <a href="#/all">Shop the collection</a>
        </div>
        <div class="launch-layer-grid" aria-label="Cook Serve Layer editorial collection">
          <article class="launch-layer-card launch-layer-video reveal-item">
            <video src="${A("ritual-edit-video-v2.mp4")}" poster="${A("ai-tableware-about-v2.png")}" autoplay muted loop playsinline preload="metadata"></video>
            <div>
              <strong>Cook. Serve. Layer.</strong>
              <a href="#/all">Shop the collection</a>
            </div>
          </article>
          ${launchLayers.map(renderLaunchLayer).join("")}
        </div>
        </div>
      </section>

      <section class="launch-highlight shop-look reveal-block" aria-label="Shop the look">
        <figure class="shop-look-figure">
          <img src="${A("launch-highlight-lifestyle.png")}" alt="Fableroom tableware, cookware and linen styled together" loading="lazy" />
          ${shopLookItems.map(renderShopLookHotspot).join("")}
        </figure>
        <div class="launch-highlight-copy">
          <span>Shop the look</span>
          <h2 class="shop-look-title">Build the whole table<br />from one setting.</h2>
          <p>Tap each marker to move from inspiration to the exact tableware, linen and hosting pieces used in the room.</p>
          <div class="shop-look-usps" aria-label="Why shop this look">
            <span>Direct pricing</span>
            <span>Ready-to-host styling</span>
          </div>
        </div>
      </section>

      <section class="launch-assurance-bar reveal-block" aria-label="Why shop Fableroom Tableware and Kitchen">
        ${assuranceItems.map(renderAssuranceItem).join("")}
      </section>

      <section class="concept-products reveal-block" aria-labelledby="concept-products-title">
        <div class="concept-head reveal-block">
          <h2 id="concept-products-title" class="motion-text">Explore our newest collections</h2>
        </div>
        ${renderCategoryExplorer()}
      </section>

      <section class="launch-products reveal-block" aria-labelledby="launch-products-title">
        <div class="launch-section-head split reveal-block">
          <div>
            <span>The collection edit</span>
            <h2 id="launch-products-title" class="motion-text">Pieces to start with, style with and gift.</h2>
          </div>
          <a href="#/all">View all products</a>
        </div>
        <div class="launch-product-grid launch-product-carousel" aria-label="Curated tableware and kitchen products">
          ${launchProducts.map(renderLaunchProduct).join("")}
        </div>
      </section>

      <section class="launch-featured reveal-block" aria-labelledby="launch-featured-title">
        <div class="launch-featured-head">
          <span>As featured in</span>
          <h2 id="launch-featured-title" class="motion-text">Press stories from the Fableroom home.</h2>
        </div>
        <div class="launch-featured-rail" aria-label="Fableroom press features">
          ${featuredInItems.map(renderFeaturedPress).join("")}
        </div>
      </section>

      <section class="launch-reviews reveal-block" aria-labelledby="launch-reviews-title">
        <div class="launch-review-head">
          <div>
            <span class="review-kicker">Fableroom customer stories</span>
            <h2 id="launch-reviews-title" class="motion-text">Loved for value, delivery and service.</h2>
          </div>
        </div>
        <div class="review-marquee" aria-label="Customer reviews">
          <div class="review-scroll">
            ${customerReviews.map((review) => renderReviewCard(review)).join("")}
            ${customerReviews.map((review) => renderReviewCard(review, true)).join("")}
          </div>
        </div>
      </section>

      <section class="launch-scene campaign-scene reveal-block">
        <figure><img src="${A("ai-tableware-about-v2.png")}" alt="Fableroom summer sale table setting" loading="lazy" /></figure>
        <div class="reveal-block">
          <span>Summer Sale · Extra 10% Off</span>
          <h2 class="motion-text">Good rooms start with great pieces.</h2>
          <p>Explore tableware, cookware and linen with Fableroom's current savings story: thoughtful pieces, fair pricing and a complete home-table edit.</p>
          <div class="launch-proof-list" aria-label="Tableware and kitchen highlights">
            ${ritualProofItems.map(renderProofItem).join("")}
          </div>
        </div>
      </section>

      <section class="concept-campaign-strip reveal-block" aria-label="Current Fableroom campaign">
        <span>Thoughtfully made, fairly priced</span>
        <span>Straight from the makers</span>
        <span>Loved by 12,000+ homes</span>
      </section>

      <section class="launch-conversion reveal-block">
        <div>
        <span>Tableware & Kitchen</span>
          <h2 class="motion-text">Ready for cooking, hosting and setting the room.</h2>
          <p>Explore coordinated serveware, cookware and table linen for meals that feel calm, complete and ready to share.</p>
        </div>
        <a class="button" href="#/all">Shop the collection</a>
      </section>

      <div class="launch-sticky-actions" aria-label="Fableroom quick actions">
        <a class="sticky-furniture-link" href="https://fableroom.com/collections/dining-furniture" aria-label="Explore Fableroom furniture">
          <span class="sticky-f-mark" aria-hidden="true">F</span>
        </a>
        <a class="sticky-founder-link" href="https://fableroom.com/pages/contact" aria-label="Talk to founder">
          <svg class="sticky-phone-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.63a2 2 0 0 1-.45 2.11L8 9.71a16 16 0 0 0 6.29 6.29l1.25-1.25a2 2 0 0 1 2.11-.45c.85.27 1.73.47 2.63.59A2 2 0 0 1 22 16.9Z"/>
          </svg>
        </a>
      </div>
      <a class="mobile-sticky-cta" href="#/all" aria-label="Shop the Tableware and Kitchen collection">Shop the collection</a>
    </article>
  `;
}

function renderConceptCircleProduct(product) {
  const image = product.image;
  const lifestyleImage = conceptLifestyleImages[product.title] || image;
  return `
    <a class="concept-circle-card reveal-item" href="#/${product.category === "table-linen" ? "table-linen" : product.category}">
      <figure>
        <img class="concept-lifestyle-img" src="${lifestyleImage}" alt="${product.title} styled in a Fableroom home setting" loading="lazy" />
        <img class="concept-product-img" src="${image}" alt="${product.title}" loading="lazy" />
      </figure>
      <strong>${product.title.replace(" (Set of 6)", "").replace(" (Set of 2)", "")}</strong>
      <small>£${product.price}</small>
    </a>
  `;
}

function renderConceptCircleCategory(tile) {
  return `
    <a class="concept-circle-card concept-category-circle reveal-item" href="#/${tile.id}">
      <figure>
        <img class="concept-lifestyle-img" src="${tile.image}" alt="${tile.title} styled in a Fableroom home setting" loading="lazy" />
      </figure>
      <strong>${tile.title}</strong>
    </a>
  `;
}

function renderLandingNavItem([icon, title, href]) {
  return `
    <a href="${href}">
      ${iconSvg(icon)}
      <span>${title}</span>
      <small>${title === "View All" ? "Shop collection" : "Explore"}</small>
    </a>
  `;
}

function renderAssuranceItem([value, label, target, prefix, suffix]) {
  return `
    <div class="assurance-card reveal-item">
      <strong class="stat-count" data-target="${target}" data-prefix="${prefix}" data-suffix="${suffix}">${value}</strong>
      <span>${label}</span>
    </div>
  `;
}

function renderConceptBenefit(icon, title, copy) {
  return `
    <div class="concept-benefit reveal-item">
      <span>${iconSvg(icon)}</span>
      <strong>${title}</strong>
      <small>${copy}</small>
    </div>
  `;
}

function renderProofItem([icon, title]) {
  return `
    <span>
      ${iconSvg(icon)}
      <strong>${title}</strong>
    </span>
  `;
}

function renderReviewCard(review, isDuplicate = false) {
  return `
    <article class="review-card"${isDuplicate ? ' aria-hidden="true"' : ""}>
      <figure>
        <img src="${review.image}" alt="${review.meta} reviewed by a Fableroom customer" loading="lazy" />
        ${iconSvg(review.icon)}
      </figure>
      <div>
        <span aria-label="Five star review">★★★★★</span>
        <strong>${review.title}</strong>
        <p>${review.quote}</p>
        <small>${review.meta}</small>
      </div>
    </article>
  `;
}

function collectionHeroImage(collection) {
  if (collection.title === "Cookware") return A("ai-tableware-about-v2.png");
  if (collection.title === "Table Linen") return A("ai-tableware-hero-v2.png");
  return A("ai-tableware-hero-v2.png");
}

function collectionAboutImage(collection) {
  if (collection.title === "Cookware") return A("hero-tableware-shelf.png");
  if (collection.title === "Table Linen") return A("ai-tableware-about-v2.png");
  return A("ai-tableware-about-v2.png");
}

function renderFrCategory(tile) {
  return `
    <a class="fr-category reveal-item" href="#/${tile.id}">
      <figure><img src="${tile.image}" alt="${tile.title}" loading="lazy" /></figure>
      <div>
        <span>${tile.count}</span>
        <h3>${tile.title}</h3>
        <p>${tile.copy}</p>
      </div>
    </a>
  `;
}

function renderFrProduct(product) {
  const image = showcaseImages[product.sku] ? A(showcaseImages[product.sku]) : product.image;
  return `
    <a class="fr-product reveal-item" href="#/${product.category === "table-linen" ? "table-linen" : product.category}">
      <figure><img src="${image}" alt="${product.title}" loading="lazy" /></figure>
      <span>${product.type}</span>
      <strong>${product.title}</strong>
      <small>£${product.price}</small>
    </a>
  `;
}

function renderLaunchCategory(tile) {
  return `
    <a class="launch-category-card reveal-item" href="#/${tile.id}">
      <img src="${tile.image}" alt="${tile.title}" loading="lazy" />
      <div>
        <span>${tile.count}</span>
        <strong>${tile.title}</strong>
        <p>${tile.copy}</p>
      </div>
    </a>
  `;
}

function renderLaunchLayer(layer, index) {
  return `
    <a class="launch-layer-card reveal-item" href="${layer.href}">
      <figure><img src="${layer.image}" alt="${layer.title} layer" loading="lazy" /></figure>
      <div>
        <span>${layer.kicker}</span>
        <strong>${layer.title}</strong>
        <em>${layer.cta}</em>
      </div>
    </a>
  `;
}

function renderShopLookHotspot(item, index) {
  return `
    <a class="shop-look-dot" href="${item.href}" style="--dot-x:${item.x}%;--dot-y:${item.y}%;" aria-label="Shop ${item.title}">
      <span aria-hidden="true"></span>
      <strong>${item.label}</strong>
      <small>${item.title}</small>
    </a>
  `;
}

function renderCategoryExplorer() {
  const tabs = Object.entries(categoryExplorer).map(([id, group], index) => `
    <button class="category-tab${index === 0 ? " is-active" : ""}" type="button" data-category-tab="${id}" aria-pressed="${index === 0 ? "true" : "false"}">
      ${group.title}
    </button>
  `).join("");
  const panels = Object.entries(categoryExplorer).map(([id, group], index) => `
    <div class="category-panel${index === 0 ? " is-active" : ""}" data-category-panel="${id}" ${index === 0 ? "" : "hidden"}>
      ${group.tiles.map(([label, title, image, href]) => `
        <a class="subcategory-pill reveal-item" href="${href}">
          <figure><img src="${image}" alt="${title}" loading="lazy" /></figure>
          <span>${label}</span>
        </a>
      `).join("")}
    </div>
  `).join("");
  return `
    <div class="category-explorer" data-category-explorer>
      <div class="category-tabs" role="group" aria-label="Choose a collection">
        ${tabs}
      </div>
      ${panels}
    </div>
  `;
}

function renderLaunchProduct(product) {
  const image = showcaseImages[product.sku] ? A(showcaseImages[product.sku]) : product.image;
  const tags = product.category === "cookware"
    ? ["Ready to cook", "Tri-ply"]
    : product.category === "table-linen"
      ? ["Finishing layer", "Soft setting"]
      : ["Ready to host", "Fairly priced"];
  return `
    <a class="launch-product-card reveal-item" href="#/${product.category === "table-linen" ? "table-linen" : product.category}">
      <figure>
        <img src="${image}" alt="${product.title}" loading="lazy" />
      </figure>
      <div>
        <div class="launch-product-tags">${tags.map((tag) => `<em>${tag}</em>`).join("")}</div>
        <span>${product.badge}</span>
        <strong>${product.title}</strong>
        <small>${product.type} · £${product.price}</small>
      </div>
    </a>
  `;
}

function renderFeaturedPress(item) {
  return `
    <article class="launch-featured-card reveal-item">
      <figure>
        <img src="${item.image}" alt="${item.name} feature for Fableroom" loading="lazy" />
      </figure>
      <div>
        <strong>${item.name}</strong>
        <span>${item.date}</span>
      </div>
    </article>
  `;
}

function renderCategoryTile(tile) {
  return `
    <article class="subcategory-card fx-card reveal-item">
      <a class="tile-image" href="#/${tile.id}"><img src="${tile.image}" alt="${tile.title}" /></a>
      <div class="content">
        <span class="meta">${tile.count}</span>
        <h3>${tile.title}</h3>
        <p>${tile.copy}</p>
        <a class="text-link" href="#/${tile.id}">Shop ${tile.title}</a>
      </div>
    </article>
  `;
}

function renderCollection(key) {
  const collection = collections[key];
  const featuredProducts = collection.products.slice(0, 3);
  app.innerHTML = `
    <article class="concept-page collection-concept">
      <section class="concept-hero" aria-labelledby="collection-concept-title">
        <figure class="concept-hero-media" data-parallax>
          <img src="${collectionHeroImage(collection)}" alt="${collection.title} styled by Fableroom" />
        </figure>
        <div class="concept-hero-copy reveal-block">
          <span>${collection.room}</span>
          <h1 id="collection-concept-title" class="motion-text">${collection.title}</h1>
          <p>${collection.intro}</p>
          <a href="#/${key}" data-scroll-target="product-grid">Shop now</a>
        </div>
      </section>

      <section class="concept-products reveal-block" aria-labelledby="collection-new-title">
        <div class="concept-head reveal-block">
          <h2 id="collection-new-title" class="motion-text">Explore our newest collections</h2>
          <span>${collection.count} products</span>
        </div>
        <div class="concept-circle-row">
          ${featuredProducts.map(renderConceptCircleProduct).join("")}
        </div>
      </section>

      <section class="concept-benefits reveal-block" aria-label="${collection.title} benefits">
        ${brandBenefits.map(([code, title, copy]) => renderConceptBenefit(code, title, copy)).join("")}
      </section>

      <section class="concept-about reveal-block">
        <div class="concept-about-copy reveal-block">
          <span>About ${collection.title}</span>
          <h2 class="motion-text">${collection.title === "All Tableware & Kitchen" ? "A complete home-table edit." : `The ${collection.title.toLowerCase()} layer for a finished home table.`}</h2>
          <p>${collection.intro}</p>
          <a href="#/merch">Back to Tableware & Kitchen</a>
        </div>
        <figure><img src="${collectionAboutImage(collection)}" alt="${collection.title} collection detail" /></figure>
      </section>

      <section class="toolbar" aria-label="${collection.title} controls">
        <div class="filter-row">${collection.filters.map((filter) => `<button class="chip ${filter === "All" ? "is-active" : ""}" type="button" data-filter="${filter}">${filter}</button>`).join("")}</div>
        <div class="sort-row">
          <span id="result-count">${collection.products.length} results</span>
          <label>Sort by
            <select id="sort-select">
              <option value="featured">Featured</option>
              <option value="price-low">Price, low to high</option>
              <option value="price-high">Price, high to low</option>
              <option value="new">New Arrivals</option>
            </select>
          </label>
        </div>
      </section>
      <section class="product-grid" id="product-grid" aria-live="polite"></section>
    </article>
  `;

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("is-active", item === button));
      updateProducts(collection);
    });
  });
  document.querySelector("#sort-select").addEventListener("change", (event) => {
    activeSort = event.target.value;
    updateProducts(collection);
  });
  document.querySelector('[data-scroll-target="product-grid"]')?.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#product-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  updateProducts(collection);
}

function productsByTitle(titles) {
  return titles.map((title) => allMerchProducts.find((product) => product.title === title)).filter(Boolean);
}

function renderMiniProduct(product) {
  return `
    <a class="mini-product fx-card reveal-item" href="#/${product.category === "table-linen" ? "table-linen" : product.category}">
      <figure>
        <img class="mini-cutout" src="${product.image}" alt="${product.title}" loading="lazy" />
        <img class="mini-usecase" src="${product.useImage}" alt="${product.title} in a Fableroom home setting" loading="lazy" />
      </figure>
      <span>${product.type}</span>
      <strong>${product.title}</strong>
      <small>£${product.price}</small>
    </a>
  `;
}

function renderShowcaseProduct(product) {
  const image = showcaseImages[product.sku] ? A(showcaseImages[product.sku]) : product.image;
  return `
    <a class="showcase-card reveal-item" href="#/${product.category === "table-linen" ? "table-linen" : product.category}">
      <figure>
        <span class="showcase-badge">${product.badge}</span>
        <img src="${image}" alt="${product.title}" loading="lazy" />
      </figure>
      <div class="showcase-copy">
        <span>${product.type}</span>
        <strong>${product.title}</strong>
        <small>${product.material} · ${product.sku}</small>
        <div class="showcase-buy">
          <b>£${product.price}</b>
          <em>View product</em>
        </div>
      </div>
    </a>
  `;
}

function renderGuideGroup(group) {
  return `
    <section class="guide-group">
      <h3>${group.title}</h3>
      ${group.links.map((link) => `<a href="#/all">${link}</a>`).join("")}
    </section>
  `;
}

function updateProducts(collection) {
  let products = collection.products.filter((product) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Serveware") return product.category === "serveware";
    if (activeFilter === "Cookware") return product.category === "cookware";
    if (activeFilter === "Table Linen") return product.category === "table-linen" || product.type === "Table Linen";
    return [product.type, product.material, product.badge].includes(activeFilter);
  });

  products = [...products].sort((a, b) => {
    if (activeSort === "price-low") return a.price - b.price;
    if (activeSort === "price-high") return b.price - a.price;
    if (activeSort === "new") return Number(b.badge === "New Arrival") - Number(a.badge === "New Arrival");
    return 0;
  });

  document.querySelector("#result-count").textContent = `${products.length} result${products.length === 1 ? "" : "s"}`;
  document.querySelector("#product-grid").innerHTML = products.length
    ? products.map(renderProduct).join("")
    : `<div class="empty"><h3>No products found</h3><p>Try another filter.</p></div>`;
}

function renderProduct(product) {
  const badgeClass = product.badge.includes("Off") ? "sale" : product.badge.includes("Pending") ? "pending" : "";
  return `
    <article class="product-card fx-card reveal-item">
      <figure class="product-media">
        <span class="product-badge ${badgeClass}">${product.badge}</span>
        <img class="product-cutout" src="${product.image}" alt="${product.title}" loading="lazy" />
        <img class="product-usecase" src="${product.useImage}" alt="${product.title} shown in a home setting" loading="lazy" />
        <figcaption>View in a home setting</figcaption>
      </figure>
      <div class="product-info">
        <span class="product-type">${product.type} · ${product.material}</span>
        <strong class="product-title">${product.title}</strong>
        <div class="price-row"><strong>£${product.price}</strong><small>${product.sku}</small></div>
      </div>
    </article>
  `;
}

document.querySelector(".menu-toggle").addEventListener("click", (event) => {
  const nav = document.querySelector(".primary-nav");
  const isOpen = nav.classList.toggle("is-open");
  event.currentTarget.setAttribute("aria-expanded", String(isOpen));
});

let parallaxBound = false;
let scrollProgressBound = false;
let preloaderReady = false;

function updateParallax() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const frames = [...document.querySelectorAll("[data-parallax]")];
  frames.forEach((frame) => {
    const rect = frame.getBoundingClientRect();
    const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
    frame.style.setProperty("--parallax-y", `${Math.max(-18, Math.min(18, progress * -26))}px`);
  });
}

function initParallax() {
  updateParallax();
  if (!parallaxBound) {
    window.addEventListener("scroll", () => requestAnimationFrame(updateParallax), { passive: true });
    window.addEventListener("resize", updateParallax);
    parallaxBound = true;
  }
}

function updateScrollProgress() {
  const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  document.documentElement.style.setProperty("--scroll-progress", `${Math.min(1, Math.max(0, window.scrollY / max))}`);
}

function initScrollProgress() {
  updateScrollProgress();
  if (!scrollProgressBound) {
    window.addEventListener("scroll", () => requestAnimationFrame(updateScrollProgress), { passive: true });
    window.addEventListener("resize", updateScrollProgress);
    scrollProgressBound = true;
  }
}

function initVengeanceEffects() {
  initScrollProgress();
  initSpotlight();
  initReveal();
  initStatCounters();
}

function initPreloader() {
  if (preloaderReady) return;
  preloaderReady = true;
  const complete = () => document.body.classList.add("is-loaded");
  if (document.readyState === "complete") {
    window.setTimeout(complete, 420);
  } else {
    window.addEventListener("load", () => window.setTimeout(complete, 420), { once: true });
  }
  window.setTimeout(complete, 1800);
}

function initSpotlight() {
  document.querySelectorAll(".fx-spotlight, .site-header").forEach((node) => {
    if (node.dataset.spotlightReady) return;
    node.dataset.spotlightReady = "true";
    node.addEventListener("pointermove", (event) => {
      const rect = node.getBoundingClientRect();
      node.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
      node.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
      node.classList.add("is-lit");
    });
    node.addEventListener("pointerleave", () => node.classList.remove("is-lit"));
  });
}

function initReveal() {
  const items = document.querySelectorAll(".reveal-block, .reveal-item, .motion-text, .product-card, .mini-product, .room-panel");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  items.forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${Math.min(index % 8, 6) * 45}ms`);
    observer.observe(item);
  });
}

function initMotionText() {
  document.querySelectorAll(".motion-text").forEach((node) => {
    if (node.dataset.motionReady) return;
    const words = node.textContent.trim().split(/\s+/);
    node.dataset.motionReady = "true";
    node.setAttribute("aria-label", node.textContent.trim());
    node.innerHTML = words.map((word, index) => `<span aria-hidden="true" style="--word-delay:${index * 42}ms">${word}</span>`).join(" ");
  });
}

function initCategoryExplorer() {
  document.querySelectorAll("[data-category-explorer]").forEach((explorer) => {
    if (explorer.dataset.ready) return;
    explorer.dataset.ready = "true";
    const tabs = Array.from(explorer.querySelectorAll("[data-category-tab]"));
    const panels = Array.from(explorer.querySelectorAll("[data-category-panel]"));
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const id = tab.dataset.categoryTab;
        tabs.forEach((item) => {
          const active = item === tab;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-pressed", String(active));
        });
        panels.forEach((panel) => {
          const active = panel.dataset.categoryPanel === id;
          panel.classList.toggle("is-active", active);
          panel.hidden = !active;
        });
      });
    });
  });
}

function formatStatValue(value, prefix, suffix) {
  const formatted = value >= 1000 ? value.toLocaleString("en-GB") : String(value);
  return `${prefix}${formatted}${suffix}`;
}

function animateStat(node) {
  const target = Number(node.dataset.target || 0);
  const prefix = node.dataset.prefix || "";
  const suffix = node.dataset.suffix || "";
  const duration = target === 0 ? 520 : 1250;
  const start = performance.now();
  node.dataset.counting = "true";

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    node.textContent = formatStatValue(value, prefix, suffix);
    if (progress < 1) {
      requestAnimationFrame(tick);
      return;
    }
    node.textContent = formatStatValue(target, prefix, suffix);
    node.dataset.counting = "false";
  };

  requestAnimationFrame(tick);
}

function initStatCounters() {
  const counters = document.querySelectorAll(".stat-count");
  if (!counters.length) return;

  const reset = (node) => {
    const prefix = node.dataset.prefix || "";
    const suffix = node.dataset.suffix || "";
    node.textContent = formatStatValue(0, prefix, suffix);
  };

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animateStat);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const nodes = entry.target.querySelectorAll(".stat-count");
      if (entry.isIntersecting) {
        nodes.forEach((node) => {
          if (node.dataset.counting === "true") return;
          reset(node);
          animateStat(node);
        });
      } else {
        nodes.forEach(reset);
      }
    });
  }, { threshold: 0.45 });

  document.querySelectorAll(".launch-assurance-bar").forEach((bar) => observer.observe(bar));
}

window.addEventListener("hashchange", render);
initPreloader();
render();
