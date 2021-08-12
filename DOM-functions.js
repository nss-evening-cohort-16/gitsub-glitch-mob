import { pinnedRepoCardTemplate, pinnedRepoForm, projectsContent, projectCardTemplate, projectForm, packageCardTemplate, packageForm, repoCardTemplate, repoForm, pageLayout, header, footer, bioPanel } from "./DOM-elements.js";
import { addObjectToUser, currentUser } from "./data-functions.js";
import { newProjectObj, newRepoObj } from "./data-structures.js";

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
            renderToDOM("#form-container", repoForm());

            addObjectToUser(
                newRepoObj(
                    document.querySelector("#repo-form-title").value,
                    document.querySelector("#repo-form-description").value,
                    document.querySelector("#repo-form-language").value,
                    Date()), 
                currentUser.repoData);

            renderToDOM("#list-container", listOfCards(currentUser.repoData, repoCardTemplate));
            break;

        // Projects Page
        case "/projects.html":
            renderToDOM("#list-container", projectsContent);
            renderToDOM("#projects-list-container", listOfCards(currentUser.projectsData, projectCardTemplate));

            renderToDOM("#form-container", projectForm);
            break;

        // Packages Page
        case "/packages.html":
            renderToDOM("#list-container", listOfCards(currentUser.packagesData, packageCardTemplate));
            renderToDOM("#form-container", packageForm());
            break;

        // Overview Page
        default:
            renderToDOM("#list-container", listOfCards(currentUser.repoData, pinnedRepoCardTemplate));
            renderToDOM("#form-container", pinnedRepoForm(currentUser.repoData));
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

// Print error if form fields are empty
const inputError = (_input) => {
    return _input ? "" : "All fields required.";
};

// Register page clicks
export const registerEvents = () => {
    document.querySelector("body").addEventListener("click", buttonClicks)
};

// Handle button clicks
const buttonClicks = (_event) => {
    const targetID = _event.target.id;
    
    // Log clicked ID -- Debug purposes
    console.log(targetID);

    switch(targetID) {
    // Overview Page Buttons \\

    // Repos Page Buttons \\
        // Repo Form Submit Button

    // Projects Page Buttons \\
        // Project Form Submit Button
        case "project-form-submitBtn":
            _event.preventDefault();
            submitNewProject();            
            break;


    // Packages Page Buttons \\
    };
};


//// Button Functions \\\\

// Overview

// Repos

// Projects
const submitNewProject = () => {
    const titleInput = document.querySelector("#project-form-title").value;
    const descInput = document.querySelector("#project-form-description").value;
    const privateCheck = document.querySelector("#project-form-privacy").checked;

    if (!inputError(titleInput) && !inputError(descInput)) {
        addObjectToUser(
            newProjectObj(
                titleInput, 
                descInput, 
                privateCheck ? "Private" : "Public"),
            currentUser.projectsData);
            
        renderToDOM("#projects-list-container", listOfCards(currentUser.projectsData, projectCardTemplate));
        document.querySelector("#project-inputForm").reset();
    };
};

// Packages
