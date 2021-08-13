import { injectSampleData } from "./data-functions.js";
import { registerEvents, renderPage } from "./DOM-functions.js";


export const init = () => {
    injectSampleData();

    renderPage();

    registerEvents();
};