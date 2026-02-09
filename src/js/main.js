import "../styles/main.scss";

const gamesData = [
  {
    id: 1,
    name: "Miss Cherry Fruits",
    provider: "Parrot`s Gold",
    image: "./src/assets/images/logo.png",
    category: "recent",
  },
  {
    id: 2,
    name: "Parrots Gold",
    provider: "Parrot`s Gold",
    image: "./src/assets/images/logo2.png",
    category: "recent",
  },
  {
    id: 3,
    name: "Duel at Dawn",
    provider: "Parrot`s Gold",
    image: "./src/assets/images/logo3.png",
    category: "recent",
  },
  {
    id: 4,
    name: "Mechanical Clover",
    provider: "Parrot`s Gold",
    image: "./src/assets/images/logo4.png",
    category: "recent",
  },
  {
    id: 5,
    name: "Wild Cash X9990",
    provider: "Parrot`s Gold",
    image: "./src/assets/images/logo5.png",
    category: "recent",
  },
  {
    id: 6,
    name: "Parrots Gold",
    provider: "Parrot`s Gold",
    image: "./src/assets/images/logo6.png",
    category: "top",
  },
  {
    id: 7,
    name: "Sugar Rush",
    provider: "Parrot`s Gold",
    image: "./src/assets/images/logo7.png",
    category: "top",
  },
  {
    id: 8,
    name: "Dice Bonanza",
    provider: "Parrot`s Gold",
    image: "./src/assets/images/logo8.png",
    category: "top",
  },
  {
    id: 9,
    name: "Money Tree",
    provider: "Parrot`s Gold",
    image: "./src/assets/images/logo9.png",
    category: "top",
  },
  {
    id: 10,
    name: "Alien Fruits",
    provider: "Parrot`s Gold",
    image: "./src/assets/images/logo10.png",
    category: "top",
  },
];

const carouselGames = [
  {
    id: 1,
    name: "Game name",
    money: "400$",
    user: "User***-",
    image: "./src/assets/images/Thumb.png",
  },
  {
    id: 2,
    name: "Game name",
    money: "400$",
    user: "User***-",
    image: "./src/assets/images/Thumb.png",
  },
  {
    id: 3,
    name: "Game name",
    money: "400$",
    user: "User***-",
    image: "./src/assets/images/Thumb.png",
  },
  {
    id: 4,
    name: "Game name",
    money: "400$",
    user: "User***-",
    image: "./src/assets/images/Thumb.png",
  },
  {
    id: 5,
    name: "Game name",
    money: "400$",
    user: "User***-",
    image: "./src/assets/images/Thumb.png",
  },
  {
    id: 6,
    name: "Game name",
    money: "400$",
    user: "User***-",
    image: "./src/assets/images/Thumb.png",
  },
  {
    id: 7,
    name: "Game name",
    money: "400$",
    user: "User***-",
    image: "./src/assets/images/Thumb.png",
  },
  {
    id: 8,
    name: "Game name",
    money: "400$",
    user: "User***-",
    image: "./src/assets/images/Thumb.png",
  },
];

let filteredGames = [...gamesData];
let currentTab = "recent";

function createCarouselItem(game) {
  return `
    <div class="carousel-item">
      <div class="carousel-item__image">
        <img src="${game.image}" alt="${game.name}">
      </div>
      <div class="carousel-item__info">
        <div class="carousel-item__name">${game.name}</div>
        <div class="carousel-item__money">${game.money}</div>
        <div class="carousel-item__user">${game.user}</div>
      </div>
    </div>
  `;
}

function createSearchGameCard(game) {
  return `
    <div class="search-game-card" data-game-id="${game.id}">
      <img src="${game.image}" alt="${game.name}" class="search-game-card__image">
      <div class="search-game-card__content">
        <div class="search-game-card__name">${game.name}</div>
        <div class="search-game-card__info">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5v14l11-7z" fill="currentColor"/>
          </svg>
          <span>${game.provider}</span>
        </div>
      </div>
    </div>
  `;
}

function createGameCard(game) {
  return `
    <div class="game-card" data-game-id="${
      game.id
    }" data-game-name="${game.name.toLowerCase()}">
      <img src="${game.image}" alt="${game.name}" class="game-card__image">
      <div class="game-card__overlay">
        <div class="game-card__buttons">
          <button class="game-card__button game-card__button--primary">Play</button>
          <button class="game-card__button">Demo</button>
        </div>
        <div class="game-card__info">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
          </svg>
          <span>${game.provider}</span>
        </div>
      </div>
    </div>
  `;
}

