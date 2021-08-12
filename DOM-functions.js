import { renderPinnedRepoCard, renderProjectCard, renderPackageCard, packageForm, renderRepoCard, repoForm,  renderPinnedRepoForm} from "./DOM-elements.js";
import { addNewRepo, currentUser } from "./data-functions.js";
import { newRepoObj } from "./data-structures.js";

// Render page specific content
export const renderContent = () => {
    switch (window.location.pathname) {
        case "/repos.html":
            repoForm();
            listCards(currentUser.repoData, renderRepoCard);
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

const clearListContainer = () => {
    document.querySelector("#list-container").innerHTML = "";
};


export const buttonClicks = (_event) => {
    const targetID = _event.target.id;
    
    console.log(targetID);

    switch(targetID) {
        case "repo-form-submitBtn":
            _event.preventDefault();

            addNewRepo(newRepoObj(
                document.querySelector("#repo-form-title").value,
                document.querySelector("#repo-form-description").value,
                document.querySelector("#repo-form-language").value,
                Date()));
            
            clearListContainer();
            listCards(currentUser.repoData, renderRepoCard);
        break;

    }
};

