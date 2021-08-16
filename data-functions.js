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

export const switchUser = () => {
  currentUser.username === usersArray[0].username ? loginUser(1) : loginUser(0);
};

export const followOtherUser = () => {
  currentUser.username === usersArray[0].username ? usersArray[0].followers++ : usersArray[1].followers++;
  currentUser.username === usersArray[0].username ? usersArray[1].following++ : usersArray[0].following++;
};

export const addObjectToUser = (_newObj, _targetArray) => {
  _targetArray.push(_newObj);
  return _targetArray;
};