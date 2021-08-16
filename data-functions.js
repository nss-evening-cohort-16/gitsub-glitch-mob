import { sampleUser1, sampleUser2 } from "./data-samples.js";

// Register Sample Users
export const injectSampleData = () => {
  addNewUser(sampleUser1());
  addNewUser(sampleUser2());

  loginUser(0);
};


// Users

let usersArray = [];
export let currentUser = {};

const addNewUser = (_userObj) => {
  usersArray.push(_userObj);
  return usersArray;
};

const loginUser = (_index) => {
  return currentUser = usersArray[_index];
};

export const addObjectToUser = (_newObj, _targetArray) => {
  _targetArray.push(_newObj);
  return _targetArray;
};

// Search

export const mapRepoObj = () => {
  
  const mappedRepoObj = currentUser.repoData.map(_repo => {
     _repo["repoTitle"]; 
  });
  return mappedRepoObj
};