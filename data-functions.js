// Sample Data

import { sampleUser1, sampleUser2 } from "./data-samples.js";
import { renderPackagesContent } from "./DOM-elements.js";
import { sampleUser1, sampleUser2, sampleRepo } from "./data-samples.js";
import { renderPackagesContent, renderReposContent } from "./DOM-elements.js";

export const injectSampleData = () => {
  addNewUser(sampleUser1);
  addNewUser(sampleUser2);

  changeCurrentUser(usersArray[0]);

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

// Render Ropo's to DOM
export const reposList = (array) => {

    array.forEach((repoItem, i) => {
        renderReposContent(repoItem.repoTitle, repoItem.description, repoItem.tags, repoItem.language, repoItem.lastUpdated);

})};

