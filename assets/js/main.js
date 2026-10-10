"use strict";
document.documentElement.classList.add("js");
const toggle = document.querySelector(".nav-toggle");
const navigation = document.getElementById("navigation-links");
if (toggle && navigation) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    navigation.classList.toggle("is-open", open);
  });
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      toggle.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      toggle.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
      toggle.focus();
    }
  });
}
const search = document.getElementById("blog-search");
const cards = [...document.querySelectorAll("[data-post-card]")];
const tools = document.querySelector("[data-blog-tools]");
const noResults = document.querySelector(".no-results");
if (search && cards.length && tools && noResults) {
  tools.hidden = false;
  search.addEventListener("input", () => {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    for (const card of cards) {
      card.hidden = !card.dataset.search.toLocaleLowerCase().includes(query);
      if (!card.hidden) visible++;
    }
    noResults.hidden = visible > 0;
  });
}
