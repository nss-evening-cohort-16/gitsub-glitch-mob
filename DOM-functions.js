import { pinnedRepoCardTemplate, projectsContent, projectCardTemplate, projectForm, packageCardTemplate, packageForm, packagesContent, reposContent, repoCardTemplate, repoForm, pageLayout, header, footer, bioPanel, simpleRepoCardTemplate, pinRepoForm, newProjectBtn} from "./DOM-elements.js";
import { addObjectToUser, currentUser, deleteObjectFromUser, followOtherUser, switchUser } from "./data-functions.js";
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
    renderToDOM("#form-container", pinRepoForm);
    renderPinnedReposList();
    renderUnpinnedReposList();  
};

const renderUnpinnedReposList = ()=> {
    renderToDOM("#pinnedRepoForm-card-container", listOfCards(currentUser.repoData, simpleRepoCardTemplate, "pinned" , false));  
};

const renderPinnedReposList = () => {
    renderToDOM("#list-container", listOfCards(currentUser.repoData, pinnedRepoCardTemplate , "pinned", true));
};

// Repos Page
const renderReposPage = () => {
    renderToDOM("#list-container", reposContent)
    renderToDOM("#form-container", repoForm);

    renderRepoCards();
};

const renderRepoCards = (_keyFilter, _filterValue) => {
    renderToDOM("#repo-list-container", listOfCards(currentUser.repoData, repoCardTemplate, _keyFilter, _filterValue));
};

// Projects Page
let filterForOpenProjects = true;

const renderProjectsPage = () => {
    renderProjectsContentContainer();
    renderProjectCards();

    renderNewProjectButton();
};

const renderProjectsContentContainer = () => {
    renderToDOM("#list-container", projectsContent(filterForOpenProjects));
};

const renderNewProjectButton = () => {
    renderToDOM("#form-container", newProjectBtn);
};

const renderProjectForm = () => {
    renderToDOM("#form-container", projectForm);
};

const renderProjectCards = (_keyFilter = "open", _filterValue = filterForOpenProjects) => {    
    renderToDOM("#projects-list-container", listOfCards(currentUser.projectsData, projectCardTemplate, _keyFilter, _filterValue));
};

// Packages Page
const renderPackagesPage = () => {
    renderToDOM("#list-container", packagesContent);
    renderPackageCards();
    renderToDOM("#form-container", packageForm);
};

const renderPackageCards = (_keyFilter, _filterValue) => {
    renderToDOM("#packages-list-container", listOfCards(currentUser.packagesData, packageCardTemplate, _keyFilter, _filterValue));
}

//// Rendering and Events \\\\

// Render Function
const renderToDOM = (_targetDivID, _element, _clear = true) => {
    const targetDiv = document.querySelector(_targetDivID);
  
    _clear ? (targetDiv.innerHTML = _element) : (targetDiv.innerHTML += _element);
  };

// Generate a string containing a list of Cards
const listOfCards = (_objectDataArray, _cardTemplate, _filter = null, _filterValue = null) => {
    let cardString = "";
    const addCardToList = (_object, _index) => { 
        cardString += _cardTemplate(_object, _index); 
    };

    _objectDataArray.forEach((__obj, __i) => {
        switch(typeof(_filterValue)) {
            case "boolean":
                if (__obj[_filter] === _filterValue) {
                    addCardToList(__obj, __i);
                };
                break;
            
            case "string":
                for (String of _filter) {
                    if (__obj[String].toLowerCase().includes(_filterValue.toLowerCase())) {
                        addCardToList(__obj, __i);
                        break;
                    };                    
                };
                break;
            
            default:
                addCardToList(__obj, __i);
                break;
        };
    });

    return cardString;
};

// Render objects with search term included in Title or Description
const searchObjects = (_searchBarID, _renderCardsFunction, _searchKeys = ["title", "description"]) => {
    const searchTerm = document.querySelector(_searchBarID).value;

    _renderCardsFunction(_searchKeys, searchTerm);
};

// Print error if form fields are empty
const inputError = (_input, _errorTextDiv) => {
    return document.querySelector(_errorTextDiv).innerHTML = _input ? "" : "Field required.";
};

// Handle button clicks
export  const registerEvents = () => {
    document.querySelector("body").addEventListener("click", buttonClicks)
}; 

