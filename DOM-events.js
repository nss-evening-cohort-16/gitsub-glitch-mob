import { currentUser, injectSampleData } from "./data-functions.js";
import { header, footer, bioPanel } from "./DOM-elements.js"; 
import { buttonClicks, renderContent, renderLayout } from "./DOM-functions.js";


export const init = () => {
    injectSampleData();

    renderLayout();
    
    header();
    footer();
    bioPanel(currentUser);

    renderContent();

    registerEvents();
};

const registerEvents = () => {
    document
        .querySelector("body")
        .addEventListener("click", buttonClicks)
};
