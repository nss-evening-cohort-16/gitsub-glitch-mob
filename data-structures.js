// Profile Panel
const defaultUserImg = "https://user-images.githubusercontent.com/11250/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpg";

export const newUserObj = (_name, _username, _description, _imgURL = defaultUserImg, _location = "", _email = "", _website = "", _twitter = "") => {
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
        addNewHighlight: function(__hlObj){
            return this.highlights.push(__hlObj)
        },
        orgs: [],
        addNewOrg: function(__orgObj){
            return this.orgs.push(__orgObj)
        },
        sponsors: [],
        addNewSponsor: function(__sponsorObj){
            return this.sponsors.push(__sponsorObj)
        },

        pinnedRepos: [],
        addNewPinnedRepo: function(__repoObj){
            return this.pinnedRepos.push(__repoObj)
        },
        repos: [],
        addNewRepo: function(__repoObj){
            return this.repos.push(__repoObj)
        },
        projects: [],
        addNewProject: function(__projObj){
            return this.projects.push(__projObj)
        },
        packages: [],
        addNewPackage: function(__packObj){
            return this.packages.push(__packObj)
        }
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
export const newPackageObj = (_titleImage, _title, _description, _beta) => {
    return {
        titleImage: "",
        title: "",
        description: "",
        beta: "?"
  };
};