import { injectSampleData } from "./data-functions.js";
import { registerEvents, renderContent, renderLayout} from "./DOM-functions.js";


export const init = () => {
    injectSampleData();

    renderLayout();
    renderContent();

    registerEvents();
    
};