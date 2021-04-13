const BASE_URL = "http://locahost:3000";
const productListEl = document.getElementById("product-list");
const productListTitleEl = document.getElementById("product-list-title");
const productsEl = document.getElementById("products-list");
const productForm = document.getElementById("new-product");
const productsNavEl = document.getElementById("products-nav");
const categoriesNavEl = document.getElementById("categories-nav");
const categoriesList = document.getElementById("category-dropdown")
const productDetailEl = document.getElementById("product-detail");

const init = () => {
  getProducts();
  bindNavProductListeners();
  bindProductFormEventListener();
};

const getProducts = () => {
  productListEl.innerHTML = "<h1>Loading...</h1>";
  fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => {
      productListEl.innerHTML = "";
      productListTitleEl.innerText = "Products";
      data.forEach((productObject) => {
        const newProduct = new Product(productObject);
        productListEl.innerHTML += newProduct.renderIndexProduct();
      });

      document
        .querySelectorAll(".product-link")
        .forEach((link) => link.addEventListener("click", showProductDetails));
      document
        .querySelectorAll(".delete-btn")
        .forEach((btn) => btn.addEventListener("click", deleteProduct));
    });
};


function showProductDetails(e) {
  console.log(e.target);
  const { id } = e.target.dataset;
  console.log(`Product ${id} was clicked`);
  fetch(`http://localhost:3000/products/${id}`)
    .then((res) => res.json())
    .then((product) => {
      const newProduct = new Product(product);
      productDetailEl.innerHTML = newProduct.renderShowProduct();
    });
}

function deleteProduct(e) {
  const { id } = e.target.dataset;
  fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      e.target.parentElement.parentElement.parentElement.remove();
    });
}


const getCategories = () => {
  productListTitleEl.innerText = "Categories";
  productListEl.innerHTML = "<h1>Loading...</h1>";

  fetch("http://localhost:3000/categories")
    .then((res) => res.json())
    .then((data) => {
      productListEl.innerHTML = "";
      data.forEach((catObject) => {
        const newCat = new Category(catObject);
        productListEl.innerHTML += newCat.renderIndexCategory();
      });

      

      document
        .querySelectorAll(".product-link")
        .forEach((link) => link.addEventListener("click", showProductDetails));
      document
        .querySelectorAll(".delete-btn")
        .forEach((btn) => btn.addEventListener("click", deleteProduct));
    });
};
      

init();

function chooseCategory
  fetch(`http://localhost:3000/categories`, {
    
  }

function submitProduct(data) {
  fetch(`http://localhost:3000/products`, {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((product) => {
      const newProduct = new Product(product);
      productListEl.innerHTML += newProduct.renderIndexProduct();
    });
}

function bindProductFormEventListener() {
  productForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.values());
    submitProduct(formData);
  });
}

function bindNavProductListeners() {
  productsNavEl.addEventListener("click", getProducts);
  categoriesNavEl.addEventListener("click", getCategories);
}