function renderCarousel() {
  const carouselContainer = document.getElementById("gamesCarousel");
  if (carouselContainer) {
    carouselContainer.innerHTML = carouselGames
      .map(createCarouselItem)
      .join("");
  }
}

function renderSearchResults(games) {
  const container = document.getElementById("searchResults");
  const titleElement = document.querySelector(".search-overlay__results-title");

  if (!container) return;

  if (games.length === 0) {
    container.innerHTML = '<div class="search-no-results">No games found</div>';
    if (titleElement) titleElement.style.display = "none";
    return;
  }

  if (titleElement) titleElement.style.display = "block";
  container.innerHTML = games.map(createSearchGameCard).join("");
}

function renderGames(games, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (games.length === 0) {
    container.innerHTML = '<div class="no-results">No games found</div>';
    return;
  }

  container.innerHTML = games.map(createGameCard).join("");
}

function filterGames(searchTerm) {
  const term = searchTerm.toLowerCase().trim();

  if (term === "") {
    filteredGames = [...gamesData];
  } else {
    filteredGames = gamesData.filter((game) =>
      game.name.toLowerCase().includes(term),
    );
  }

  updateGamesDisplay();
}

function updateGamesDisplay() {
  const recentGames = filteredGames.filter(
    (game) => game.category === "recent",
  );
  const topGames = filteredGames.filter((game) => game.category === "top");

  if (currentTab === "recent") {
    renderGames(recentGames, "recentGames");
  }

  renderGames(topGames, "topGames");
}

function initSearch() {
  const searchBtn = document.getElementById("searchBtn");
  const searchOverlay = document.getElementById("searchOverlay");
  const closeSearch = document.getElementById("closeSearch");
  const searchInput = document.getElementById("searchInput");
  const clearSearch = document.getElementById("clearSearch");

  searchBtn.addEventListener("click", () => {
    searchOverlay.classList.add("active");
    renderSearchResults(gamesData);
    setTimeout(() => searchInput.focus(), 100);
  });

  const closeOverlay = () => {
    searchOverlay.classList.remove("active");
    searchInput.value = "";
    clearSearch.style.display = "none";
    filterGames("");
  };

  closeSearch.addEventListener("click", closeOverlay);

  clearSearch.addEventListener("click", () => {
    searchInput.value = "";
    clearSearch.style.display = "none";
    renderSearchResults(gamesData);
    searchInput.focus();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && searchOverlay.classList.contains("active")) {
      closeOverlay();
    }
  });

  searchOverlay.addEventListener("click", (e) => {
    if (e.target === searchOverlay) {
      closeOverlay();
    }
  });

  let searchTimeout;
  searchInput.addEventListener("input", (e) => {
    const value = e.target.value;

    clearSearch.style.display = value ? "flex" : "none";

    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      const term = value.toLowerCase().trim();
      const results =
        term === ""
          ? gamesData
          : gamesData.filter((game) => game.name.toLowerCase().includes(term));

      renderSearchResults(results);
      filterGames(value);
    }, 300);
  });

  document.addEventListener("click", (e) => {
    const card = e.target.closest(".search-game-card");
    if (card) {
      const gameId = card.dataset.gameId;
      const game = gamesData.find((g) => g.id == gameId);
      if (game) {
        console.log("Open game:", game.name);
        alert(`Starting ${game.name}...`);
        closeOverlay();
      }
    }
  });
}

function initTabs() {
  const tabButtons = document.querySelectorAll(".tabs__button");
  const recentContainer = document.getElementById("recentGames");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));

      button.classList.add("active");

      const tab = button.dataset.tab;
      currentTab = tab;

      if (tab === "recent") {
        recentContainer.classList.remove("hidden");
        updateGamesDisplay();
      } else {
        recentContainer.classList.add("hidden");
      }
    });
  });
}

function initGameCards() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("game-card__button--primary")) {
      const card = e.target.closest(".game-card");
      const gameName = card.dataset.gameName;
      console.log("Play game:", gameName);
      alert(`Starting ${gameName}...`);
    }

    if (
      e.target.classList.contains("game-card__button") &&
      !e.target.classList.contains("game-card__button--primary")
    ) {
      const card = e.target.closest(".game-card");
      const gameName = card.dataset.gameName;
      console.log("Demo game:", gameName);
      alert(`Starting demo for ${gameName}...`);
    }
  });
}

function initShowAllButton() {
  const showAllBtn = document.querySelector(".show-all-btn");

  if (showAllBtn) {
    showAllBtn.addEventListener("click", () => {
      console.log("Show all games");
      alert("Showing all top games...");
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderCarousel();
  updateGamesDisplay();
  initSearch();
  initTabs();
  initGameCards();
  initShowAllButton();
});
