(function () {
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

  const marketplaceLabel = {
    amazon: "Amazon",
    meesho: "Meesho",
    flipkart: "Flipkart",
    shopsy: "Shopsy",
    store: "Store"
  };

  const marketplaceIcon = {
    amazon: "A",
    meesho: "M",
    flipkart: "F",
    shopsy: "S",
    store: "↗"
  };

  function productCard(product) {
    const colors = product.colors.map(c => `<span>${c}</span>`).join("");
    const links = ["amazon", "meesho", "flipkart", "shopsy"].map(key => `
      <a class="market-link" href="${product.links[key]}" target="_blank" rel="noopener" aria-label="Buy ${product.name} on ${marketplaceLabel[key]}">
        <b>${marketplaceIcon[key]}</b>${marketplaceLabel[key]}
      </a>
    `).join("");

    return `
      <article class="product-card reveal" data-category="${product.category}">
        <a class="product-media" href="product.html?id=${product.id}" aria-label="View ${product.name}">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <span class="product-badge">${product.category}</span>
        </a>
        <div class="product-info">
          <div class="product-topline">
            <span>${product.rating} ★</span>
            <span>${product.fit}</span>
          </div>
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="color-row">${colors}</div>
          <div class="price-row">
            <strong>${product.price}</strong>
            <a href="product.html?id=${product.id}" class="text-link">View Details</a>
          </div>
          <div class="market-grid">${links}</div>
        </div>
      </article>
    `;
  }

  function renderProducts(selector, limit) {
    const target = $(selector);
    if (!target || !window.MARENZO_PRODUCTS) return;
    const list = typeof limit === "number" ? MARENZO_PRODUCTS.slice(0, limit) : MARENZO_PRODUCTS;
    target.innerHTML = list.map(productCard).join("");
  }

  function renderCollections() {
    const target = $("#collectionTrack");
    if (!target || !window.MARENZO_COLLECTIONS) return;
    target.innerHTML = MARENZO_COLLECTIONS.map((item, index) => `
      <a class="collection-card reveal" href="shop.html?category=${encodeURIComponent(item.title)}" style="--i:${index}">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <span class="collection-count">0${index + 1}</span>
        <div>
          <p>${item.note}</p>
          <h3>${item.title}</h3>
          <em>Explore Collection</em>
        </div>
      </a>
    `).join("");
  }

  function setupShopFilters() {
    const grid = $("#shopProductGrid");
    const filterWrap = $("#shopFilters");
    const search = $("#productSearch");
    if (!grid || !filterWrap) return;

    const categories = ["All", ...new Set(MARENZO_PRODUCTS.map(p => p.category))];
    filterWrap.innerHTML = categories.map((cat, i) => `<button class="filter-btn ${i === 0 ? 'active' : ''}" data-filter="${cat}">${cat}</button>`).join("");

    const urlCategory = new URLSearchParams(window.location.search).get("category");
    let activeCategory = urlCategory || "All";

    function draw() {
      const q = (search?.value || "").toLowerCase().trim();
      const filtered = MARENZO_PRODUCTS.filter(p => {
        const categoryOK = activeCategory === "All" || p.category === activeCategory;
        const textOK = !q || [p.name, p.category, p.description, p.fabric, p.fit].join(" ").toLowerCase().includes(q);
        return categoryOK && textOK;
      });
      grid.innerHTML = filtered.map(productCard).join("") || `<div class="empty-state">No MARENZO product found. Try another category.</div>`;
      setupReveal();
    }

    $$(".filter-btn", filterWrap).forEach(btn => {
      if (btn.dataset.filter === activeCategory) {
        $$(".filter-btn", filterWrap).forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      }
      btn.addEventListener("click", () => {
        activeCategory = btn.dataset.filter;
        $$(".filter-btn", filterWrap).forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        draw();
      });
    });
    search?.addEventListener("input", draw);
    draw();
  }

  function renderProductDetail() {
    const target = $("#productDetail");
    if (!target) return;
    const id = new URLSearchParams(window.location.search).get("id") || MARENZO_PRODUCTS[0].id;
    const product = MARENZO_PRODUCTS.find(p => p.id === id) || MARENZO_PRODUCTS[0];

    const chips = items => items.map(item => `<span class="chip">${item}</span>`).join("");
    const marketButtons = ["amazon", "meesho", "flipkart", "shopsy", "store"].map(key => `
      <a class="button ${key === 'amazon' ? 'button-primary' : 'button-soft'}" href="${product.links[key]}" target="_blank" rel="noopener">
        Buy on ${marketplaceLabel[key]}
      </a>
    `).join("");

    document.title = `${product.name} | MARENZO`;
    target.innerHTML = `
      <div class="detail-gallery reveal">
        <div class="main-product-shot"><img src="${product.image}" alt="${product.name}"></div>
        <div class="mini-shot"><img src="${product.videoPoster}" alt="${product.name} styling video poster"></div>
        <div class="video-shell mini-shot">
          <video muted loop playsinline poster="${product.videoPoster}">
            <source src="assets/videos/${product.id}.mp4" type="video/mp4">
          </video>
          <button class="play-chip" type="button">Product Video</button>
        </div>
      </div>
      <div class="detail-info reveal">
        <p class="eyebrow">${product.category}</p>
        <h1>${product.name}</h1>
        <p class="detail-desc">${product.description}</p>
        <div class="detail-price"><strong>${product.price}</strong><span>${product.rating} ★ customer rating</span></div>
        <div class="detail-block"><h3>Fabric</h3><p>${product.fabric}</p></div>
        <div class="detail-block"><h3>Fit Type</h3><p>${product.fit}</p></div>
        <div class="detail-block"><h3>Available Sizes</h3><div class="chip-row">${chips(product.sizes)}</div></div>
        <div class="detail-block"><h3>Available Colors</h3><div class="chip-row">${chips(product.colors)}</div></div>
        <div class="detail-block"><h3>Care Instructions</h3><p>${product.care}</p></div>
        <div class="size-guide">
          <h3>Size Guide</h3>
          <table>
            <tr><th>Size</th><th>Chest</th><th>Length</th></tr>
            <tr><td>S</td><td>38 in</td><td>26 in</td></tr>
            <tr><td>M</td><td>40 in</td><td>27 in</td></tr>
            <tr><td>L</td><td>42 in</td><td>28 in</td></tr>
            <tr><td>XL</td><td>44 in</td><td>29 in</td></tr>
          </table>
        </div>
        <div class="detail-actions">${marketButtons}</div>
      </div>
    `;
  }

  function setupVideoInteractions() {
    $$(".video-shell").forEach(shell => {
      const video = $("video", shell);
      shell.addEventListener("mouseenter", () => video?.play?.().catch(() => {}));
      shell.addEventListener("mouseleave", () => video?.pause?.());
      $(".play-chip", shell)?.addEventListener("click", () => {
        if (!video) return;
        video.paused ? video.play().catch(() => {}) : video.pause();
      });
    });
  }

  function setupNav() {
    const nav = $(".site-nav");
    const toggle = $("#navToggle");
    const menu = $("#navMenu");
    const current = window.location.pathname.split('/').pop() || 'index.html';
    $$(".nav-link").forEach(link => {
      const href = link.getAttribute('href');
      if (href === current || (current === '' && href === 'index.html')) link.classList.add('active');
    });
    window.addEventListener("scroll", () => nav?.classList.toggle("scrolled", window.scrollY > 20), { passive: true });
    toggle?.addEventListener("click", () => {
      menu?.classList.toggle("open");
      toggle.classList.toggle("open");
    });
  }

  function setupReveal() {
    const items = $$(".reveal");
    if (!items.length) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    items.forEach(item => observer.observe(item));
  }

  function setupMagneticButtons() {
    $$(".button, .market-link").forEach(btn => {
      btn.addEventListener("mousemove", event => {
        const rect = btn.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
      });
      btn.addEventListener("mouseleave", () => btn.style.transform = "translate(0,0)");
    });
  }

  function setupContactForm() {
    const form = $("#contactForm");
    form?.addEventListener("submit", e => {
      e.preventDefault();
      const msg = $("#formMessage");
      if (msg) msg.textContent = "Thank you. Your message is ready for backend connection. Add your email API later.";
      form.reset();
    });
  }

  function setupFooterYear() {
    $$("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
  }

  function initLoader() {
    const loader = $(".page-loader");
    window.addEventListener("load", () => {
      setTimeout(() => loader?.classList.add("hide"), 250);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLoader();
    setupNav();
    renderCollections();
    renderProducts("#homeProductGrid", 6);
    renderProducts("#relatedProductGrid", 4);
    setupShopFilters();
    renderProductDetail();
    setupVideoInteractions();
    setupReveal();
    setupMagneticButtons();
    setupContactForm();
    setupFooterYear();
  });
})();
