class Product {
    constructor(dataObject) {
      this.id = dataObject.id;
      this.name = dataObject.name;
      this.description = dataObject.description;
      this.price = dataObject.price;
      this.category_name = dataObject.category_name;
    }
  
    formatPrice() {
      return `$${this.price}`;
    }

    renderShowProduct() {
      return `
      <h2 class="text-lg leading-6 font-medium text-gray-900">
      ${this.name}
    </h2>
    <p class="mt-1 max-w-2xl text-sm text-gray-500">
      ${this.category_name}
    </p>
    <p>${this.description}</p>
    <p>${this.formatPrice()}
      `;
    }
  
    renderIndexProduct() {
      return `
        <li class="py-2">
             <div class="flex space-x-3">
               <div class="flex-1 space-y-1">
                 <div class="flex products-center justify-between">
                   <a  href="#"><h3 data-id=${
                     this.id
                   } class="text-sm font-medium hover:text-gray-400 product-link">${
        this.name
      }</h3></a>
                   <p class="text-sm text-gray-500">${this.formatPrice()}</p>
                 </div>
                 <p class="text-sm text-gray-500">${this.category_name}</p>
                 <button data-id=${
                   this.id
                 } type="button" class="delete-btn inline-flex products-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">X</button>
                </svg>
               </div>
             </div>
           </li>
        `;
    }
  }

