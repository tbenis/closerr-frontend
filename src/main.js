document.addEventListener("DOMContentLoaded", () => {
  showCatagories().addEventListener("click", Category.handleClick);
  showOpportunityForm().addEventListener("click", Opportunity.displayForm);
  Api.fetchOpportunities()
  Api.fetchCategories()
});
