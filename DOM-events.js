import { currentUser, injectSampleData } from "./data-functions.js";
import { pageLayout, bioPanel, footer } from "./DOM-elements.js";


export const init = (_pageName = null) => {
    injectSampleData();

    pageLayout();
    bioPanel(currentUser);
    footer();

    switch (_pageName) {
        case "repos":
            renderReposContent();
            break;

        case "projects":
            renderProjectsContent();
            break;

        case "packages":
            renderPackagesContent();
            break;

        default:
            renderOverviewContent();
            break;
    }
};