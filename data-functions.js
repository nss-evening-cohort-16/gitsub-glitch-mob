import { sampleUserData1, sampleUserData2, sampleOrganizations, sampleRepos, samplePackages, sampleProjects } from "./data-samples";
import { newUserObj } from "./data-structures";

// Register Sample Users
export const injectSampleData = () => {
  addNewUser(constructSampleUser(sampleUserData1));
  addNewUser(constructSampleUser(sampleUserData2));

  loginUser();
};


// Users

export let usersArray = [];
export let currentUser = {};

const addNewUser = (_userObj) => {
  usersArray.push(_userObj);
  return usersArray;
};

const loginUser = () => {
  changeCurrentUser(usersArray[0]);
};

const changeCurrentUser = (_newUser) => {
  return currentUser = _newUser;
};

export const addObjectToUser = (_newObj, _targetArray) => {
  _targetArray.push(_newObj);
  return _targetArray;
};


// Sample User Constructor
const constructSampleUser = (_sampleUserData) => {
  const user = newUserObj(
    _sampleUserData.name,
    _sampleUserData.username,
    _sampleUserData.description,
    _sampleUserData.imgURL,
    _sampleUserData.location,
    _sampleUserData.email,
    _sampleUserData.website,
    _sampleUserData.twitter
  );

  sampleOrganizations.forEach(org => {
    addObjectToUser(org, user.orgs);
  });
  sampleRepos.forEach(repo => {
    addObjectToUser(repo, user.repoData);
  });
  sampleProjects.forEach(proj => {
    addObjectToUser(proj, user.projectsData);
  });
  samplePackages.forEach(pack => {
    addObjectToUser(pack, user.packagesData);
  });

  return user;
};