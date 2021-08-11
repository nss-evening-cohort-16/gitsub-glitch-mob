import { currentUser, injectSampleData } from "./data-functions.js";
import { pageLayout, bioPanel, footer, header, renderPackagesContent } from "./DOM-elements.js";
import { samplePackage } from "./data-samples.js";


export const init = () => {
    injectSampleData();

    pageLayout();
    bioPanel(currentUser);
    header();
    footer();
  


    // ----> Create your renderXContent() function in DOM-elements
            // -> That function should contain a string of HTML which is passed to a renderToDOM function
            // -> Add the function to the imports on line 2 
            // -> Uncomment the function call for your page case 
            // -> Make sure it renders your content to the DOM

    switch (window.location.pathname) {
        case "/repos.html":
            // renderReposContent();
            break;

        case "/projects.html":
            // renderProjectsContent();
            break;

        case "/packages.html":
            renderPackagesContent(samplePackage);
            break;

        default:
            // renderOverviewContent();
            break;
    }
};