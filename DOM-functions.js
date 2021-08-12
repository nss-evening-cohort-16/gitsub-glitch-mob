import { renderPinnedRepoCard, renderProjectCard, renderPackageCard, packageForm, renderRepoCard, repoForm,  renderPinnedRepoForm} from "./DOM-elements.js";
import { addObjectToUser, currentUser } from "./data-functions.js";
import { newRepoObj } from "./data-structures.js";

// Render page specific content
export const renderContent = () => {
    switch (window.location.pathname) {
        // Repos Page
        case "/repos.html":
            repoForm();
            listCards(currentUser.repoData, renderRepoCard);
            break;

        // Projects Page
        case "/projects.html":
            listCards(currentUser.projectsData, renderProjectCard);
            break;

        // Packages Page
        case "/packages.html":
            listCards(currentUser.packagesData, renderPackageCard);
            packageForm();
            break;

        // Overview Page
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

// Clear the card rendering area
const clearListContainer = () => {
    document.querySelector("#list-container").innerHTML = "";
};

// Handle clicks
export const buttonClicks = (_event) => {
    const targetID = _event.target.id;
    
    // Log clicked ID -- Debug purposes
    console.log(targetID);

    switch(targetID) {
    // Overview Page Buttons \\

    // Repos Page Buttons \\
        // Form Submit Button
        case "repo-form-submitBtn":
            _event.preventDefault();

            addObjectToUser(
                newRepoObj(
                    document.querySelector("#repo-form-title").value,
                    document.querySelector("#repo-form-description").value,
                    document.querySelector("#repo-form-language").value,
                    Date()), 
                currentUser.repoData);
            
            clearListContainer();
            listCards(currentUser.repoData, renderRepoCard);
            break;

    // Projects Page Buttons \\

    // Packages Page Buttons \\
        
    // Bio Buttons \\

    // Footer Buttons \\


    }
};

