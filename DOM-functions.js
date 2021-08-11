import { renderPinnedRepoCard, renderProjectCard, renderPackageCard, renderRepoCard } from "./DOM-elements.js";
import { currentUser } from "./data-functions.js";
// import { sampleRepo, samplePackage } from "./data-samples.js";
// import { currentProjectsArray } from "./data-functions.js";

// Render page specific content
export const renderContent = () => {
    switch (window.location.pathname) {
        case "/repos.html":
            listCards(currentUser.repos, renderRepoCard);
            break;

        case "/projects.html":
            listCards(currentUser.projects, renderProjectCard);
            break;

        case "/packages.html":
            listCards(currentUser.packages, renderPackageCard);
            break;

        default:
            listCards(currentUser.repos, renderPinnedRepoCard)
            break;
    };
};


// Render cards to DOM
const listCards = (_array, _renderCardFunction) => {
    _array.forEach((item) => {
        _renderCardFunction(item);
    });
};
