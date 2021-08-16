header = document.querySelector(".header");
hamBurger = document.querySelector("#hamBurger");
siteLogo = document.querySelector("#siteLogo");
body = document.querySelector("body");
tabBtn1 = document.querySelector("#btn_1");
tabBtn2 = document.querySelector("#btn_2");
tabBtn3 = document.querySelector("#btn_3");
tabContent1 = document.querySelector("#tab_1");
tabContent2 = document.querySelector("#tab_2");
tabContent3 = document.querySelector("#tab_3");

faqQuestion1 = document.querySelector("#faq-question-1");
faqQuestion2 = document.querySelector("#faq-question-2");
faqQuestion3 = document.querySelector("#faq-question-3");
faqQuestion4 = document.querySelector("#faq-question-4");
faq1 = document.querySelector("#faq-1");
faq2 = document.querySelector("#faq-2");
faq3 = document.querySelector("#faq-3");
faq4 = document.querySelector("#faq-4");

hamBurger.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    header.classList.remove("overlay");
    body.classList.remove("noscroll");
    siteLogo.src = "images/logo-bookmark.svg";
  } else {
    header.classList.add("open");
    header.classList.add("overlay");
    body.classList.add("noscroll");
    siteLogo.src = "images/logo-white.svg";
  }
});

tabBtn1.addEventListener("click", () => {
  if (tabBtn1.classList.contains("active_tab")) {
  } else {
    tabBtn1.classList.add("active_tab");
    tabBtn2.classList.remove("active_tab");
    tabBtn3.classList.remove("active_tab");
  }
});

tabBtn2.addEventListener("click", () => {
  if (tabBtn2.classList.contains("active_tab")) {
  } else {
    tabBtn1.classList.remove("active_tab");
    tabBtn2.classList.add("active_tab");
    tabBtn3.classList.remove("active_tab");
  }
});

tabBtn3.addEventListener("click", () => {
  if (tabBtn3.classList.contains("active_tab")) {
  } else {
    tabBtn1.classList.remove("active_tab");
    tabBtn2.classList.remove("active_tab");
    tabBtn3.classList.add("active_tab");
  }
});

function openTab1() {
  console.log("click");
  tabContent1.style.transform = "translateX(0)";
  tabContent2.style.transform = "translateX(200%)";
  tabContent3.style.transform = "translateX(200%)";
}

function openTab2() {
  console.log("click");
  tabContent1.style.transform = "translateX(200%)";
  tabContent2.style.transform = "translateX(0)";
  tabContent3.style.transform = "translateX(200%)";
}

function openTab3() {
  console.log("click");
  tabContent1.style.transform = "translateX(200%)";
  tabContent2.style.transform = "translateX(200%)";
  tabContent3.style.transform = "translateX(0)";
}

faqQuestion1.addEventListener("click", () => {
  if (faq1.classList.contains("active_faq")) {
    faq1.classList.remove("active_faq");
  } else {
    faq1.classList.add("active_faq");
  }
});


faqQuestion2.addEventListener("click", () => {
  if (faq2.classList.contains("active_faq")) {
    faq2.classList.remove("active_faq");
  } else {
    faq2.classList.add("active_faq");
  }
});



faqQuestion3.addEventListener("click", () => {
  if (faq3.classList.contains("active_faq")) {
    faq3.classList.remove("active_faq");
  } else {
    faq3.classList.add("active_faq");
  }
});



faqQuestion4.addEventListener("click", () => {
  if (faq4.classList.contains("active_faq")) {
    faq4.classList.remove("active_faq");
  } else {
    faq4.classList.add("active_faq");
  }
});