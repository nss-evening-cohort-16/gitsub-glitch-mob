import { currentUser, injectSampleData, renderContent } from "./data-functions.js";
import { pageLayout, header, footer, bioPanel } from "./DOM-elements.js"; 


export const init = () => {
    injectSampleData();

    pageLayout();
    
    header();
    footer();
    bioPanel(currentUser);

    renderContent();
};