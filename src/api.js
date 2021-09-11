class Api {
  static fetchOpportunities() {
    fetch(OPPORTUNITY_URL)
      .then((resp) => resp.json())
      .then((json) =>
        json.forEach((opportunity) => {
          Opportunity.createTheOpportunity(opportunity);
        })
      )
      // .then(() => Opportunity.render())
      .catch(this.handleError);
  }

  static handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: opportunityTitle().value,
      description: opportunityDescription().value,
      companyName: companyName().value,
      time: opportunityTime().value,
      hours: opportunityHours().value,
      location: opportunityLocation().value,
      category_id: opportunitySelectCategory().value,
    };

    fetch(OPPORTUNITY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((json) => {
        let opp = new Opportunity(json);
        opportunityForm().reset();
        
        Api.fetchCategories();
        opp.render();

        opportunityForm().remove();
      });
  };

  static handleFetchUpdate = (e) => {
    const data = {
      id: e.target.dataset.id,
      title: e.target.parentElement.querySelector("#opportunity-title").value,
      description: e.target.parentElement.querySelector(
        "#opportunity-description"
      ).value,
      companyName: e.target.parentElement.querySelector("#company-name").value,
      time: e.target.parentElement.querySelector("#opportunity-time").value,
      hours: e.target.parentElement.querySelector("#opportunity-hours").value,
      location: e.target.parentElement.querySelector("#opportunity-location")
        .value,
    };

    fetch(`${OPPORTUNITY_URL}/${data.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((json) => {
        let opp = Opportunity.findById(json.id);
        opp.update(json);
        console.log(json);
        opp.replaceElement(e.target.parentElement);
      })
      .catch(this.handleError);
  };

  static handleDelete = (e) => {
    fetch(`${OPPORTUNITY_URL}/${e.target.dataset.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        // debugger
        e.target.parentNode.remove();

        let opp = Opportunity.findById(parseInt(e.target.dataset.id));
        let index = Opportunity.all.indexOf(opp);
        Opportunity.all.splice(index, 1);
      })
      .catch(this.handleError);
  };

  static fetchCategories() {
    fetch(CATEGORY_URL)
      .then((resp) => resp.json())
      .then((json) =>
        json.forEach((category) => {
          let cat = Category.findOrCreateBy(category);
          cat.addToDropdown();
          cat.render();
        })
      )
      .catch(this.handleError);
  }

  static handleError(error) {
    console.log(error);
  }
}
