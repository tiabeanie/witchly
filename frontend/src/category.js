class Category {
    constructor(dataObject) {
      this.id = dataObject.id;
      this.name = dataObject.name;
      this.products = dataObject.products;
    }
  
    
    
    renderIndexCategory() {
      return `
          <li class="py-2">
               <div class="flex space-x-3">
                 <div class="flex-1 space-y-1">
                   <div class="flex products-center justify-between">
                     <h3 class="text-sm font-medium hover:text-gray-400 products-link">${this.name}</h3>
                   </div>
                   <p class="text-sm text-gray-500">${this.products.length} products</p>
                  </svg>
                 </div>
               </div>
             </li>
          `;
    }
  }

  
