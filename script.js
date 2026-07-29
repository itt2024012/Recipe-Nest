// Recipe Nest - all interactivity lives here

const STORAGE_KEY = "recipeNestRecipes";

// ---- Read / write saved recipes in the browser's storage ----
function getSavedRecipes() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveRecipe(recipe) {
  const recipes = getSavedRecipes();
  recipes.push(recipe);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
}

// ---- Build one recipe card from a saved recipe object ----
function buildRecipeCard(recipe) {
  const badgeColor = {
    Breakfast: "bg-warning text-dark",
    Lunch: "bg-info text-dark",
    Dinner: "bg-secondary"
  }[recipe.category] || "bg-secondary";

  const col = document.createElement("div");
  col.className = "col-md-4";
  col.innerHTML =
    '<div class="card recipe-card h-100" data-category="' + recipe.category.toLowerCase() + '">' +
      '<img src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=250&fit=crop" class="card-img-top" alt="' + recipe.name + '">' +
      '<div class="card-body">' +
        '<span class="badge ' + badgeColor + ' mb-2">' + recipe.category + '</span>' +
        '<h5 class="card-title">' + recipe.name + '</h5>' +
        '<p class="mb-1"><strong>Ingredients:</strong> ' + recipe.ingredients + '</p>' +
        '<p class="mb-0"><strong>Steps:</strong> ' + recipe.instructions + '</p>' +
      '</div>' +
    '</div>';
  return col;
}

// ---- On the Recipe page: load any saved recipes into the grid ----
const recipeRow = document.getElementById("recipeRow");
if (recipeRow) {
  getSavedRecipes().forEach(recipe => {
    recipeRow.appendChild(buildRecipeCard(recipe));
  });
}

// ---- Instant category filter (Recipe page) ----
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;
    document.querySelectorAll(".recipe-card").forEach(card => {
      const show = category === "all" || card.dataset.category === category;
      card.closest(".col-md-4").style.display = show ? "" : "none";
    });
  });
});

// ---- Add New Recipe form: validate, then save and redirect ----
const recipeForm = document.getElementById("recipeForm");
if (recipeForm) {
  recipeForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("recipeName");
    const category = document.getElementById("mealCategory");
    const ingredients = document.getElementById("ingredients");
    const instructions = document.getElementById("instructions");
    let valid = true;

    if (name.value.trim().length < 5) {
      name.classList.add("is-invalid");
      valid = false;
    } else {
      name.classList.remove("is-invalid");
    }

    [ingredients, instructions].forEach(field => {
      if (field.value.trim() === "") {
        field.classList.add("is-invalid");
        valid = false;
      } else {
        field.classList.remove("is-invalid");
      }
    });

    if (valid) {
      saveRecipe({
        name: name.value.trim(),
        category: category.value,
        ingredients: ingredients.value.trim(),
        instructions: instructions.value.trim()
      });

      alert("Recipe published! Taking you to the Recipe page...");
      recipeForm.reset();
      window.location.href = "recipe.html";
    }
  });
}