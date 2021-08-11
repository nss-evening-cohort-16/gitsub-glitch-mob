
import { samplePackage, sampleRepo } from "./data-samples.js";
import { currentUser, injectSampleData, reposList } from "./data-functions.js";
import { pageLayout, bioPanel, footer, header, renderProjectsContent, renderPackagesContent, renderReposContent } from "./DOM-elements.js";



export const init = () => {
    injectSampleData();


    // Render common page layout
    pageLayout();
    bioPanel(currentUser);
    header();
    footer();
    
  


    // ----> Create your renderXContent() function in DOM-elements
            // -> That function should contain a string of HTML which is passed to a renderToDOM function
            // -> Add the function to the imports on line 2 
            // -> Uncomment the function call for your page case 
            // -> Make sure it renders your content to the DOM


    // Render specific page layout
    switch (window.location.pathname) {
        case "/repos.html":
            reposList(sampleRepo);
            break;

        case "/projects.html":
            renderProjectsContent();
            break;

        case "/packages.html":
            renderPackagesContent(samplePackage);
            break;

        default:
            pinnedRepolist(samplePinnedRepo);
            break;
    }
};