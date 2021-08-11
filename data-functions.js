// Sample Data
import { sampleUser1, sampleUser2, sampleRepo, samplePinnedRepo } from "./data-samples.js";
import { renderPackageCard, renderRepoCard } from "./DOM-elements.js";

export const injectSampleData = () => {
  addNewUser(sampleUser1);
  addNewUser(sampleUser2);

  changeCurrentUser(usersArray[0]);
};

// Users

let usersArray = [];
export let currentUser = {};

export const addNewUser = (_userObj) => {
  usersArray.push(_userObj);
  return usersArray;
};

const changeCurrentUser = (_newUser) => {
  saveUserData();
  currentUser = _newUser;
  loadUserData();

  return _newUser;
};

// Projects

let currentProjectsArray = [];

export const addNewProject = (_projectObj) => {
  currentProjectsArray.push(_projectObj);
  return currentProjectsArray;
};

const loadUserData = () => {
  if (currentUser !== {}) {
    // load overview data
    // load repo data
    currentProjectsArray = currentUser.projectsData;
    // load packages data
  }
};

const saveUserData = () => {
  if (currentUser !== {}) {
    // save overview data
    
    // save repo data
    currentUser.projectsData = currentProjectsArray;
    // save packages data
  }
};

export const pinnedRepolist = (taco) => {
    taco.forEach((pinnedRepo, i) => {
        renderOverviewContent(pinnedRepo.repoTitle,pinnedRepo.description, pinnedRepo.language);
    });
}

// Render Ropo's to DOM
export const listCards = (array) => {

    array.forEach((repoItem, i) => {
        renderRepoCard(repoItem.repoTitle, repoItem.description, repoItem.tags, repoItem.language, repoItem.lastUpdated);

})};




export const renderContent = () => {
    switch (window.location.pathname) {
        case "/repos.html":
            listCards(sampleRepo);
            break;

        case "/projects.html":
            renderProjectCard();
            break;

        case "/packages.html":
            renderPackageCard(samplePackage);
            break;

        default:
            // renderOverviewContent();
            break;
    };
};
