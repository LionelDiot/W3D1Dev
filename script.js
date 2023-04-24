const mainCourses = [
  "Filet de turbot de la mer Noire",
  "Tablier de sapeur",
  "Gigot d'agneau",
  "Faisan de forêt",
  "Trio de quinoa, chou kale et pousses d'épinard",
];
const techniques = [
  "à la cocotte",
  "minute",
  "avec sa sauce hollandaise",
  "façon sud-ouest",
  "comme chez ma grand-mère",
  "déglacé au saké",
  "maturé en fût de chêne",
];
const sides = [
  "une purée de topinambour",
  "ses frites truffées",
  "des châtaignes croustillantes",
  "une brunoise carotte-cèleri",
  "un oeuf parfait",
  "sa crème veloutée de fromages affinés",
];
const seasonings = [
  "au yuzu rouge",
  "au poivre vert de Sichuan",
  "et une pointe de safran",
  "à l'ail noir",
  "et un peu de sucre en poudre",
];

const getRandom = (data) => data[Math.floor(Math.random() * data.length)];

const menu = `${getRandom(mainCourses)} ${getRandom(
  techniques
)}, avec ${getRandom(sides)} ${getRandom(seasonings)}`;

const generateMenu = () => {
  const menu = `${getRandom(mainCourses)} ${getRandom(
    techniques
  )}, avec ${getRandom(sides)} ${getRandom(seasonings)}`;
  const menuContainer = document.getElementById("generated-menu");

  const menuElement = document.createElement("p");
  menuElement.textContent = menu;

  const existingMenuElement = menuContainer.querySelector("p");
  if (existingMenuElement) {
    existingMenuElement.remove();
  }

  menuContainer.appendChild(menuElement);
};

document
  .getElementById("generate-menu")
  .addEventListener("click", generateMenu);

const removeDefaultLink = (event) => {
  event.preventDefault();
  // Notre transition de page.
};

document.querySelectorAll("a").forEach((linkElement) => {
  linkElement.addEventListener("click", removeDefaultLink);
});

const selectTab = (event) => {
  const currentTab = event.target;
  const currentTabId = currentTab.getAttribute("href");

  // Remove active class from previous tab
  document.querySelectorAll(".nav-link").forEach((tab) => {
    if (tab.classList.contains("active")) {
      tab.classList.remove("active");
    }
  });

  // Add active class to current tab
  currentTab.classList.add("active");

  // Hide all sections except the current one
  document.querySelectorAll("div.container-fluid").forEach((section) => {
    if (section.getAttribute("id") === currentTabId.substring(1)) {
      section.classList.remove("d-none");
    } else {
      section.classList.add("d-none");
    }
  });
};

document.querySelectorAll("li").forEach((tabElement) => {
  tabElement.addEventListener("click", selectTab);
});

const exitPopup = document.getElementById("exit-popup");
const newsletterForm = document.getElementById("newsletter-form");
const closePopupButton = document.getElementById("close-popup");

function showExitPopup() {
  const popupContainer = document.getElementById("popup-container");
  const popupCloseBtn = document.getElementById("popup-close-btn");

  popupContainer.style.display = "block";

  popupCloseBtn.addEventListener("click", function() {
    popupContainer.style.display = "none";
  });

  popupContainer.addEventListener("click", function(event) {
    if (event.target === popupContainer) {
      popupContainer.style.display = "none";
    }
  });
}


function hideExitPopup() {
  exitPopup.style.display = "none";
  document.body.style.overflow = "auto";
}



function handlePopupClick(event) {
  if (event.target === exitPopup || event.target === closePopupButton) {
    hideExitPopup();
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  // Submit the form to your newsletter service (e.g. MailChimp or Mailjet)
  // You can use their API to add the email address to your mailing list
  // Once the form is successfully submitted, hide the popup
  hideExitPopup();
}

let engagedWithPage = false;

function handleMouseEnter() {
  engagedWithPage = true;
}

function handleMouseLeave() {
  if (engagedWithPage) {
    showExitPopup();
  }
}

document.addEventListener("mouseenter", handleMouseEnter);
document.addEventListener("mouseleave", handleMouseLeave);

exitPopup.addEventListener("click", handlePopupClick);
//newsletterForm.addEventListener("submit", handleFormSubmit);
