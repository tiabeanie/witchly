const BASE_URL = "http://locahost:3000";
const mainListEl = document.getElementById("main-list");
const mainListTitleEl = document.getElementById("main-list-title");
const productsEl = document.getElementById("products-list");
const productForm = document.getElementById("new-product");
const productsNavEl = document.getElementById("products-nav");
const categoriesNavEl = document.getElementById("categories-nav");
const productDetailEl = document.getElementById("product-detail");

const init = () => {
  getproducts();
  bindNavproductListeners();
  bindproductFormEventListener();
};

const getproducts = () => {
  mainListEl.innerHTML = "<h1>Loading...</h1>";
  fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => {
      mainListEl.innerHTML = "";
      mainListTitleEl.innerText = "products";
      data.forEach((productObject) => {
        const newproduct = new product(productObject);
        mainListEl.innerHTML += newproduct.renderIndexproduct();
      });

      document
        .querySelectorAll(".product-link")
        .forEach((link) => link.addEventListener("click", showproductDetails));
      document
        .querySelectorAll(".delete-btn")
        .forEach((btn) => btn.addEventListener("click", deleteproduct));
    });
};

function showproductDetails(e) {
  console.log(e.target);
  const { id } = e.target.dataset;
  console.log(`product ${id} was clicked`);
  fetch(`http://localhost:3000/products/${id}`)
    .then((res) => res.json())
    .then((product) => {
      const newproduct = new product(product);
      productDetailEl.innerHTML = newproduct.renderShowproduct();
    });
}

function deleteproduct(e) {
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
  mainListTitleEl.innerText = "Categories";
  mainListEl.innerHTML = "<h1>Loading...</h1>";

  fetch("http://localhost:3000/categories")
    .then((res) => res.json())
    .then((data) => {
      mainListEl.innerHTML = "";
      data.forEach((catObject) => {
        const newCat = new Category(catObject);
        mainListEl.innerHTML += newCat.renderIndexCategory();
      });

      document
        .querySelectorAll(".product-link")
        .forEach((link) => link.addEventListener("click", showproductDetails));
      document
        .querySelectorAll(".delete-btn")
        .forEach((btn) => btn.addEventListener("click", deleteproduct));
    });
};

init();

function submitproduct(data) {
  fetch(`http://localhost:3000/products`, {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((product) => {
      const newproduct = new product(product);
      mainListEl.innerHTML += newproduct.renderIndexproduct();
    });
}

function bindproductFormEventListener() {
  productForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.values());
    submitproduct(formData);
  });
}

function bindNavproductListeners() {
  productsNavEl.addEventListener("click", getproducts);
  categoriesNavEl.addEventListener("click", getCategories);
}
