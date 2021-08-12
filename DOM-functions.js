import { renderPinnedRepoCard, renderProjectCard, renderPackageCard, packageForm, renderRepoCard, repoForm,  renderPinnedRepoForm, pageLayout} from "./DOM-elements.js";
import { addObjectToUser, currentUser } from "./data-functions.js";
import { newRepoObj } from "./data-structures.js";

// Render basic page layout
export const renderLayout = () => {
    renderToDOM("body", pageLayout);
};

// Render page specific content
export const renderContent = () => {
    switch (window.location.pathname) {
        // Repos Page
        case "/repos.html":
            renderToDOM("#form-container", repoForm)
            // repoForm();
            listOfCards(currentUser.repoData, renderRepoCard);
            break;

        // Projects Page
        case "/projects.html":
            listOfCards(currentUser.projectsData, renderProjectCard);
            break;

        // Packages Page
        case "/packages.html":
            listOfCards(currentUser.packagesData, renderPackageCard);
            packageForm();
            break;

        // Overview Page
        default:
            listOfCards(currentUser.repoData, renderPinnedRepoCard)
            renderPinnedRepoForm(currentUser.repoData);
            break;
           
    };
};


// Render Function
const renderToDOM = (_targetDivID, _element, _clear = true) => {
    const targetDiv = document.querySelector(_targetDivID);
  
    _clear ? (targetDiv.innerHTML = _element) : (targetDiv.innerHTML += _element);
  };

// Generate list of Cards
const listOfCards = (_array, _renderCardFunction) => {
    const cardArray = [];
    
    _array.forEach((item) => {
        _renderCardFunction(item);
    });

    return cardArray;
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
            listOfCards(currentUser.repoData, renderRepoCard);
            break;

    // Projects Page Buttons \\

    // Packages Page Buttons \\
        
    // Bio Buttons \\

    // Footer Buttons \\


    }
};

