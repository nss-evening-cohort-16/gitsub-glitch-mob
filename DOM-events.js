import { injectSampleData } from "./data-functions.js";
import { renderPage, registerEvents } from "./DOM-functions.js";


export const init = () => {
    injectSampleData();

    renderPage();

    registerEvents();
};