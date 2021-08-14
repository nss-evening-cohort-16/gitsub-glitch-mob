import { pinnedRepoCardTemplate,projectsContent, projectCardTemplate, projectForm, packageCardTemplate, packageForm, repoCardTemplate, repoForm, pageLayout, header, footer, bioPanel, simpleRepoCardTemplate, pinRepoForm} from "./DOM-elements.js";
import { pinnedRepoCardTemplate, projectsContent, reposContent, projectCardTemplate, projectForm, packageCardTemplate, packageForm, repoCardTemplate, repoForm, pageLayout, header, footer, bioPanel } from "./DOM-elements.js";
import { addObjectToUser, currentUser } from "./data-functions.js";
import { newProjectObj, newRepoObj, newPackageObj } from "./data-structures.js";

//// Page Construction \\\\

// Render basic page layout
export const renderLayout = () => {
    renderToDOM("body", pageLayout);
    renderToDOM("#page-navbar", header);    
    renderToDOM("#page-footer", footer);
    renderToDOM("#page-bio", bioPanel(currentUser));
};

// Render page content
export const renderContent = () => {
    switch (window.location.pathname) {
        case "/repos.html":
            renderReposPage();
            break;

        case "/projects.html":
            renderProjectsPage();
            break;

        case "/packages.html":
            renderPackagesPage();
            break;

        default:
            renderOverviewPage();
            break;           
    };
};

//// Page Specific Rendering \\\\

// Overview Page
const renderOverviewPage = () => {
    renderToDOM("#list-container", listOfCards(currentUser.repoData, pinnedRepoCardTemplate));
    renderToDOM("#pinnedRepoForm-card-container", listOfCards(currentUser.repoData, simpleRepoCardTemplate));
    renderToDOM("#form-container", pinRepoForm);
};

// Repos Page
const renderReposPage = () => {
    renderToDOM("#list-container", reposContent)
    renderToDOM("#repo-list-container", listOfCards(currentUser.repoData, repoCardTemplate));
    renderToDOM("#form-container", repoForm);
};

// Projects Page
const renderProjectsPage = () => {
    renderToDOM("#list-container", projectsContent);
    renderToDOM("#projects-list-container", listOfCards(currentUser.projectsData, projectCardTemplate));
    renderToDOM("#form-container", projectForm);
};

// Packages Page
const renderPackagesPage = () => {
    renderToDOM("#list-container", listOfCards(currentUser.packagesData, packageCardTemplate));
    renderToDOM("#form-container", packageForm);
};


//// Rendering and Events \\\\

// Render Function
const renderToDOM = (_targetDivID, _element, _clear = true) => {
    const targetDiv = document.querySelector(_targetDivID);
  
    _clear ? (targetDiv.innerHTML = _element) : (targetDiv.innerHTML += _element);
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
    return _input ? "" : "Field required.";
};

// Handle button clicks
export const registerEvents = () => {
    document.querySelector("body").addEventListener("click", buttonClicks)
    
const buttonClicks = (_event) => {
    const targetID = _event.target.id;

    
    // Log clicked ID -- Debug purposes
    console.log(targetID);

    switch(targetID) {
    
    // Overview Page Buttons \\  
    
    // Repos Page Buttons \\
        // Repo Form Submit Button
        case "repo-form-submitBtn":
            _event.preventDefault();
            submitNewRepoForm();
            break;
    // Projects Page Buttons \\
        // Project Form Submit Button
        case "project-form-submitBtn":
            _event.preventDefault();
            submitNewProject();            
            break;
            case "Pin-repo":
                _event.preventDefault();
                pinnedRepo();
        // Submit "Search" button
        // Filter "Open" button
        // Filter for "Closed" button
        // Sort by


    // Packages Page Buttons \\
    case "package-form-submitBtn":
            _event.preventDefault();
            submitNewPackage();            
            break;
    };
};


//// Button Functions \\\\

// Overview

// Repos


const submitNewRepoForm = () => {
    const repoTitleInput = document.querySelector("#repo-form-title").value;
    const repoDescriptionInput = document.querySelector("#repo-form-description").value;
    const repoTagsInput = document.querySelector("#repo-form-tags").value;
    const repoLangInput = document.querySelector("#repo-form-language").value;

    if (!inputError(repoTitleInput) && !inputError(repoDescriptionInput) && !inputError(repoLangInput)) {
        addObjectToUser(
            newRepoObj(
                repoTitleInput,
                repoDescriptionInput, 
                repoLangInput, 
                repoLangInput),
            currentUser.repoData);
            
        renderToDOM("#repo-list-container", listOfCards(currentUser.repoData, repoCardTemplate));
        document.querySelector("#repo-inputForm").reset();
    }
    
};

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
}

// Packages
const submitNewPackage = () => {
    const packageTitleInput = document.querySelector("#package-form-name").value;
    const packageDescInput = document.querySelector("#package-form-description").value;

    if (!inputError(packageTitleInput) && !inputError(packageDescInput)) {
        addObjectToUser(
            newPackageObj(
                packageTitleInput, 
                packageDescInput), 
            currentUser.packagesData);
            
        renderToDOM("#packages-container", listOfCards(currentUser.packagesData, packageCardTemplate));
        document.querySelector("#package-inputForm").reset();
    };
};
};