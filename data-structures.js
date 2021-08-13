// Profile Panel
const defaultUserImg = "https://user-images.githubusercontent.com/11250/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpg";

export const newUser = (_name, _username, _description, _imgURL = defaultUserImg, _location = "", _email = "", _website = "", _twitter = "") => {
    return {
        name: _name,
        username: _username,
        description: _description,
        imgURL: _imgURL,

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

        repoData: [],
        projectsData: [],
        packagesData: []
    };
};

// Repos Page
export const newRepoObj = (_repoTitle, _description, _tags, _language) => {
    return {
        repoTitle: _repoTitle,
        description: _description,
        tags: _tags,
        language: _language,
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
export const newPackageObj = (_titleImage, _title, _description) => {
    return {
        titleImage: "",
        title: "",
        description: "",
  };
};




/////// WORKSPACE \\\\\\\\\


export const newUserObj = (_name, _username, _description, _imgURL = defaultUserImg, _location = "", _email = "", _website = "", _twitter = "") => {
        this.name = _name,
        this.username = _username,
        this.description = _description,
        this.imgURL = _imgURL,

        this.followers = 0,
        this.following = 0,
        this.starred = 0,

        this.location = _location,
        this.email = _email,
        this.website = _website,
        this.twitter = _twitter,

        this.highlights = [],
        this.orgs = [],
        this.sponsors = [],

        this.repoData = [],
        this.projectsData = [],
        this.packagesData = []
};