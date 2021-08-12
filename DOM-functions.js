import { renderPinnedRepoCard, renderProjectCard, renderPackageCard, packageForm, renderRepoCard, repoForm,  renderPinnedRepoForm} from "./DOM-elements.js";
import { currentUser } from "./data-functions.js";

// Render page specific content
export const renderContent = () => {
    switch (window.location.pathname) {
        case "/repos.html":
            listCards(currentUser.repoData, renderRepoCard);
            repoForm();
            break;

        case "/projects.html":
            listCards(currentUser.projectsData, renderProjectCard);
            break;

        case "/packages.html":
            listCards(currentUser.packagesData, renderPackageCard);
            packageForm();
            break;

        default:
            listCards(currentUser.repoData, renderPinnedRepoCard)
            renderPinnedRepoForm(currentUser.repoData);
            break;
           
    };
};


// Render cards to DOM
const listCards = (_array, _renderCardFunction) => {
    _array.forEach((item) => {
        _renderCardFunction(item);
    });
};
