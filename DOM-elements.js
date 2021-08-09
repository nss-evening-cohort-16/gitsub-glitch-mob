// Render Function
const renderToDOM = (_targetDivID, _element, _clear = true) => {
    const targetDiv = document.querySelector(_targetDivID);

    _clear ? targetDiv.innerHTML = _element : targetDiv.innerHTML += _element;
};



// Elements

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


export const bioPanel = () => {
    const element = `
        <img id="bio-img" src="" alt="User's profile image">
        <div id="bio-name"></div>
        <div id="bio-username"></div>
        <div id="bio-description"></div>

        <div id="bio-interactBtns">
            <button id="btn-follow" class="btn bio-btn"></button>
            <button id="btn-sponsor" class="btn bio-btn"></button>
            <button id="btn-more" class="btn bio-btn"></button>
        </div>
        <div id="bio-followerTray">
            <div id="bio-followers"></div>
            <div id="bio-following"></div>
            <div id="bio-stars"></div>
        </div>
        <div id="bio-contact">
            <div id="bio-location"></div>
            <div id="bio-email"></div>
            <div id="bio-website"></div>
            <div id="bio-twitter"></div>
        </div>

        <div id="bio-highlights">
            <h3>Highlights</h3>
            <div id="highlights-list"></div>
        </div>
        <div id="bio-orgs">
            <h3>Organizations</h3>
            <div id="orgs-list"></div>
        </div>
        <div id="bio-sponsors">
            <h3>Sponsors</h3>
            <div id="sponsors-list"></div>
        </div>
    `;

    renderToDOM("#page-bio", element);
};