const A = (name) => `./assets/${name}`;

const routes = ["merch", "all", "serveware", "cookware", "table-linen"];

const categoryTiles = [
  {
    id: "serveware",
    title: "Serveware",
    count: "70+ SKUs",
    image: A("cat-serveware.jpg"),
    copy: "Dinner plates, side plates, bowls, cups, saucers and tea pieces for everyday hosting.",
  },
  {
    id: "cookware",
    title: "Cookware",
    count: "6 SKUs",
    image: A("cookware-dutch.jpg"),
    copy: "Tri-ply stainless steel essentials ready for launch once final client photography arrives.",
  },
  {
    id: "table-linen",
    title: "Table Linen",
    count: "36 products",
    image: A("linen-cotto.png"),
    copy: "Runners, placemats, napkins and coasters, moved under this category with the live URL intact.",
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

const launchStats = [
  ["New category", "Tableware & Kitchen"],
  ["70+ serveware SKUs", "Dinner plates, bowls, cups and tea pieces"],
  ["6 cookware SKUs", "Tri-ply essentials ready for launch"],
  ["Table linen moved", "Same URL, stronger navigation context"],
];

const launchLayers = [
  {
    title: "Cook",
    kicker: "The kitchen layer",
    image: A("hero-tableware-slide-2.png"),
    copy: "Tri-ply cookware anchors the prep ritual before the table is dressed.",
    cta: "Explore cookware",
    href: "#/cookware",
  },
  {
    title: "Serve",
    kicker: "The tableware layer",
    image: A("cat-dinnerware.jpg"),
    copy: "Dinner plates, bowls and tea pieces give the launch its product depth.",
    cta: "Explore serveware",
    href: "#/serveware",
  },
  {
    title: "Layer",
    kicker: "The linen layer",
    image: A("linen-rivello.png"),
    copy: "Runners and napkins finish the room, moving linen into the right buying journey.",
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
  ["C1", "Straight from the makers", "Premium pieces made with fewer markups."],
  ["C2", "Loved by 12,000+ homes", "A calm home-table edit for daily rituals and hosting."],
  ["C3", "Thoughtfully made", "Porcelain, stoneware, cotton, linen and tri-ply steel."],
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
  updateScrollProgress();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function renderMerch() {
  const featuredProducts = productsByTitle([
    "White Sparkle Dinner Plates (Set of 6)",
    "Zoraida Serving Bowl (Set of 2)",
    "Rainbow Gold Cup & Saucer (Set of 2)",
  ]);
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
          <a href="#/all">Shop now</a>
        </div>
      </section>

      <nav class="landing-pill-nav reveal-block" aria-label="Shop Tableware and Kitchen">
        <a href="#/serveware">Serveware</a>
        <a href="#/cookware">Cookware</a>
        <a href="#/table-linen">Table Linen</a>
        <a href="#/all">View All</a>
      </nav>

      <section class="launch-stat-strip reveal-block" aria-label="Launch highlights">
        ${launchStats.map(([stat, detail]) => `
          <div class="reveal-item">
            <strong>${stat}</strong>
            <span>${detail}</span>
          </div>
        `).join("")}
      </section>

      <section class="concept-products reveal-block" aria-labelledby="concept-products-title">
        <div class="concept-head reveal-block">
          <h2 id="concept-products-title" class="motion-text">Explore our newest collections</h2>
          <a href="#/all">View all products</a>
        </div>
        <div class="concept-circle-row">
          ${featuredProducts.map(renderConceptCircleProduct).join("")}
        </div>
      </section>

      <section class="concept-benefits reveal-block" aria-label="Fableroom benefits">
        ${brandBenefits.map(([code, title, copy]) => renderConceptBenefit(code, title, copy)).join("")}
      </section>

      <section class="launch-editorial reveal-block" aria-labelledby="launch-category-title">
        <div class="launch-copy-block reveal-block">
          <span>Shop by ritual</span>
          <h2 id="launch-category-title" class="motion-text">One launch for the whole table.</h2>
          <p>Move from prep to plating to the final linen layer without leaving the Tableware & Kitchen story.</p>
        </div>
        <div class="launch-category-grid">
          ${categoryTiles.map(renderLaunchCategory).join("")}
        </div>
      </section>

      <section class="launch-layers reveal-block" aria-labelledby="launch-layer-title">
        <div class="launch-section-head split reveal-block">
          <div>
            <span>Cook · Serve · Layer</span>
            <h2 id="launch-layer-title" class="motion-text">Build the table in three considered moves.</h2>
          </div>
          <a href="#/all">Shop all products</a>
        </div>
        <div class="launch-layer-grid">
          ${launchLayers.map(renderLaunchLayer).join("")}
        </div>
      </section>

      <section class="launch-scene reveal-block">
        <figure><img src="${A("ai-tableware-about-v2.png")}" alt="Styled Fableroom dining table with serveware, cookware and linen" loading="lazy" /></figure>
        <div class="reveal-block">
          <span>Why this launch works</span>
          <h2 class="motion-text">A cleaner buying journey for every home-table ritual.</h2>
          <p>Serveware leads the category depth, cookware gives the kitchen its essential prep layer, and table linen now sits where customers naturally expect it.</p>
          <div class="launch-proof-list" aria-label="Launch proof points">
            <span>Editorial-first merchandising page</span>
            <span>Subcategory tiles with clear shop paths</span>
            <span>Table Linen moved under Tableware & Kitchen</span>
          </div>
        </div>
      </section>

      <section class="launch-products reveal-block" aria-labelledby="launch-products-title">
        <div class="launch-section-head split reveal-block">
          <div>
            <span>The launch edit</span>
            <h2 id="launch-products-title" class="motion-text">A focused product strip, not a full PLP.</h2>
          </div>
          <a href="#/all">View all products</a>
        </div>
        <div class="launch-product-grid">
          ${launchProducts.map(renderLaunchProduct).join("")}
        </div>
      </section>

      <section class="concept-about reveal-block">
        <div class="concept-about-copy reveal-block">
          <span>About The Launch</span>
          <h2 class="motion-text">Everything the table needs, beautifully together.</h2>
          <p>Cookware for the recipe, serveware for the moment and linen for the final layer. Build a table that feels calm, complete and ready for guests.</p>
          <a href="#/serveware">Shop serveware</a>
        </div>
        <figure><img src="${A("ai-tableware-about-v2.png")}" alt="Fableroom dining table styled with table linen and serveware" /></figure>
      </section>

      <section class="concept-campaign-strip reveal-block" aria-label="Current Fableroom campaign">
        <span>Thoughtfully made, fairly priced</span>
        <span>Straight from the makers</span>
        <span>Loved by 12,000+ homes</span>
      </section>

      <section class="concept-category-strip reveal-block">
        ${categoryTiles.map((tile) => `
          <a class="reveal-item" href="#/${tile.id}">
            <img src="${tile.image}" alt="${tile.title}" />
            <span>${tile.title}</span>
          </a>
        `).join("")}
      </section>

      <section class="launch-conversion reveal-block">
        <div>
          <span>Tableware & Kitchen</span>
          <h2 class="motion-text">Ready for cooking, hosting and setting the room.</h2>
          <p>Use the launch page as the customer-facing entry point. Keep collection PLPs for deeper product browsing.</p>
        </div>
        <a class="button" href="#/all">Shop the launch</a>
      </section>
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

function renderConceptBenefit(code, title, copy) {
  return `
    <div class="concept-benefit reveal-item">
      <span>${code}</span>
      <strong>${title}</strong>
      <small>${copy}</small>
    </div>
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
        <span>0${index + 1} · ${layer.kicker}</span>
        <strong>${layer.title}</strong>
        <p>${layer.copy}</p>
        <em>${layer.cta}</em>
      </div>
    </a>
  `;
}

function renderLaunchProduct(product) {
  const image = showcaseImages[product.sku] ? A(showcaseImages[product.sku]) : product.image;
  return `
    <a class="launch-product-card reveal-item" href="#/${product.category === "table-linen" ? "table-linen" : product.category}">
      <figure>
        <img src="${image}" alt="${product.title}" loading="lazy" />
      </figure>
      <div>
        <span>${product.badge}</span>
        <strong>${product.title}</strong>
        <small>${product.type} · £${product.price}</small>
      </div>
    </a>
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

window.addEventListener("hashchange", render);
render();
