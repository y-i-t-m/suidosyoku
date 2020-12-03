const footerAccordionButton = document.getElementById("footerAccordionButton");

export default function _footerAccordion() {
    footerAccordionButton.addEventListener("click", () => {
        // @ts-ignore
        footerAccordionButton.classList.add("active");
    })

}
