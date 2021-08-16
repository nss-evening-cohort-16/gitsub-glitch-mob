// Basic page layout
export const pageLayout = `<div id="page-body">
        <div id="page-bio" class="panel"></div>

        <div id="page-viewer">
            <div id="page-navbar" class="panel"></div>
            <div id="page-content">
                <div id="list-container" class="panel"></div>
                <div id="form-container" class="panel"></div>
            </div>
        </div>
    </div>

    <div id="page-footer" class="panel"></div>`;

// User bio profile
export const bioPanel = (_currentUser) => {
  return `
        <img id="bio-img" src="${_currentUser.imgURL}" alt="User's profile image">
        <div id="bio-namesTray">
            <div id="bio-name">${_currentUser.name}</div>
            <div id="bio-username">/${_currentUser.username}</div>
        </div>
        <div id="bio-description">${_currentUser.description}</div>

        <div id="bio-interactBtns">
            <button id="btn-follow" class="btn btn-secondary btn-sm bio-btn">Follow</button>
            <button id="btn-sponsor" class="btn btn-secondary btn-sm bio-btn">Sponsor</button>
            <button id="btn-more" class="btn btn-secondary btn-sm bio-btn">...</button>
        </div>
        <div id="bio-followerTray">
            <div id="bio-followers">${_currentUser.followers} Followers</div>
            <div id="bio-following">${_currentUser.following} Following</div>
            <div id="bio-stars">&#9734; ${_currentUser.starred}</div>
        </div>
        <div id="bio-contact">
            <div id="bio-location">${_currentUser.location}</div>
            <div id="bio-email">${_currentUser.email}</div>
            <div id="bio-website">${_currentUser.website}</div>
            <div id="bio-twitter">${_currentUser.twitter}</div>
        </div>

        <div id="bio-highlights">
            <h3>Highlights</h3>
            <div id="highlights-list">${_currentUser.highlights}</div>
        </div>
        <div id="bio-orgs">
            <h3>Organizations</h3>
            <div id="orgs-list">${_currentUser.orgs}</div>
        </div>
        <div id="bio-sponsors">
            <h3>Sponsors</h3>
            <div id="sponsors-list">${_currentUser.sponsors}</div>
        </div>
        <button id="btn-changeUser" class="btn btn-secondary btn-sm bio-btn">Change User</button>
        `;
};

// Header / NavBar
export const header = `
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="index.html" id ="Overview">Overview</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="repos.html" id="Repositories">Repositories</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="projects.html" id ="Projects">Projects</a>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="packages.html" id ="Packages">Packages</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>`;

// Footer
export const footer = `<div id="yr-updated">2021 Us</div>
        <div id="terms-btn">Terms</div>
        <div id="privacy-btn">Privacy</div>
        <div id="security-btn">Security</div>
        <div id="status-btn">Status</div>
        <div id="help-btn">Help</div>
    <div id="footer-img">"Image"</div>
        <div id="catact-btn">Contact</div>
        <div id="pricing-btn">Pricing</div>
        <div id="api-btn">API</div>
        <div id="training-btn">Training</div>
        <div id="blog-btn">Blog</div>
        <div id="about-btn">About</div>
    `;

////// Card Templates and Forms \\\\\\

//// Overview \\\\\

// Card Template
export const pinnedRepoCardTemplate = (_repoDataObj) => {
  return `
    <div class="card" style="width: 18rem;"> 
      <div class="repo-body">
        <div>
          <h5 class="pinnedrepo-title">${_repoDataObj.repoTitle}</h5>
        </div>
        <div>
          <h6 class="pinnedrepo-text">${_repoDataObj.description}</h6>
        </div>
        <div>
          <p class="pinnedrepo-language">${_repoDataObj.language}</p>
          <div> 
            <button href="#" class="repo-btn repo-btn-starred">0</button>
          </div>
          <div>
            <p>Branches:</p>
            <p href="#" class="repo-btn repo-btn-branches">0</p>
          </div>
          <div>
            <p>Issues: </p>
            <p href="#" class="repo-btn repo-btn-issues">0</p>
          </div>
        </div>
      </div>
    </div>
    `;
};

// Form
export const simpleRepoCardTemplate = (_repoDataObj,_index) => {
  
  return `
      <div class="card" style="width: 18rem;" id = "simplerepocard--${_index}> 
        <div class="repo-body">
          <div>
            <h5 class="pinnedrepo-title">${_repoDataObj.repoTitle}</h5>
          </div>
            <div> 
              <button type = "button" id="pin-repo--${_index}" class="Pinnedrepo-btn">Pin Repos</button>
            </div>
          </div>
      `
};
    
