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
            <div id="bio-username">${_currentUser.username}</div>
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
            <div id="bio-stars">* ${_currentUser.starred}</div>
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


// Footer


// Overview


// Repos


// Projects


// Packages
