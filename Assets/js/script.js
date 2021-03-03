//#region  Aos Initilzation
AOS.init({ once: true });
//#endregion

//#region Helper Functions
let slideUp = (target, duration = 500) => {
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
    //alert("!");
  }, duration);
};
let slideDown = (target, duration = 500) => {
  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") display = "block";
  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  target.style.removeProperty("padding-top");
  target.style.removeProperty("padding-bottom");
  target.style.removeProperty("margin-top");
  target.style.removeProperty("margin-bottom");
  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};
var slideToggle = (target, duration = 500) => {
  if (window.getComputedStyle(target).display === "none") {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
};
//#endregion

//#region Navbar
const hamburgerMenu = document.querySelector(".nav__hamburger--menu");
const closeButton = document.querySelector(
  ".mobile__nav .mobile__nav--close__button"
);
const dropdownMenus = document.querySelectorAll(".mobile__nav .dropdown__menu");
const mobileNavMenu = document.querySelector(".mobile__nav .mobile__nav__menu");
document
  .querySelectorAll(".mobile__nav .nav__dropdown__menu")
  .forEach((menu) => {
    slideUp(menu);
  });
const showNavbar = () => {
  const mobileNav = document.querySelector(".mobile__nav");
  const blackOverlay = document.querySelector(".black__overlay");
  mobileNav.style.display = "block";
  setTimeout(() => {
    mobileNav.style.transform = "translateY(0rem)";
  }, 1);
  blackOverlay.style.display = "block";
  setTimeout(() => {
    blackOverlay.style.opacity = 1;
    blackOverlay.style.backdropFilter = "blur(3px)";
  }, 1);
};

const hideNavbar = () => {
  const mobileNav = document.querySelector(".mobile__nav");
  const blackOverlay = document.querySelector(".black__overlay");
  mobileNav.style.transform = "translateY(-80rem)";
  setTimeout(() => {
    mobileNav.style.display = "none";
  }, 600);
  blackOverlay.style.opacity = 0;
  blackOverlay.style.backdropFilter = "unset";
  setTimeout(() => {
    blackOverlay.style.display = "none";
  }, 600);
  document
    .querySelectorAll(".mobile__nav .nav__dropdown__menu")
    .forEach((menu) => {
      slideUp(menu);
    });
};

dropdownMenus.forEach(function (menu) {
  menu.addEventListener("click", function (e) {
    try {
      e.stopPropagation();
      slideToggle(e.target.children[1]);
      const interval = setInterval(() => {
        mobileNavMenu.scrollTop = mobileNavMenu.scrollHeight;
      }, 1);
      setTimeout(() => {
        clearInterval(interval);
      }, 500);
    } catch {}
  });
});

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 50) {
    document.querySelector("nav").classList.add("navigation-fixed");
  } else {
    document.querySelector("nav").classList.remove("navigation-fixed");
  }
});

window.addEventListener("beforeunload", () => {
  document.documentElement.scrollTop = 0;
});

const blackOverlay = document.querySelector(".black__overlay");
blackOverlay.addEventListener("click", hideNavbar);
hamburgerMenu.addEventListener("click", showNavbar);
closeButton.addEventListener("click", hideNavbar);
//#endregion

//#region Smooth Scrolling
const mainButton = document.getElementById("main");
mainButton.addEventListener("click", () => {
  document.querySelector("main").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#header").addEventListener("click", () => {
  document.querySelector("header").scrollIntoView({ behavior: "smooth" });
});
//#endregion

//#region Tabs Menu
const tabs = document.querySelectorAll(".tab");
const content = document.querySelectorAll(".tab__content");
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    tabs.forEach((tab_) => {
      tab_.classList.remove("tab__menu--active");
    });
    this.classList.add("tab__menu--active");
    const contentToBeShown = document.querySelector(
      `#content${this.id[this.id.length - 1]}`
    );
    content.forEach((content_) => {
      content_.style.opacity = "0";
      setTimeout(() => {
        content_.style.display = "none";
        contentToBeShown.style.display = "block";
        setTimeout(() => {
          contentToBeShown.style.opacity = "1";
        }, 20);
      }, 580);
    });
  });
});
//#endregion
