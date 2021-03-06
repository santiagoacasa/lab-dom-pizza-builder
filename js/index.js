// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: {
    name: "pepperoni",
    price: 1,
  },
  mushrooms: {
    name: "Mushrooms",
    price: 1,
  },
  greenPeppers: {
    name: "Green Peppers",
    price: 1,
  },
  whiteSauce: {
    name: "White sauce",
    price: 3,
  },
  glutenFreeCrust: {
    name: "Gluten-free crust",
    price: 5,
  },
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: false,
  mushrooms: false,
  greenPeppers: false,
  whiteSauce: false,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderIngredientes(ingr, estadoIngr) {
  document.querySelectorAll(ingr).forEach((elem) => {
    if (estadoIngr) {
      switch (ingr) {
        case ".crust":
          elem.classList.add("crust-gluten-free");
          break;
        case ".sauce":
          elem.classList.add("sauce-white");
          break;
        default:
          elem.style.visibility = "visible";
          break;
      }
    } else {
      switch (ingr) {
        case ".crust":
          elem.classList.remove("crust-gluten-free");
          break;
        case ".sauce":
          elem.classList.remove("sauce-white");
          break;
        default:
          elem.style.visibility = "hidden";
          break;
      }
    }
  });
}

function renderPepperoni() {
  renderIngredientes(".pep", state.pepperoni);
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  renderIngredientes(".mushroom", state.mushrooms);
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  renderIngredientes(".green-pepper", state.greenPeppers);
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  renderIngredientes(".sauce", state.whiteSauce);
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  renderIngredientes(".crust", state.glutenFreeCrust);
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const ingredientes = Object.keys(state);
  const botones = document.querySelectorAll(".btn");
  [...botones].forEach((btnIngr, i) => {
    if (state[ingredientes[i]]) {
      btnIngr.classList.add("active");
    } else {
      btnIngr.classList.remove("active");
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const listaIngredientes = document.querySelectorAll(".panel.price ul li");
  const price = document.querySelector(".price span");
  price.innerHTML = basePrice;
  const estadoIngr = Object.keys(state);
  [...listaIngredientes].forEach((elem, i) => {
    if (state[estadoIngr[i]]) {
      elem.style.visibility = "visible";
      price.innerHTML =
        parseInt(price.innerHTML) + ingredients[[estadoIngr[i]]].price;
    } else {
      elem.style.visibility = "hidden";
    }
  });
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector(".btn.btn-green-peppers")
  .addEventListener("click", () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
