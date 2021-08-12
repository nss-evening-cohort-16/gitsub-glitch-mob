// Basic page layout
export const pageLayout = 
    `<div id="page-body">
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
        <img id="bio-img" src="${_currentUser.img}" alt="User's profile image">
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
        </div>`;
};

// Header / NavBar
export const header =
    `<nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html" id ="Overview">Overview</a>
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
export const footer =
`<div id="yr-updated">2021 Us</div>
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
export const pinnedRepoForm = (_repoDataObj) => {
    return `
      <div class="card" style="width: 18rem;"> 
        <div class="repo-body">
          <div>
            <h5 class="pinnedrepo-title">${_repoDataObj.repoTitle}</h5>
          </div>
            <div> 
              <button href="#" class="Pinnedrepo-btn">Pin Repos</button>
            </div>
          </div>
        </div>
      </div>
      `;
  };
      
//// Repos \\\\

// Card Template
export const repoCardTemplate = (_repoDataObj) => {
  return `
   <div class="card" style="width: 18rem;"> 
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
  </div>
  `;
};

// Form
export const repoForm = () => {
  return `
     <form id="repo-inputForm">
        <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Repositories Title:</label>
            <input required type="text" class="form-control" id="repo-form-title" placeholder="Input Repositories Title" value="sample repo title">
        </div>
        <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Repositories Description</label>
            <input required type="text" class="form-control" id="repo-form-description" placeholder="Input Repositories Description" value="sample repo desc">
        </div>
        <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Repositories Language</label>
            <input required type="text" class="form-control" id="repo-form-language" placeholder="Input Repositories Language" value="python">
        </div>

        <button id="repo-form-submitBtn" type="submit" class="btn btn-primary">Submit</button>    
    </form>
    `;
};

//// Projects \\\\

// Layout
export const projectsContent = `
      <h2 id="projects-container-label">Projects</h2>
      <input id="projects-searchbar" type="text" placeholder="Search...">
      <div id="projects-container">
        <div id="projects-list-header">Open Closed</div>
        <div id="projects-list-container"></div>
      </div>
    `;


// Card Template
export const projectCardTemplate = (_projectDataObj) => {
  return `
    <div class="project-card">
      <div class="project-card-title">${_projectDataObj.title}</div> 
      <div class="project-card-description">${_projectDataObj.description}</div> 
      <hr>
      <div class="project-card-created">Created: ${_projectDataObj.timeCreated}</div> 
      <div class="project-card-updated">Last Updated: ${_projectDataObj.lastUpdated}</div> 
      <div class="project-card-privacy">Privacy: ${_projectDataObj.privacy}</div> 
      <div class="project-card-status">Status: ${_projectDataObj.status}</div> 
    </div>
  `;
};

// Form
export const projectForm = `
  <h2 id="project-form-label">Create New Project</h2>
  <form id="project-inputForm">
     <div class="mb-3">
         <label for="project-form-title" class="form-label">Project Title:</label>
         <input required type="text" class="form-control" id="project-form-title" placeholder="Title">
     </div>
     <div class="mb-3">
         <label for="project-form-description" class="form-label">Project Description</label>
         <input type="text" class="form-control" id="project-form-description" placeholder="Description">
     </div>
     <div class="mb-3">
         <label for="project-form-privacy" class="form-label">Private</label>
         <input type="checkbox" id="project-form-privacy">
     </div>

     <button id="project-form-submitBtn" type="submit" class="btn btn-primary">Submit</button>    
  </form>`;
 

//// Packages \\\\

// Card Template
export const packageCardTemplate = () => {
  return `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Package Title</h5>
        <p class="card-text">Description of the package</p>
        <a href="#" class="btn btn-primary">Learn Some More</a>
      </div>
    </div>
  `;
};

// Form
export const packageForm = () => {
  return `
    <form>
      <div>
        <h5>Package Name</h5>
          <input class="form-control" type="text" aria-label="default">
      </div>
      <div>
          <label for="textArea" class="form-label"></label>
            <h5>Description</h5>
          <textarea class="form-control" id="textArea" rows="4"></textarea>
      </div>
      <div class="d-grid gap-2 d-md-block">
        <button id="packageBtn" class="btn btn-primary" type="submit">Create Package</button>
      </div>
    </form>
  `;
};


