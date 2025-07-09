function openDrawer() {
  document.getElementById("drawer").classList.remove("-translate-x-full");
  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("menuButton").classList.add("hidden");
}

function closeDrawer() {
  document.getElementById("drawer").classList.add("-translate-x-full");
  document.getElementById("overlay").classList.add("hidden");
  document.getElementById("menuButton").classList.remove("hidden");
}

// drawers menu

function navigateToScheme() {
  Toaster.postMessage("navigateScheme");
}

function navigateToBankDetails() {
  Toaster.postMessage("navigateBankDetails");
}

function navigateToKyc() {
  Toaster.postMessage("navigateKyc");
}

function navigateToRate() {
  Toaster.postMessage("navigateRate");
}

function navigateSchemeRecords() {
  Toaster.postMessage("navigateSchemeRecords");
}

function navigateToCustomerCard() {
  Toaster.postMessage("navigateToCustomerCard");
}

function navigateTransactionHistory() {
  Toaster.postMessage("navigateTransactionHistory");
}

function navigateToMyOrder() {
  Toaster.postMessage("navigateToMyOrder");
}

function navigateToUserProfile() {
  Toaster.postMessage("navigateToUserProfile");
}

function navigateToDigitalGold() {
  Toaster.postMessage("navigateToDigitalGold");
}

function navigateToPanchang() {
  Toaster.postMessage("navigateToPanchang");
}

function navigateToFeedback() {
  Toaster.postMessage("navigateToFeedback");
}

function navigateToSetting() {
  Toaster.postMessage("navigateToSetting");
}

function setUserName(username) {
  // Find the element by ID and set the text content
  document.getElementById("user-name-display").innerText =
    "Welcome, " + username;
}
function navigateToHomePage() {
  Toaster.postMessage("navigateToHomePage");
}

// brandSwiper
const brandSwiper = new Swiper(".brandSwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// drawertabs

function toggleCards() {
  const section = document.getElementById("moreCards");
  const buttonText = document.querySelector("#toggleButton span");

  if (section.style.maxHeight === "0px" || !section.style.maxHeight) {
    section.style.maxHeight = "1000px";
    section.style.opacity = "1";
    buttonText.textContent = "Show Less";
  } else {
    section.style.maxHeight = "0";
    section.style.opacity = "0";
    buttonText.textContent = "Show More";
  }
}

new Swiper(".branding-image-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    slideShadows: false,
  },
});