export const pinRepoForm  = 
  `<div id="page-body">
          <div id="pinnedRepoForm-card-container" class="pinnedRepository"></div>
      </div>
 `;

//// Repos \\\\

// Layout
export const reposContent = `
<h2 id="repo-container-label">Repository</h2>
<input id="repo-searchbar" type="text" placeholder="Search...">
<div id="repos-container">
  <div id="repos-list-header">
    <button class="repos-sort-btn" id="repos-list-sort-sort">Sort</button>
    <button class="repos-sort-btn" id="repos-list-sort-closed">Closed</button>
    <button class="repos-sort-btn" id="repos-list-sort-open">Open</button>
  </div>
  <div id="repo-list-container"></div>
</div>
`;

// Card Template
export const repoCardTemplate = (_repoDataObj, _index) => {
  return `
   <div class="card" id="repos-card--${_index}"> 
      <div class="repo-body">
        <div>
          <h5 class="repo-title">${_repoDataObj.repoTitle}</h5>
        </div>
        <div>
          <h6 class="repo-text">${_repoDataObj.description}</h6>
        </div>
        <div>
          <p class="repo-tags">${_repoDataObj.tags}</p>
        </div>
        <div>
          <p class="repo-language">${_repoDataObj.language}</p>
          <div> 
            <button href="#" class="repo-btn repo-btn-starred">0</button>
          </div>
          <div>
            <p>Branches:</p>
            <p href="#" class="repo-btn repo-btn-branches">0</p>
          </div>
          <div>
            <p>Issues: </p>
            <p href="#" class="repo-btn repo-btn-issues">0</p>
          </div>
          <div>
            <p>Last Updated:</p>
            <p href="#" class="repo-btn repo-btn-lastUpdated">${_repoDataObj.lastUpdated}</p>
          </div>
        </div>
      </div>
      <button class="btn btn-danger delete-btn" id="repo-deleteBtn--${_index}">Delete</button>
  </div>
  `;
};

// Form
export const repoForm =  `
     <form id="repo-inputForm">
        <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Repositories Title:</label>
            <input type="text" class="form-control" id="repo-form-title" placeholder="Input Repositories Title">
            <div class="error-container" id="repo-title-error"></div>
        </div>
        <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Repositories Description</label>
            <textarea class="form-control" id="repo-form-description" placeholder="Input Repositories Description"></textarea>
            <div class="error-container" id="repo-desc-error"></div>    
        </div>
        <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Repositories Tags</label>
            <textarea class="form-control" id="repo-form-tags" placeholder="Input Repositories Tags"></textarea>
            <div class="error-container" id="repo-tag-error"></div>
        </div>
        <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Repositories Language</label>
            <input required type="text" class="form-control" id="repo-form-language" placeholder="Input Repositories Language">
            <div class="error-container" id="repo-lang-error"></div>
        </div>

        <button id="repo-form-submitBtn" type="submit" class="btn btn-primary">Submit</button>    
    </form>
    `;

//// Projects \\\\

// Layout
export const projectsContent = (_filterForOpenProjects) => {
  return `
    <div class="panel" id="projects-container">
      <h2 id="projects-container-label">Projects</h2>
      <br>
      <div id="projects-search-container">
        <input class="form-control" id="projects-searchbar" type="text" placeholder="Search...">
        <button id="projects-search-button">
          <img id="projects-search-btn-img" src="https://cdn3.iconfinder.com/data/icons/search-engine-optimization-seo-3/320/loupe_magnifier_magnifying_search-512.png"</img>
        </button>
      </div>
        <div id="projects-list-header">
          <div id="projects-list-filterBtn-container">
          ` + (_filterForOpenProjects ? filterOpenButton : filterClosedButton) + `
          </div>
          <div id="projects-list-sortBtn-container">
            <button class="btn btn-secondary btn-sm projects-sort-btn" id="projects-list-sort-sort">Sort...</button>
          </div>
        </div>
        <hr>
        <div id="projects-list-container"></div>
    </div>
  `;
};

// Filter: Open/Closed buttons
const filterOpenButton = `<button class="btn btn-success btn-sm projects-sort-btn" id="projects-list-filter--open">Filter: Open</button>`;
const filterClosedButton = `<button class="btn btn-danger btn-sm projects-sort-btn" id="projects-list-filter--closed">Filter: Closed</button>`;

