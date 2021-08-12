// Users

export const sampleUser1 = {
    name: "Yue Zer",
    username: "yue_zer",
    description: "Software developer",
    img: "https://www.sacmag.com/wp-content/uploads/sites/50/2020/12/HI_RES_FIN_IMG_8626.jpg",

    followers: 20,
    following: 10,
    starred: 0,

    location: "Nashville, TN",
    email: "yue_zer@email.com",
    website: "http://www.yue_zer.biz",
    twitter: "@yue_zer",

    highlights: [],
    orgs: [
        {
            name: "Friendly Folks Org",
            img: "https://i0.wp.com/raulotaolea.com/wp-content/uploads/2018/02/header_blog_800x469-1.jpg?fit=730%2C428&ssl=1"
        }, {
            name: "Business Worker Foundation",
            img: "https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2018Q4/sales-org-structure/sales-organization-team-structure-header@2x.png"
        }],
    sponsors: [],

    repoData: [{
            repoTitle: "Repo NUmber 1",
            description: "Test for repo 1",
            language: "JavaScript",
            tags: [],
            starred: 0,
            branches: 0,
            issues: 0,
            lastUpdated: Date(),
        }, {
            repoTitle: "Repo NUmber 2",
            description: "Test for repo 2",
            language: "JavaScript",
            tags: [],
            starred: 0,
            branches: 0,
            issues: 0,
            lastUpdated: Date(),
        }],

    addRepoData: function(__newRepo) {
        return this.repoData.push(__newRepo)
    },

    projectsData: [
        {
            title: "Project Title",
            description: "This is a description.",
            timeCreated: "Sun Aug 08 2021 22:39:03 GMT-0500 (Central Daylight Time)",
            lastUpdated: "Sun Aug 08 2021 22:39:03 GMT-0500 (Central Daylight Time)",
            privacy: "Public",
            status: "Open"
        }],

    packagesData: [{
        titleImage: "",
        title: "",
        description: "",
        beta: "?"
        }]
};

export const sampleUser2 = {
    name: "John Doe",
    username: "doe_j",
    description: "Business executive",
    img: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2016/02/Headshot-Photography-London-0997.jpg?ssl=1",

    followers: 200,
    following: 1,
    starred: 0,

    location: "New York, NY",
    email: "doe_j@email.com",
    website: "https://www.john-doe.org",
    twitter: "@doe_j",

    highlights: [],
    orgs: [
        {
            name: "Friendly Folks Org",
            img: "https://i0.wp.com/raulotaolea.com/wp-content/uploads/2018/02/header_blog_800x469-1.jpg?fit=730%2C428&ssl=1"
        }, {
            name: "Business Worker Foundation",
            img: "https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2018Q4/sales-org-structure/sales-organization-team-structure-header@2x.png"
        }],
    sponsors: [],

    overviewData: [],
    repoData: [],
    projectsData: [],
    packagesData: []
};





// Organizations

const sampleOrganization1 = {
    name: "Friendly Folks Org",
    img: "https://i0.wp.com/raulotaolea.com/wp-content/uploads/2018/02/header_blog_800x469-1.jpg?fit=730%2C428&ssl=1"
};

const sampleOrganization2 = {
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

export const samplePackage = [
        {
        titleImage: "",
        title: "",
        description: "",
        beta: "?"
        }
];


// Repos

export const sampleRepo = [

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
