import { currentUser, injectSampleData } from "./data-functions.js";
import { pageLayout, bioPanel, footer, header, renderPackagesContent } from "./DOM-elements.js";


export const init = () => {
    injectSampleData();

    pageLayout();
    bioPanel(currentUser);
    header();
    footer();
  
    const pagename = window.location.pathname;
  
    switch (pagename.contains) {
        case "repos":
            renderReposContent();
            break;

        case "projects":
            renderProjectsContent();
            break;

        case "packages":
            renderPackagesContent();
            break;

        // default:
        //     renderOverviewContent();
        //     break;
    }
};