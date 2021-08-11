import { generateSampleUser, sampleUser1FormInput, sampleUser2FormInput } from "./data-samples";

// Sample Data
export const injectSampleData = () => {
  addNewUser(generateSampleUser(sampleUser1FormInput));
  addNewUser(generateSampleUser(sampleUser2FormInput));
  
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
