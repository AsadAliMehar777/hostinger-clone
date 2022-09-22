/* ======================================================================
========== Variables ===================
====================================================================== */

let hosting = document.getElementById("hosting");
let VPS = document.getElementById("VPS");
let email = document.getElementById("email");
let domain = document.getElementById("domain");
let mHosting = document.getElementById("mHosting");
let mVPS = document.getElementById("mVPS");
let mEmail = document.getElementById("mEmail");
let mDomain = document.getElementById("mDomain");
let arrow = document.getElementsByClassName("arrow");
let heroNumber = document.getElementById("heroNumber");
let viewMore = document.getElementById("viewMore");
let more = document.getElementById("more");
let number = 1000000000;
let burger = document.getElementById("burger");
let nav = document.getElementById("responsive_navbar");
let upperHead = document.getElementById("upperHead");

/* ======================================================================
========== Navigation Menu Drop Downs ===================
====================================================================== */

dropDown(hosting, mHosting, 0);
dropDown(VPS, mVPS, 1);
dropDown(email, mEmail, 2);
dropDown(domain, mDomain, 3);
function dropDown(primary, secondary, arrowNo) {
  primary.addEventListener("click", () => {
    if (secondary.style.display == "block") {
      secondary.style.display = "none";
      arrow[arrowNo].style.rotate = "0deg";
    } else {
      secondary.style.display = "block";
      arrow[arrowNo].style.rotate = "-180deg";
    }
  });
}
/* ======================================================================
========== Hero Section Increasing Numbers ===================
====================================================================== */
let time = setInterval(() => {
  heroNumber.innerText = number;
  number += 999999;
  if (number >= 1271278620) {
    clearInterval(time);
    console.log("done");
  }
}, 5);

/* ======================================================================
========== Hosting Menu Show More and Show Less ===================
====================================================================== */

viewMore.addEventListener("click", () => {
  if (more.style.display == "block") {
    viewMore.style.transform = "rotate(0deg)";
    more.style.display = "none";
  } else {
    more.style.display = "block";
    viewMore.style.transform = "rotate(-180deg)";
  }
});

/* ======================================================================
========== Responsive Navbar ===================
====================================================================== */
function myFunction(x) {
  x.classList.toggle("change");
  if (nav.style.transform == "translateX(0%) translateY(0%)") {
    nav.style.transform = "translateX(100%) translateY(-100%)";
  } else {
    nav.style.transform = "translateX(0%) translateY(0%)";
  }
}
