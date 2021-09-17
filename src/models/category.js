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

  static findByOpportunityTitle(text){
    return Opportunity.all.filter((opportunity) => (this.id === opportunity.category_id) && (opportunity.title.toLowerCase().includes(text)));
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
    h4.id = `category-container-${this.id}`
    const a = document.createElement("a");

    a.id = `category-${this.id}`;
    a.innerText = this.name;
    a.href = "#";

    a.addEventListener("click", this.renderOpportunities);
    h4.appendChild(a);

    
    ul().appendChild(h4);

  }

  useSeachBox(){
    // const charactersList = document.getElementById('charactersList');
    const searchBar = document.getElementById(`opportunity-box-${this.id}`);
    // let hpCharacters = [];
    console.log("Hey from here");
    searchBar.addEventListener('keyup', (e) => {
        const text = e.target.value.toLowerCase();
    
        // const filteredOpportunities = Category.findByOpportunityTitle(searchString); 
        const filteredOpportunities = Opportunity.all.filter((opportunity) => (this.id === opportunity.category_id) && (opportunity.title.toLowerCase().includes(text)));

        const children = Array.from(e.target.parentNode.children);
        const lis = children.slice(4);
        // debugger
        
        lis.forEach(li => li.remove());
        // const container = document.querySelector(`#category-container-${this.id}`);
        // container.appendChild(br()); container.appendChild(br());
        // container.appendChild(searchBox(this));

        console.log(filteredOpportunities)
        filteredOpportunities.forEach((element) => {
         
          element.render();

        });
    });

    
  };

renderOpportunities = (e) => {
        // this.renderSeachBox();
        const nextLiSibling = e.target.nextSibling;

        if (nextLiSibling) {
          const children = Array.from(e.target.parentNode.children);
          const lis = children.slice(1);
          lis.forEach(li => li.remove());
        } else {
          const container = document.querySelector(`#category-container-${this.id}`);
          container.appendChild(br()); container.appendChild(br());
          container.appendChild(searchBox(this));
          this.useSeachBox()
         this.getOpportunities().forEach((element) => {
            // debugger
            element.render();
            // debugger
            // element.appendChild(searchBox());
          });
          
        }
        // const cat = document.querySelector(`category-${this.id}`);
        // h4.prepend(searchBox);
        
      };
  
    }
