# Recipe Nest 

**Interactive Digital Recipe Hub**

A simple, clean website where people who love cooking can save, organize, and share their favorite everyday food recipes  instead of digging through messy notebooks or scrolling through cluttered social media posts.



## Group Members

| Name | Registration Number | Index No |

| M.A.F Askiya | ITT/2024/012 | 2697 |
| H.F Sakira | ITT/2024/095 | 2780 |

## What it does

- **Home page**  a rotating image slider showcasing featured meals, with a short intro to what Recipe Nest is about.
- **Recipe page**  browse recipes and instantly filter them by Breakfast, Lunch, or Dinner, no page reload needed.
- **Add New Recipe page** a simple form to submit your own recipe, with validation so you can't accidentally submit an empty or badly-named recipe.

Any recipe you add through the form shows up right away on the Recipe page.

## Who it's for

- **Home cooks** who want a basic digital space for family recipes.
- **University students** looking for quick, cheap meal ideas.
- **Anyone learning to cook**, browsing simple step-by-step guides.

## Built with

- **HTML5 & CSS3** – page structure and styling
- **Bootstrap 5** – layout, responsiveness, and the image slider
- **Vanilla JavaScript** – the category filter, form validation, and saving recipes
- **Git & GitHub** – version control and collaboration

> Recipes are currently saved using the browser's built-in storage (`localStorage`), so the "Publish Instantly" feature actually works without needing a server. The original plan called for a PHP + MySQL backend — that's a natural next step if the project needs recipes shared across different users or devices.

## How to run it

No installation needed . it's just static files.

1. Download or clone this folder.
2. Open `index.html` in any web browser.
3. That's it. Click around, filter recipes, and try adding your own.

## File structure


recipe-nest/
├── index.html        Home page
├── recipe.html        Recipe browsing + filter
├── add-recipe.html    Add New Recipe form
├── style.css          All custom styling
├── script.js           Filter, validation, and saving logic
└── README.md           You're reading it


## Repository

[github.com/itt2024012/Recipe-Nest](https://github.com/itt2024012/Recipe-Nest)