//// Render Function \\\\
const renderToDOM = (_targetDivID, _element, _clear = true) => {
    const targetDiv = document.querySelector(_targetDivID);

    _clear ? targetDiv.innerHTML = _element : targetDiv.innerHTML += _element;
};



//// Elements \\\\

// Basic page layout
export const pageLayout = () => {
    const element = `
    <div id="page-body">
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

    renderToDOM("body", element);
};


// User bio profile
export const bioPanel = (_currentUser) => {
    const element = `
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

    renderToDOM("#page-bio", element);
};


// Header / NavBar
 export const header = () => {

    const element = `
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" id ="Overview">Overview</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" id="Repositories">Repositories</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" id ="Projects">Projects</a>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="#" id ="Packages">Packages</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
    renderToDOM("#page-navbar", element);
}


// Footer
export const footer = () => {
    const element = `
    <div id="yr-updated">2021 Us</div>
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
    renderToDOM("#page-footer", element);
}

// Overview


// Repos
export const renderReposContent = (_repoTitle, _description, _tags, _language, _lastUpdated) => {
const element = `
            <div class="card" style="width: 18rem;"> 
                <div class="repo-body">
                    <div>
                        <h5 class="repo-title">${_repoTitle}</h5>
                    </div>
                    <div>
                        <h6 class="repo-text">${_description}</h6>
                    </div>
                    <div>
                        <p class="repo-tags">${_tags}</p>
                    </div>
                    <div>
                        <p class="repo-language">${_language}</p>
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
                        <p href="#" class="repo-btn repo-btn-lastUpdated">${_lastUpdated}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
    ;
  renderToDOM("#list-container", element, false);
};

// Projects


// Packages
export const renderPackagesContent = () => {
    const element = `
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">Package Title</h5>
      <p class="card-text">Description of the package</p>
      <a href="#" class="btn btn-primary">Learn Some More</a>
    </div>
  </div>
    `;

    renderToDOM("#list-container", element);
};