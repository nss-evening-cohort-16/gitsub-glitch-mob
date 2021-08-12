import { renderPinnedRepoCard, renderProjectCard, renderPackageCard, packageForm, renderRepoCard, repoForm,  renderPinnedRepoForm} from "./DOM-elements.js";
import { sampleRepo, samplePackage } from "./data-samples.js";
import { currentProjectsArray } from "./data-functions.js";

// Render page specific content
export const renderContent = () => {
    switch (window.location.pathname) {
        case "/repos.html":
            listCards(sampleRepo, renderRepoCard);
            repoForm();
            break;

        case "/projects.html":
            listCards(currentProjectsArray, renderProjectCard);
            break;

        case "/packages.html":
            listCards(samplePackage, renderPackageCard);
            packageForm();
            break;

        default:
            listCards(sampleRepo, renderPinnedRepoCard)
            renderPinnedRepoForm(sampleRepo);
            break;
           
    };
};


// Render cards to DOM
const listCards = (_array, _renderCardFunction) => {
    _array.forEach((item) => {
        _renderCardFunction(item);
    });
};
