import { currentUser, injectSampleData } from "./data-functions.js";
import { pageLayout, header, footer, bioPanel, renderContent } from "./DOM-elements.js"; 


export const init = () => {
    injectSampleData();

    pageLayout();
    
    header();
    footer();
    bioPanel(currentUser);

    renderContent();
};