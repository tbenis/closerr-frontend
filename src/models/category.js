class Category {
  static all = [];
  static dropDownOptions = [];
  constructor({ name, id, opportunities = [] }) {
    this.name = name;
    this.id = id;
    Category.all.push(this);
  }

  static findByName(name) {
    
    return this.all.find((category) => category.name === name);
  }
  static findById = (id) => {
    return this.all.find((category) => category.id === id);
  }

  static findOrCreateBy = (category) => {
    return this.findByName(category.name) || new Category(category);
  }

  getOpportunities(){
      return Opportunity.all.filter(opportunity => this.id === opportunity.category_id)
  } 
  addToDropdown = () =>{
    const option = document.createElement('option');
    option.value = this.id;
    option.innerText = this.name;
    Category.dropDownOptions.push(option);
    // debugger
  }

  static handleClick = (e) => {
    if (ul().children.length < 1) {
      Api.fetchCategories()
    } else {
      ul().innerHTML = "";
    }
  };

  render = () => {

    const h4 = document.createElement("h4");
    const a = document.createElement("a");
    a.id = `category-${this.id}`;
    a.innerText = this.name;
    a.href = "#";
    // debugger
    a.addEventListener("click", this.renderOpportunities);
    h4.appendChild(a);
    h4.appendChild(br());
    ul().appendChild(h4);
  }

renderOpportunities = (e) => {
        const nextLiSibling = e.target.nextSibling;
        if (nextLiSibling) {
          const children = Array.from(e.target.parentNode.children);
          const lis = children.slice(1);
          lis.forEach(li => li.remove());
        } else {
        //   debugger
          this.getOpportunities().forEach((element) => element.render());
        }
      };
  
}
