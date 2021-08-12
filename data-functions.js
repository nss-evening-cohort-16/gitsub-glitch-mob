import { generateSampleUser, sampleUser1FormInput, sampleUser2FormInput } from "./data-samples";

// Sample Data
export const injectSampleData = () => {
  // addNewUser(generateSampleUser(sampleUser1FormInput));
  // addNewUser(generateSampleUser(sampleUser2FormInput));
  addNewUser(generateNewUser(
    sampleUser1FormInput.name, 
    sampleUser1FormInput.username, 
    sampleUser1FormInput.description, 
    sampleUser1FormInput.imgURL, 
    sampleUser1FormInput.location, 
    sampleUser1FormInput.email, 
    sampleUser1FormInput.website, 
    sampleUser1FormInput.twitter))

  console.log(usersArray[0]);
  changeCurrentUser(usersArray[0]);
};



// Users

const usersArray = [];
export let currentUser = {};

const addNewUser = (_userObj) => {
  usersArray.push(_userObj);
  return usersArray;
};

const changeCurrentUser = (_newUser) => {
  return currentUser = _newUser;
};


const generateNewUser = (_name, _username, _description, _imgURL, _location, _email, _website, _twitter) => {

  const newUser = newUserObj(
      _name,
      _username,
      _description,
      _imgURL,
      _location,
      _email,
      _website,
      _twitter
  );

  // sampleUser.addNewOrg(sampleOrganization1);
  // sampleUser.addNewOrg(sampleOrganization2);

  // sampleUser.addNewProject(sampleProject);
  // sampleUser.addNewPackage(samplePackage);
  // sampleUser.addNewRepo(sampleRepos[0]);
  // sampleUser.addNewRepo(sampleRepos[1]);
  // sampleUser.addNewPinnedRepo(sampleRepos[0]);

  return newUser;
};