import { newUserObj } from "./data-structures.js";
import { addObjectToUser } from "./data-functions.js";

// Generate Sample Users
export const sampleUser1 = () => {
    return constructSampleUser(sampleUserData1);
};
export const sampleUser2 = () => {
    return constructSampleUser(sampleUserData2);
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


// User Data
const sampleUserData1 = {
    name: "Yue Zer",
    username: "yue_zer",
    description: "Software developer",
    imgURL: "https://www.sacmag.com/wp-content/uploads/sites/50/2020/12/HI_RES_FIN_IMG_8626.jpg",

    location: "Nashville, TN",
    email: "yue_zer@email.com",
    website: "http://www.yue_zer.biz",
    twitter: "@yue_zer"
};

const sampleUserData2 = {
    name: "John Doe",
    username: "doe_j",
    description: "Business executive",
    imgURL: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2016/02/Headshot-Photography-London-0997.jpg?ssl=1",

    location: "New York, NY",
    email: "doe_j@email.com",
    website: "https://www.john-doe.org",
    twitter: "@doe_j"
};



// Organizations
const sampleOrganizations = [
    {
        name: "Friendly Folks Org",
        img: "https://i0.wp.com/raulotaolea.com/wp-content/uploads/2018/02/header_blog_800x469-1.jpg?fit=730%2C428&ssl=1"
    }, 
    {
        name: "Business Worker Foundation",
        img: "https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2018Q4/sales-org-structure/sales-organization-team-structure-header@2x.png"
    }
];


// Repos
const sampleRepos = [
    {
        repoTitle: "Repo NUmber 1",
        description: "Test for repo 1",
        language: "JavaScript",
        tags: [],
        starred: 0,
        branches: 0,
        issues: 0,
        lastUpdated: Date(),
        pinned: false,
    },
    {
        repoTitle: "Repo NUmber 2",
        description: "Test for repo 2",
        language: "JavaScript",
        tags: [],
        starred: 0,
        branches: 0,
        issues: 0,
        lastUpdated: Date(),
        pinned: false,
    }
];

// Projects
const sampleProjects = [
    {
        title: "Project Title",
        description: "This is a description.",
        timeCreated: "Sun Aug 08 2021 22:39:03 GMT-0500 (Central Daylight Time)",
        lastUpdated: "Sun Aug 08 2021 22:39:03 GMT-0500 (Central Daylight Time)",
        privacy: "Public",
        status: "Open"
    }
];

// Packages
const samplePackages = [
    {
        titleImage: "",
        title: "",
        description: "",
        beta: "?"
    }
];