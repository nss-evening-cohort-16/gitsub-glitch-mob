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