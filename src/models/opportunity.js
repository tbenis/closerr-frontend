class Opportunity {
  static all = [];
  constructor({title, description, companyName, time, hours, location, category, id}) {
    this.title = title;
    this.description = description;
    this.companyName = companyName;
    this.time = time;
    this.hours = hours;
    this.location = location;
    this.category_id = category.id;
    this.id = id;
    Opportunity.all.push(this);
  }


  static findById(id) {
    return this.all.find((opportunity) => opportunity.id === id);
  }
  static findByTitle(text){
    return this.all.filter((opportunity) => opportunity.title.toLowerCase().includes(text));
  }

  
  static createTheOpportunity(opportunity) {
    return new Opportunity(opportunity);
  }

  update({title, description, companyName, time, hours, location}){
    let opp = Opportunity.findById(this.id);
    opp.title = title;
    opp.description = description;
    opp.companyName = companyName;
    opp.time = time;
    opp.hours = hours;
    opp.location = location;
  }
  render() {
    if (ul().children.length < 1) {
      Category.handleClick();
    } else {
      let cat = document.querySelector(`#category-${this.category_id}`);
      const li = document.createElement("li");
      // const liDiv =  document.querySelector(`opportunity-box-${cat.id}`);
      cat.dataset.category_id = this.category_id;
      li.innerHTML = opportunityDisplay(this);

        cat.parentNode.appendChild(li);
        // liDiv.appendChild(li);
      document
        .querySelector(`button.delete-listing[data-id='${this.id}']`)
        .addEventListener("click", Api.handleDelete);
      document
        .querySelector(`button.edit-listing[data-id='${this.id}']`)
        .addEventListener("click", this.handleUpdate);

    }
  }
  static displayForm = () => {
    if (!opportunityForm()) {
        ul().innerHTML = "";
        
        collectionContainer().insertAdjacentHTML('afterend', opportunityFormHTML)
        // debugger
        Category.dropDownOptions.forEach(optionTag => opportunitySelectCategory().append(optionTag))
        opportunityForm().addEventListener("submit", Api.handleSubmit)
    } else {
        opportunityForm().remove()
    }
}


 replaceElement = (li) => {
  //   debugger;
  // debugger
    li.innerHTML = opportunityDisplay(this);
    document
      .querySelector(`button.delete-opportunity[data-id='${this.id}']`)
      .addEventListener("click", Api.handleDelete);
    document
      .querySelector(`button.edit-opportunity[data-id='${this.id}']`)
      .addEventListener("click", handleUpdate);
  };

  

 handleUpdate = (e) => {
  if (e.target.innerText === "Edit") {

    const oppId = e.target.dataset.id;
    const title =
      e.target.parentElement.querySelector(".opportunity-title").innerText;
    const description = e.target.parentElement.querySelector(
      ".opportunity-description"
    ).innerText;
    const time =
      e.target.parentElement.querySelector(".opportunity-time").innerText;
    const hours =
      e.target.parentElement.querySelector(".opportunity-hours").innerText;
    const location = e.target.parentElement.querySelector(
      ".opportunity-location"
    ).innerText;
    const companyName =
      e.target.parentElement.querySelector(".company-name").innerText;
      // debugger
    e.target.parentElement.innerHTML = updateOpportunityForm(this, oppId);
    document
      .querySelector(`button.delete-opportunity[data-id='${oppId}']`)
      .addEventListener("click", Api.handleDelete);
    document
      .querySelector(`button.update-opportunity[data-id='${oppId}']`)
      .addEventListener("click", this.handleUpdate);
  } else {
    Api.handleFetchUpdate(e);
  }
};

}
