import { renderPinnedRepoCard, renderProjectCard, renderPackageCard, packageForm, renderRepoCard as repoCardTemplate, repoForm,  renderPinnedRepoForm, pageLayout, header, footer, bioPanel} from "./DOM-elements.js";
import { addObjectToUser, currentUser } from "./data-functions.js";
import { newRepoObj } from "./data-structures.js";

// Render Function
const renderToDOM = (_targetDivID, _element, _clear = true) => {
    const targetDiv = document.querySelector(_targetDivID);
  
    _clear ? (targetDiv.innerHTML = _element) : (targetDiv.innerHTML += _element);
  };


// Render basic page layout
export const renderLayout = () => {
    // Render Structure
        renderToDOM("body", pageLayout);

    // Render Header
        renderToDOM("#page-navbar", header); 
    
    // Render Footer
        renderToDOM("#page-footer", footer);  

    // Render Bio Panel
        renderToDOM("#page-bio", bioPanel(currentUser));
};

// Render page specific content
export const renderContent = () => {
    switch (window.location.pathname) {
        // Repos Page
        case "/repos.html":
            renderToDOM("#list-container", listOfCards(currentUser.repoData, repoCardTemplate));
            renderToDOM("#form-container", repoForm());
            break;

        // Projects Page
        case "/projects.html":
            renderToDOM("#list-container", listOfCards(currentUser.projectsData, renderProjectCard));
            break;

        // Packages Page
        case "/packages.html":
            renderToDOM("#list-container", listOfCards(currentUser.packagesData, renderPackageCard));
            renderToDOM("#form-container", packageForm());
            break;

        // Overview Page
        default:
            renderToDOM("#list-container", listOfCards(currentUser.repoData, renderPinnedRepoCard));
            renderToDOM("#form-container", renderPinnedRepoForm(currentUser.repoData));
            break;           
    };
};


// Generate a string containing a list of Cards
const listOfCards = (_array, _cardTemplate) => {
    let cardString = "";
    
    _array.forEach((__obj) => {
        cardString += _cardTemplate(__obj);
    });

    return cardString;
};

// Register page clicks
export const registerEvents = () => {
    document
        .querySelector("body")
        .addEventListener("click", buttonClicks)
};

// Handle button clicks
const buttonClicks = (_event) => {
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
            
            renderToDOM("#list-container", listOfCards(currentUser.repoData, repoCardTemplate));
            break;

    // Projects Page Buttons \\

    // Packages Page Buttons \\
        
    // Bio Buttons \\

    // Footer Buttons \\


    }
};

