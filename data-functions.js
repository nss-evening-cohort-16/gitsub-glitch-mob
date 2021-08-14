import { constructSampleUser, sampleUserData1, sampleUserData2 } from "./data-samples";

// Register Sample Users
export const injectSampleData = () => {
  addNewUser(constructSampleUser(sampleUserData1));
  addNewUser(constructSampleUser(sampleUserData2));

  loginUser();
};


// Users

export let usersArray = [];
export let currentUser = {};

export const addNewUser = (_userObj) => {
  usersArray.push(_userObj);
  return usersArray;
};

export const loginUser = () => {
  changeCurrentUser(usersArray[0]);
};

const changeCurrentUser = (_newUser) => {
  return currentUser = _newUser;
};

export const addObjectToUser = (_newObj, _targetArray) => {
  _targetArray.push(_newObj);
  return _targetArray;
};