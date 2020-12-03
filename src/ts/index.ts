const FooterAccordionButton: any = document.getElementById("footerAccordionButton");
const HamburgerButtons: any = document.querySelectorAll(".hamburger-button");

// @ts-ignore
FooterAccordionButton.addEventListener("click", () => {
    if (FooterAccordionButton.getAttribute("aria-expanded") === "false") {
        FooterAccordionButton.setAttribute("aria-expanded", "true");
    } else {
        FooterAccordionButton.setAttribute("aria-expanded", "false");
    }
});

HamburgerButtons.forEach((HamburgerButton: { addEventListener: (arg0: string, arg1: () => void) => void; }) => {
    HamburgerButton.addEventListener("click", () => {
        if (FooterAccordionButton.getAttribute("aria-expanded") === "false") {
            FooterAccordionButton.setAttribute("aria-expanded", "true");
        } else {
            FooterAccordionButton.setAttribute("aria-expanded", "false");
        }
    });
})
