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
export const newRepo = (_repoTitle, _description, ) => {
    return {
        repoTitle: "",
        description: "",
        language: "",
        tags: [],
        starred: 0,
        branches: 0,
        issues: 0,
        lastUpdated: "",
    };
}

// Projects Page


// Packages Page