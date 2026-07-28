// Initialize Bootstrap Carousel for Homepage Slider
document.addEventListener('DOMContentLoaded', function () {
  const carouselEl = document.querySelector('#heroRecipeCarousel');
  if (carouselEl) {
    new bootstrap.Carousel(carouselEl, {
      interval: 3500, // Slides automatically change every 3.5 seconds
      ride: 'carousel'
    });
  }
});

// Navigation handling between wireframe sections
function showSection(section) {
  document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

  if (section === 'home') {
    document.getElementById('home-section').classList.add('active');
    document.getElementById('nav-home').classList.add('active');
  } else if (section === 'recipe') {
    document.getElementById('recipe-section').classList.add('active');
    document.getElementById('nav-recipe').classList.add('active');
  } else if (section === 'add') {
    document.getElementById('add-section').classList.add('active');
    document.getElementById('nav-add').classList.add('active');
  }
}

// Client-side Instant Category Filter Logic
function filterRecipes(category) {
  const items = document.querySelectorAll('.recipe-item');
  const buttons = document.querySelectorAll('.btn-filter');

  buttons.forEach(btn => {
    if(btn.textContent.trim() === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  items.forEach(item => {
    if (category === 'All' || item.getAttribute('data-category') === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Client-side Form Validation and Dynamic Insertion
function validateAndSubmit(event) {
  event.preventDefault();
  
  const recipeName = document.getElementById('recipeName').value.trim();
  const ingredients = document.getElementById('ingredients').value.trim();
  const instructions = document.getElementById('instructions').value.trim();
  const category = document.getElementById('mealCategory').value;

  if (recipeName.length < 5) {
    alert("Validation Error: Recipe Name must be at least 5 characters long!");
    return;
  }

  if (ingredients === "" || instructions === "") {
    alert("Validation Error: Please fill in all required fields.");
    return;
  }

  let imageUrl = "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80";
  let badgeBg = "bg-primary";

  if (category === "Breakfast") {
    imageUrl = "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80";
    badgeBg = "bg-warning text-dark";
  } else if (category === "Lunch") {
    imageUrl = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80";
    badgeBg = "bg-success text-white";
  } else if (category === "Dinner") {
    imageUrl = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80";
    badgeBg = "bg-danger text-white";
  }

  const recipeContainer = document.getElementById('recipe-container');

  const cardHTML = `
    <div class="col-md-4 recipe-item" data-category="${category}">
      <div class="card h-100 shadow-sm border-0 rounded-4 overflow-hidden position-relative card-hover">
        <span class="badge ${badgeBg} category-badge fw-bold shadow-sm">${category}</span>
        <div class="recipe-card-img-wrap">
          <img src="${imageUrl}" class="card-img-top recipe-card-img" alt="${recipeName}">
        </div>
        <div class="card-body p-4">
          <h5 class="card-title fw-bold text-dark">${recipeName}</h5>
          <p class="card-text mb-1 text-theme-accent fw-semibold">Ingredients:</p>
          <p class="text-muted small">${ingredients}</p>
          <p class="card-text mb-1 text-theme-accent fw-semibold">Steps:</p>
          <p class="text-muted small">${instructions}</p>
        </div>
      </div>
    </div>
  `;

  recipeContainer.insertAdjacentHTML('beforeend', cardHTML);
  alert("Recipe successfully published!");
  
  document.getElementById('recipeForm').reset();
  showSection('recipe');
}