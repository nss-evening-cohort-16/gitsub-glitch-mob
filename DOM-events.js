import { injectSampleData } from "./data-functions.js";
import { pageLayout } from "./DOM-elements.js";


export const init = () => {
    injectSampleData();

    pageLayout();
};