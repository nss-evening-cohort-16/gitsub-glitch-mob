import { injectSampleData } from "./data-functions.js";
import { pageLayout, bioPanel } from "./DOM-elements.js";


export const init = () => {
    injectSampleData();

    pageLayout();
    bioPanel();
};