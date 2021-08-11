// Profile Panel

const defaultUserImg = "https://user-images.githubusercontent.com/11250/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpg";

export const newUser = (_name, _username, _description, _imgURL = defaultUserImg, _location = "", _email = "", _website = "", _twitter = "") => {
    return {
        name: _name,
        username: _username,
        description: _description,
        img: _imgURL,

        followers: 0,
        following: 0,
        starred: 0,

        location: _location,
        email: _email,
        website: _website,
        twitter: _twitter,

        highlights: [],
        orgs: [],
        sponsors: [],

        overviewData: [],
        repoData: [],
        projectsData: [],
        packagesData: []
    };
};



// Overview Page



// Repos Page
export const newRepo = (_repoTitle, _description, _language) => {
    return {
        repoTitle: _repoTitle,
        description: _description,
        language: _language,
        tags: [],
        starred: 0,
        branches: 0,
        issues: 0,
        lastUpdated: Date(),
    };
};


// Projects Page
export const newProjectObj = (_title, _description, _privacy) => {
    return {
        title: _title,
        description: _description,
        timeCreated: Date(),
        lastUpdated: Date(),
        privacy: _privacy,
        status: "Open"
    }
};


// Packages Page
export const newPackages = (_titleImage, _title, _description, _beta) => {
    return {
        titleImage: "",
        title: "",
        description: "",
        beta: "?"
  };
};