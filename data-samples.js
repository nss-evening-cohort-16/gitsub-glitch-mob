// import { newUserObj } from "./data-structures";

// Users

// export const generateSampleUser = (_formInput) => {

//     const sampleUser = newUserObj(
//         _formInput.name,
//         _formInput.username,
//         _formInput.description,
//         _formInput.imgURL,
//         _formInput.location,
//         _formInput.email,
//         _formInput.website,
//         _formInput.twitter
//     );

//     // sampleUser.addNewOrg(sampleOrganization1);
//     // sampleUser.addNewOrg(sampleOrganization2);

//     // sampleUser.addNewProject(sampleProject);
//     // sampleUser.addNewPackage(samplePackage);
//     // sampleUser.addNewRepo(sampleRepos[0]);
//     // sampleUser.addNewRepo(sampleRepos[1]);
//     // sampleUser.addNewPinnedRepo(sampleRepos[0]);

//     return sampleUser;
// };


export const sampleUser1FormInput = {
    name: "Yue Zer",
    username: "yue_zer",
    description: "Software developer",
    imgURL: "https://www.sacmag.com/wp-content/uploads/sites/50/2020/12/HI_RES_FIN_IMG_8626.jpg",

    location: "Nashville, TN",
    email: "yue_zer@email.com",
    website: "http://www.yue_zer.biz",
    twitter: "@yue_zer"
};

export const sampleUser2FormInput = {
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

export const sampleOrganization1 = {
    name: "Friendly Folks Org",
    img: "https://i0.wp.com/raulotaolea.com/wp-content/uploads/2018/02/header_blog_800x469-1.jpg?fit=730%2C428&ssl=1"
};

export const sampleOrganization2 = {
    name: "Business Worker Foundation",
    img: "https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2018Q4/sales-org-structure/sales-organization-team-structure-header@2x.png"
};



// Projects

export const sampleProject = {
    title: "Project Title",
    description: "This is a description.",
    timeCreated: "Sun Aug 08 2021 22:39:03 GMT-0500 (Central Daylight Time)",
    lastUpdated: "Sun Aug 08 2021 22:39:03 GMT-0500 (Central Daylight Time)",
    privacy: "Public",
    status: "Open"
};


// Packages

export const samplePackage = {
    titleImage: "",
    title: "",
    description: "",
    beta: "?"
};


// Repos

export const sampleRepos = [

    {
        repoTitle: "Repo NUmber 1",
        description: "Test for repo 1",
        language: "JavaScript",
        tags: [],
        starred: 0,
        branches: 0,
        issues: 0,
        lastUpdated: Date(),
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
    }
];
