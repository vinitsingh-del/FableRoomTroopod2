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
  initParallax();
  initVengeanceEffects();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function renderMerch() {
  app.innerHTML = `
    <article class="visual-page">
      <section class="palette-hero">
        <div class="palette-stage">
          <figure class="stage-main parallax-frame" data-parallax>
            <img src="${A("hero-dining.jpg")}" alt="Fableroom tableware styled in a home." />
          </figure>
          <nav class="palette-nav fx-spotlight">
            <a href="#/serveware">Serveware</a>
            <a href="#/cookware">Cookware</a>
            <a href="#/table-linen">Table Linen</a>
            <a href="#/all">View All</a>
          </nav>
          <div class="stage-title">
            <span>Tableware & Kitchen</span>
            <h1 class="hero-sequence" aria-label="Cook. Serve. Layer.">
              <span style="--word-i:0">Cook.</span>
              <span style="--word-i:1">Serve.</span>
              <span style="--word-i:2">Layer.</span>
            </h1>
            <p>Serveware, cookware and table linen styled as one complete home table.</p>
            <a class="button" href="#/all">View All</a>
          </div>
          <figure class="stage-product table-showcase designed-table shelf-showcase" aria-label="Styled tableware shelf showcase">
            <img class="real-table-base shelf-zoom-image" src="${A("hero-tableware-shelf.png")}" alt="Fableroom tableware arranged on a kitchen shelf" />
          </figure>
        </div>
      </section>

      <section class="visual-section reveal-block">
        <div class="room-cards">
          ${categoryTiles.map(renderCategoryTile).join("")}
        </div>
      </section>

      <section class="room-board reveal-block">
        <a class="room-panel tall fx-card" href="#/serveware">
          <img src="${A("cat-dinnerware.jpg")}" alt="Dining room table setting" />
          <span>Dining Room</span>
          <strong>Serveware</strong>
        </a>
        <a class="room-panel fx-card" href="#/cookware">
          <img src="${A("cookware-dutch.jpg")}" alt="Cookware" />
          <span>Kitchen</span>
          <strong>Cookware</strong>
        </a>
        <a class="room-panel fx-card" href="#/table-linen">
          <img src="${A("linen-rivello.png")}" alt="Table linen in a home" />
          <span>Table</span>
          <strong>Linen</strong>
        </a>
      </section>

      <section class="visual-section reveal-block">
        <div class="visual-head">
          <span>Featured Setting</span>
          <a href="#/serveware">Shop Serveware</a>
        </div>
        <div class="product-rail">${productsByTitle(merchRails.table).map(renderMiniProduct).join("")}</div>
      </section>

      <section class="split-visual reveal-block">
        <figure class="parallax-frame" data-parallax><img src="${A("hero-close.jpg")}" alt="Blue and white porcelain on table" /></figure>
        <figure class="parallax-frame" data-parallax><img src="${A("cat-drinkware.jpg")}" alt="Drinkware styled in home" /></figure>
      </section>

      <div class="sticky-shop" aria-label="Mobile shopping actions">
        <a href="#/all">View all</a>
        <a href="#/serveware">Serveware</a>
        <a href="#/table-linen">Linen</a>
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
  app.innerHTML = `
    <article>
      <section class="collection-hero room-collection">
        <div class="collection-copy">
          <div class="breadcrumbs">Home / Tableware & Kitchen / ${collection.title}</div>
          <span class="eyebrow">${collection.room}</span>
          <h1>${collection.title}</h1>
          <span class="meta">${collection.count} products · ${collection.path}</span>
          <p class="lede">${collection.intro}</p>
          <div class="collection-ctas">
            <a class="button" href="#/all">View all</a>
            <a class="button secondary" href="#/merch">Back to rooms</a>
          </div>
        </div>
        <figure class="collection-image parallax-frame" data-parallax><img src="${collection.image}" alt="${collection.title} collection image" /></figure>
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
function updateParallax() {
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

function initVengeanceEffects() {
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
  const items = document.querySelectorAll(".reveal-block, .reveal-item, .product-card, .mini-product, .room-panel");
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

window.addEventListener("hashchange", render);
render();