// Card Template
export const projectCardTemplate = (_projectDataObj, _index) => {
  return `
    <div class="project-card panel" id="project-card--${_index}">
      <div class="project-card-content-container">
        <div class="project-card-data project-card-title">${_projectDataObj.title}</div>
        <div class="project-card-data project-card-description">${_projectDataObj.description}</div> 
      </div>  
      <hr>
      <div class="project-card-data-container">
        <div class="project-card-info-container">
          <div class="project-card-dates">
            <div class="project-card-data project-card-created"><u>Created:</u> ${_projectDataObj.timeCreated}</div> 
            <div class="project-card-data project-card-updated"><u>Last Updated:</u> ${_projectDataObj.lastUpdated}</div> 
          </div>
          <button class="btn btn-sm ` + (_projectDataObj.private ? "btn-danger" : "btn-success") + ` project-card-data project-card-privacy" id="project-card-privacy--${_index}">Privacy: ` + (_projectDataObj.private ? "Private" : "Public") + `</button> 
          <button class="btn btn-sm ` + (_projectDataObj.open ? "btn-success" : "btn-danger") + ` project-card-data project-card-status" id="project-card-status--${_index}">Status: ` + (_projectDataObj.open ? "Open" : "Closed") + `</button>
        </div>
        <button class="btn btn-sm btn-danger delete-btn" id="project-deleteBtn--${_index}">Delete</button>
      </div>
    </div>`;
};

// New Project Button
export const newProjectBtn = `
  <button class="btn btn-success" id="create-project-btn">Create New Project</button>
`;

// Form
export const projectForm = `
  <h2 id="project-form-label">Create New Project</h2>
  <form id="project-inputForm">
     <div class="mb-3">
        <label for="project-form-title" class="form-label">Project Title:</label><br>
        <input required type="text" class="form-control" id="project-form-title" placeholder="Title">
        <div class="error-container" id="project-title-error"></div>
     </div>
     <div class="mb-3">
        <label for="project-form-description" class="form-label">Project Description:</label><br>
        <textarea required class="form-control" id="project-form-description" placeholder="Description"></textarea>
        <div class="error-container" id="project-desc-error"></div>
     </div>
     <div class="mb-3">
     <input type="checkbox" id="project-form-privacy">
         <label for="project-form-privacy" class="form-label">Private</label>
     </div>

     <button id="project-form-submitBtn" class="btn btn-primary">Submit</button>    
     <button id="project-form-cancelBtn" class="btn btn-danger">Cancel</button>    
  </form>`;

//// Packages \\\\

// Layout
export const packagesContent = `
      <h2 id="packages-container-label">Packages</h2>
      <input id="packages-searchbar" type="text" placeholder="Search...">
      <div>
        <div id="packages-list-header">
          <button class="btn btn-secondary btn-sm packages-sort-btn" id="packages-list-sort-sort">Sort...</button>
          <button class="btn btn-secondary btn-sm packages-sort-btn" id="packages-list-filter-closed">Closed</button>
          <button class="btn btn-secondary btn-sm packages-sort-btn" id="packages-list-filter-open">Open</button>
        </div>
        <div id="packages-list-container"></div>
      </div>
    `;

// Card Template
export const packageCardTemplate = (_packageDataObj, _index) => {
  return `
    <div id="packages-container">
        <div class="packages-card">
          <div class="card-body">
            <h5 class="card-title">${_packageDataObj.title}</h5>
            <p class="card-text">${_packageDataObj.description}</p>
            <button class="btn btn-primary">Learn More</button>
          <div>
            <button class="btn btn-danger delete-btn">Delete</button>
          </div>
        </div>
      </div>
    </div>
  `;
};

// Form
export const packageForm = 
  `
  <h2 id="package-form-label">Create New Package</h2>
    <form id="package-inputForm">
      <div class="mb-3">
          <label for="package-form-name" class="form-label">Package Name:</label><br>
          <input required type="text" class="form-control" id="package-form-name" placeholder="Name">
          <div class="error-container" id="package-name-error"></div>
      </div>
      <div class="mb-3">
          <label for="package-form-description" class="form-label">Package Description:</label><br>
          <textarea class="form-control" id="package-form-description" placeholder="Description" rows="4"></textarea>
          <div class="error-container" id="package-desc-error"></div>
      </div>
      <div class="d-grid gap-2 d-md-block">
        <button id="package-form-submitBtn" class="btn btn-primary" type="submit">Create Package</button>
      </div>
    </form>
  `;
