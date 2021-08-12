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


