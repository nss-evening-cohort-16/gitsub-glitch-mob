import { pinnedRepoCardTemplate, projectsContent, projectCardTemplate, projectForm, packageCardTemplate, packageForm, packagesContent, reposContent, repoCardTemplate, repoForm, pageLayout, header, footer, bioPanel, simpleRepoCardTemplate, pinRepoForm, newProjectBtn} from "./DOM-elements.js";
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
    renderUnpinnedReposList();  

};

const renderUnpinnedReposList = ()=> {
    renderToDOM("#pinnedRepoForm-card-container", listOfCards(currentUser.repoData, simpleRepoCardTemplate));  
};

const renderPinnedReposList = () => {
    renderToDOM("#list-container", listOfCards(currentUser.repoData, pinnedRepoCardTemplate));
}
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
    renderNewProjectButton();

    renderProjectCards();
};

const renderNewProjectButton = () => {
    renderToDOM("#form-container", newProjectBtn);
};

const renderProjectForm = () => {
    renderToDOM("#form-container", projectForm);
};

let filterForPrivateProjects = true;
const btnRed = "#dc3545";
const btnGreen = "#198754";

const renderProjectCards = (_filter = "open", _filterValue = filterForPrivateProjects) => {    
    renderToDOM("#projects-list-container", listOfCards(currentUser.projectsData, projectCardTemplate, _filter, _filterValue));

    currentUser.projectsData.forEach((__proj, __i) => {
        if (document.getElementById("project-card--" + __i)) {
            document
                .getElementById("project-card-status--" + __i)
                .style
                .backgroundColor = currentUser.projectsData[__i].open ? btnGreen : btnRed;

            document
                .getElementById("project-card-privacy--" + __i)
                .style
                .backgroundColor = currentUser.projectsData[__i].private ? btnRed : btnGreen;
            };
        });
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
    
    // Log clicked target -- Debug purposes
    console.log("Target: (ID: " + targetID + ") (Index: " + targetIndex + ")");

    switch(targetID) {
    
    // Overview Page Buttons \\ 
    //pinned repo submit button
    case "pin-repo":
       console.log(targetIndex);
        currentUser.repoData[targetIndex].pinned = true;
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

        // Delete project button
        case "project-deleteBtn":
            deleteProject(targetIndex);
            break;

        // Change Privacy button
        case "project-card-privacy":
            changeProjectPrivacy(targetIndex);
            break;

        // Open or Close project button
        case "project-card-status":
            changeProjectStatus(targetIndex);
            break;
        
        // Submit "Search" button

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
                privateCheck),
            currentUser.projectsData);
            
        renderProjectCards();
        renderNewProjectButton();
    };
};

const filterOpenClosed = (_buttonID) => {
    filterForPrivateProjects = _buttonID === "open" ? true : false;
    renderProjectCards("open", _buttonID === "open" ? true : false);
};

const projectUpdated = (_index) => {
    currentUser.projectsData[_index].lastUpdated = Date();
};

const changeProjectPrivacy = (_index) => {
    currentUser.projectsData[_index].private = !currentUser.projectsData[_index].private;
    projectUpdated(_index);
    renderProjectCards();
};

const changeProjectStatus = (_index) => {
    currentUser.projectsData[_index].open = !currentUser.projectsData[_index].open;
    projectUpdated(_index);
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

const deletePackage = (_index) => {
    currentUser.packagesData.splice(_index, 1);
    renderToDOM("#packages-container", listOfCards(currentUser.packagesData, packageCardTemplate));
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
