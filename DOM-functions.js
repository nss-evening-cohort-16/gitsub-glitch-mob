import { pinnedRepoCardTemplate, projectsContent, projectCardTemplate, projectForm, packageCardTemplate, packageForm, packagesContent, reposContent, repoCardTemplate, repoForm, pageLayout, header, footer, bioPanel, simpleRepoCardTemplate, pinRepoForm} from "./DOM-elements.js";
import { addObjectToUser, currentUser, followOtherUser, switchUser } from "./data-functions.js";
import { newProjectObj, newRepoObj, newPackageObj } from "./data-structures.js";

//// Page Construction \\\\

// Render page content
export const renderPage = () => {
    renderLayout();
    renderBioPanel();

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

// Render basic page layout
const renderLayout = () => {
    renderToDOM("body", pageLayout);

    renderToDOM("#page-navbar", header);    
    renderToDOM("#page-footer", footer);
};

const renderBioPanel = () => {
    renderToDOM("#page-bio", bioPanel(currentUser));
};


//// Page Specific Rendering \\\\

// Overview Page
const renderOverviewPage = () => {
    renderToDOM("#list-container", listOfCards(currentUser.repoData, pinnedRepoCardTemplate));
    renderToDOM("#form-container", pinRepoForm);
    renderToDOM("#pinnedRepoForm-card-container", listOfCards(currentUser.repoData, simpleRepoCardTemplate));  
};

// Repos Page
const renderReposPage = () => {
    renderToDOM("#list-container", reposContent)
    renderToDOM("#form-container", repoForm);

    renderRepoCards();
};

const renderRepoCards = () => {
    renderToDOM("#repo-list-container", listOfCards(currentUser.repoData, repoCardTemplate));
};

// Projects Page
const renderProjectsPage = () => {
    renderToDOM("#list-container", projectsContent);
    renderToDOM("#form-container", projectForm);

    renderProjectCards();
};

const renderProjectCards = (_filter = null, _filterValue = null) => {    
    renderToDOM("#projects-list-container", listOfCards(currentUser.projectsData, projectCardTemplate, _filter, _filterValue));
};

// Packages Page
const renderPackagesPage = () => {
    renderToDOM("#list-container", packagesContent);
    renderToDOM("#packages-list-container", listOfCards(currentUser.packagesData, packageCardTemplate));
    renderToDOM("#form-container", packageForm);
};


//// Rendering and Events \\\\

// Render Function
const renderToDOM = (_targetDivID, _element, _clear = true) => {
    const targetDiv = document.querySelector(_targetDivID);
  
    _clear ? (targetDiv.innerHTML = _element) : (targetDiv.innerHTML += _element);
  };

// Generate a string containing a list of Cards
const listOfCards = (_userDataArray, _cardTemplate, _filter = null, _filterValue = null) => {
    let cardString = "";
    
    _userDataArray.forEach((__obj, __i) => {
        if (_filter) {
            if (__obj[_filter] === _filterValue) {
                cardString += _cardTemplate(__obj, __i);
            };
        } else {
            cardString += _cardTemplate(__obj, __i);
        };
    });

    return cardString;
};

// Print error if form fields are empty
const inputError = (_input, _errorTextDiv) => {
    return document.querySelector(_errorTextDiv).innerHTML = _input ? "" : "Field required.";
};

// Handle button clicks
export const registerEvents = () => {
    document.querySelector("body").addEventListener("click", buttonClicks)
}; 

const buttonClicks = (_event) => {
    const [targetID, targetIndex] = _event.target.id.split("--");
    
    // Log clicked ID -- Debug purposes
    console.log(targetID);

    switch(targetID) {
    
    // Overview Page Buttons \\ 
        // Pin Repo button
        case "pin-repo":
            currentUser.repoData[targetIndex].pinned = true;
            break;

    // Repos Page Buttons \\
        // Repo Form Submit Button
        case "repo-form-submitBtn":
            _event.preventDefault();
            submitNewRepoForm();
            break;

        // Delete Repos button
        case "repo-deleteBtn":
            deleteRepo(targetIndex);
            break;

    // Projects Page Buttons \\
        // Project Form Submit Button
        case "project-form-submitBtn":
            _event.preventDefault();
            submitNewProject();            
            break;

        // Delete project button
        case "project-deleteBtn":
            deleteProject(targetIndex);
            break;

        // Open or Close project button
        case "project-statusBtn":
            changeProjectStatus(targetIndex);
            break;
        
        // Submit "Search" button
        
        // Filter "Open" button
        case "projects-list-filter-open":
            renderProjectCards("open", true);
            break;

        // Filter for "Closed" button
        case "projects-list-filter-closed":
            renderProjectCards("open", false);
            break;

        // Sort by


    // Packages Page Buttons \\
        // Package Form Submit Button
        case "package-form-submitBtn":
            _event.preventDefault();
            submitNewPackage();            
            break;

    // Bio Panel Buttons \\
        // Follow Button
        case "btn-follow":
            followUser();
            break;

        // Switch User Buttton
        case "btn-changeUser":
            changeUser();
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

    if (!inputError(repoTitleInput, "#repo-title-error") && !inputError(repoDescriptionInput, "#repo-desc-error") && !inputError(repoTagsInput, "#repo-tag-error") && !inputError(repoLangInput, "#repo-lang-error")) {
        addObjectToUser(
            newRepoObj(
                repoTitleInput,
                repoDescriptionInput, 
                repoTagsInput, 
                repoLangInput),
            currentUser.repoData);
            
        renderToDOM("#repo-list-container", listOfCards(currentUser.repoData, repoCardTemplate));
        document.querySelector("#repo-inputForm").reset();
    };
};

const deleteRepo = (_index) => {
    currentUser.repoData.splice(_index, 1);
    renderRepoCards();
}

// Projects
const submitNewProject = () => {
    const titleInput = document.querySelector("#project-form-title").value;
    const descInput = document.querySelector("#project-form-description").value;
    const privateCheck = document.querySelector("#project-form-privacy").checked;

    if (!inputError(titleInput, "#project-title-error") && !inputError(descInput, "#project-desc-error")) {
        addObjectToUser(
            newProjectObj(
                titleInput, 
                descInput, 
                privateCheck ? "Private" : "Public"),
            currentUser.projectsData);
            
        renderProjectCards();
        document.querySelector("#project-inputForm").reset();
    };
};

const changeProjectStatus = (_index) => {
    currentUser.projectsData[_index].open = !currentUser.projectsData[_index].open;
    renderProjectCards();
};

const deleteProject = (_index) => {
    currentUser.projectsData.splice(_index, 1);
    renderProjectCards();
};

// Packages
const submitNewPackage = () => {
    const packageTitleInput = document.querySelector("#package-form-name").value;
    const packageDescInput = document.querySelector("#package-form-description").value;

    if (!inputError(packageTitleInput, "#package-name-error") && !inputError(packageDescInput, "#package-desc-error")) {
        addObjectToUser(
            newPackageObj(
                packageTitleInput, 
                packageDescInput), 
            currentUser.packagesData);
            
        renderToDOM("#packages-container", listOfCards(currentUser.packagesData, packageCardTemplate));
        document.querySelector("#package-inputForm").reset();
    };
};

// Bio Panel
const followUser = () => {
    if (currentUser.followers == 0) {
        followOtherUser();
        renderBioPanel();
    };
};

const changeUser = () => {
    switchUser();
    renderPage();
};