const buttonClicks = (_event) => {
    const [targetID, targetIndex] = _event.target.id.split("--");

    switch(targetID) {
    
    // Overview Page Buttons \\ 
        // pinned repo submit button
        case "pin-repo":
            currentUser.repoData[targetIndex].pinned = true;
            renderPinnedReposList();
            renderUnpinnedReposList();
            break;

        case "pinned-repo-deleteBtn":
            currentUser.repoData[targetIndex].pinned = false;
            renderPinnedReposList();
            renderUnpinnedReposList();
            break;
    
//delete pinned Repo
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

        // Submit "Search" button
        case "repos-list-sort-sort":            
            searchObjects("#repo-searchbar", renderRepoCards, ["title", "description", "language"])
            break;

    // Projects Page Buttons \\
        // Create New Project button
        case "create-project-btn":
            renderProjectForm();
            break;

        // Project Form Submit button
        case "project-form-submitBtn":
            _event.preventDefault();
            submitNewProject();            
            break;
        
        // Project Form Cancel button
        case "project-form-cancelBtn":
            renderNewProjectButton();
            break;

        // Search Projects button
        case "projects-search-button":
        case "projects-search-btn-img":
            searchObjects("#projects-searchbar", renderProjectCards);
            break;

        // Delete project button
        case "project-deleteBtn":
            deleteObjectFromUser(currentUser.projectsData, targetIndex);
            renderProjectCards();
            break;

        // Change Privacy button
        case "project-card-privacy":
            changeProjectPrivacy(targetIndex);
            break;

        // Open or Close project button
        case "project-card-status":
            changeProjectStatus(targetIndex);
            break;

        // Filter by Open/Closed button
        case "projects-list-filter":
            filterOpenClosed(targetIndex);
            break;

        // Sort by


    // Packages Page Buttons \\
        // Package Form Submit Button
        case "package-form-submitBtn":
            _event.preventDefault();
            submitNewPackage();            
            break;

        // Search Projects button
        case "packages-search-button":
        case "packages-search-btn-img":
            searchObjects("#packages-searchbar", renderPackageCards);
            break;

        case "package-deleteBtn":
            deletePackage(targetIndex);
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


//////// Button Functions \\\\\\\\

//// Overview \\\\

//// Repos \\\\
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
};

//// Projects \\\\
// Create new project
const submitNewProject = () => {
    const titleInput = document.querySelector("#project-form-title").value;
    const descInput = document.querySelector("#project-form-description").value;
    const privateCheck = document.querySelector("#project-form-privacy").checked;

    if (!inputError(titleInput, "#project-title-error") && !inputError(descInput, "#project-desc-error")) {
        addObjectToUser(
            newProjectObj(
                titleInput, 
                descInput, 
                privateCheck),
            currentUser.projectsData);
            
        renderProjectCards();
        renderNewProjectButton();
    };
};

// Render only Open projects or Closed projects
const filterOpenClosed = (_buttonID) => {
    filterForOpenProjects = _buttonID === "open" ? false : true;
    renderProjectsContentContainer();
    renderProjectCards("open", filterForOpenProjects);
};

// Update the "Last Updated" attribute
const projectUpdated = (_index) => {
    currentUser.projectsData[_index].lastUpdated = new Date().toLocaleString();
};
 
// Toggle project between Public and Private status
const changeProjectPrivacy = (_index) => {
    currentUser.projectsData[_index].private = !currentUser.projectsData[_index].private;
    projectUpdated(_index);
    renderProjectCards();
};

// Toggle project between Open and Closed status
const changeProjectStatus = (_index) => {
    currentUser.projectsData[_index].open = !currentUser.projectsData[_index].open;
    projectUpdated(_index);
    renderProjectCards();
};

//// Packages \\\\
const submitNewPackage = () => {
    const packageTitleInput = document.querySelector("#package-form-name").value;
    const packageDescInput = document.querySelector("#package-form-description").value;

    if (!inputError(packageTitleInput, "#package-name-error") && !inputError(packageDescInput, "#package-desc-error")) {
        addObjectToUser(
            newPackageObj(
                packageTitleInput, 
                packageDescInput), 
            currentUser.packagesData);
            
            renderPackageCards();
        document.querySelector("#package-inputForm").reset();
    };
};

const deletePackage = (_index) => {
    currentUser.packagesData.splice(_index, 1);
    renderPackageCards();
};

//// Bio Panel \\\\
// Follow the other user
const followUser = () => {
    if (currentUser.followers == 0) {
        followOtherUser();
        renderBioPanel();
    };
};

// Switch to the other user
const changeUser = () => {
    switchUser();
    renderPage();
};
