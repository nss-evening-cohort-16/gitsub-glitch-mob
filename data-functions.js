// Sample Data

import { sampleUser1, sampleUser2 } from "./data-samples.js";

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
  return currentUser = _newUser;
};
  


// Repos
export const repoFormInput = () => {
  return {
      repoTitle: document.querySelector("#repo-title").value,
      description: document.querySelector("#repo-description").value,
      language: document.querySelector("#repo-language").value,
      tags: [],
      starred: 0,
      branches: 0,
      issues: 0,
      lastUpdated: Date(),
  }

};
