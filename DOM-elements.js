// Render Function
const renderToDOM = (_targetDivID, _element, _clear = true) => {
    const targetDiv = document.querySelector(_targetDivID);

    _clear ? targetDiv.innerHTML = _element : targetDiv.innerHTML += _element;
};


// Elements
