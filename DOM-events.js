import { currentUser, injectSampleData } from "./data-functions.js";
import { pageLayout, header, footer, bioPanel } from "./DOM-elements.js"; 
import { renderContent } from "./DOM-functions.js";


export const init = () => {
    injectSampleData();

    pageLayout();
    
    header();
    footer();
    bioPanel(currentUser);

    renderContent();
};