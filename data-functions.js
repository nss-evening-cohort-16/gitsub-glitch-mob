// Sample Data

import { sampleUser1, sampleUser2 } from "./data-samples.js";

export const injectSampleData = () => {
  addNewUser(sampleUser1);
  addNewUser(sampleUser2);

  changeCurrentUser(usersArray[0]);

  console.log(currentUser);
};

// Users

export let usersArray = [];
export let currentUser = {};

const addNewUser = (_userObj) => {
  usersArray.push(_userObj);
  return usersArray;
};

const changeCurrentUser = (_newUser) => {
  saveUserData();
  currentUser = _newUser;
  loadUserData();

  return _newUser;
};

const loadUserData = () => {
  if (currentUser !== {}) {
    // load overview data
    // load repo data
    // currentProjectsArray = currentUser.projectsData;
    // load packages data
  }
};

const saveUserData = () => {
  if (currentUser !== {}) {
    // save overview data
    // save repo data
    // currentUser.projectsData = currentProjectsArray;
    // save packages data
  }
};

// Render Ropo's to DOM
export const reposList = () => {
  let element = "";
  sampleRepo.forEach((repoItem, i) => {
      
      
      element += `
      <div class="card" style="width: 18rem;">
      <div class="repo-body">
      <div>
      <h5 class="repo-title">${repoItem.repoTitle}</h5>
      </div>
      <div>
      <h6 class="repo-text">${repoItem.description}</h6>
      </div>
      <div>
      <p class="repo-tags">${repoItem.tags}</p>
      </div>
      <div>
      <p class="repo-language">${repoItem.language}</p>
      <button href="#" class="repo-btn repo-btn-starred">Go somewhere</button>
      <button href="#" class="repo-btn repo-btn-branches">Go somewhere</button>
      <button href="#" class="repo-btn repo-btn-issues">Go somewhere</button>
      <button href="#" class="repo-btn repo-btn-lastUpdated">Go somewhere</button>
      </div>
      </div>
      </div>
      `;
    });
    renderToDOM("#list-container", element)
};
