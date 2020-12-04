import 'what-input'
import 'picturefill'
import Stickyfill from 'stickyfilljs'
// import footerAccordion from './modules/accordion.js'
// // import * as slider from './modules/_swiper.js'
// const slider = require("./modules/_swiper");

const StickyElement: any = document.querySelectorAll(".sticky");
// @ts-ignore
Stickyfill.add(StickyElement);

// slider();
const FooterAccordionButton: any = document.getElementById("footerAccordionButton");
const HamburgerButtons: any = document.querySelectorAll(".hamburger-button");
const HamburgerButtonText: any = document.getElementById("hamburgerButtonText");
const ToggleNav: any = document.getElementById("toggleNav");
const FnavSp: any = document.getElementById("fnav-sp");

FooterAccordionButton.addEventListener("click", () => {
    if (FooterAccordionButton.getAttribute("aria-expanded") === "false") {
        FooterAccordionButton.setAttribute("aria-expanded", "true");
        FnavSp.setAttribute("aria-hidden", "false");
    } else {
        FooterAccordionButton.setAttribute("aria-expanded", "false");
        FnavSp.setAttribute("aria-hidden", "true");
    }
});


HamburgerButtons.forEach(((HamburgerButton: { addEventListener: (arg0: string, arg1: () => void) => void; getAttribute: (arg0: string) => string; setAttribute: (arg0: string, arg1: string) => void; }) => {
    HamburgerButton.addEventListener("click", () => {
        if (HamburgerButton.getAttribute("aria-expanded") === "false") {
            HamburgerButton.setAttribute("aria-expanded", "true");
            ToggleNav.classList.add("active");
            HamburgerButtonText.innerText = "閉じる";
        } else {
            HamburgerButton.setAttribute("aria-expanded", "false");
            ToggleNav.classList.remove("active");
            HamburgerButtonText.innerText = "メニュー";
        }
    });
}));