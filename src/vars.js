const BASE_URL = 'http://localhost:3000/';
const OPPORTUNITY_URL = `${BASE_URL}/opportunities`;
const CATEGORY_URL = `${BASE_URL}/categories`;

const buttonDiv = () => document.getElementById("button-control");
const showCatagories = () => document.getElementById("show-categories");
const showOpportunityForm = () => document.getElementById("show-opporunity-form");
const collectionContainer = () => document.getElementById("collection-container");
const ul = () => document.getElementById("collection-list");

const br = () => document.createElement("br");

const opportunityForm = () => document.getElementById("opportunity-form")
const opportunityTitle = () => document.getElementById("opportunity-title")
const opportunityDescription = () => document.getElementById("opportunity-description")
const companyName = () => document.getElementById("company-name")
const opportunityTime = () => document.getElementById("opportunity-time")
const opportunityHours = () => document.getElementById("opportunity-hours")
const opportunityLocation = () => document.getElementById("opportunity-location")
const opportunitySelectCategory = () => document.getElementById("category_id")

const searchBox = (obj) => {
    
    const theBox = document.createElement("input");
    theBox.id = `opportunity-box-${obj.id}`;

    theBox.name = `search-category-${obj.name}`;
    theBox.setAttribute("placeholder", `Seach the ${obj.name} category`);
    return (theBox)
};
 //Adding text box

