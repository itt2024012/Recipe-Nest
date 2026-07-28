# Recipe Nest 
### Interactive Digital Recipe Hub

**Theme:** Digital Recipe Book
**Course:** Web Technologies – ICT 1209
**Programme:** BICT (Honors), Department of ICT, Faculty of Technology, Rajarata University of Sri Lanka

**Group Members**
| Name | Registration No. | Index No. |
|---|---|---|
| M.A.F Askiya | ITT/2024/012 | 2697 |
| H.F Sakira | ITT/2024/095 | 2780 |

---

## About the Project

Recipe Nest is a simple, clean website where home cooks can save, organize, and share their favorite everyday recipes — a single structured space instead of messy paper notebooks or scattered social media posts.

### Goals
- Let users submit their own recipes through an easy-to-use form with built-in validation.
- Make it easy to browse recipes by category using instant filter buttons (no page reload).
- Provide a responsive, grid-based layout that works well on phones, tablets, and desktops.

### Target Audience
- **Home cooks** who want a digital space to keep family recipes.
- **University students** looking for quick, cheap meal ideas by time of day (breakfast, lunch, dinner).
- **Anyone learning to cook** who wants simple, step-by-step guides for local and international dishes.

## Planned Features
- **Homepage Image Slider** – A banner cycling through featured meal photos; arrows let users browse dishes that link to recipe details.
- **Instant Category Filter** – JavaScript-powered filtering on the recipe page (Breakfast / Lunch / Dinner) that shows/hides recipe cards instantly, without refreshing.
- **Recipe Form Validation** – Client-side checks on the submission form (e.g. recipe name must be at least 5 characters, required fields can't be empty) with clear alert messages.

## Pages
- **Home Page** – Nav bar, hero section (image, title, description, "Explore Recipe" CTA), about section, footer.
- **Recipe Page** – "Shared Recipe Hub" with filter buttons (All / Breakfast / Lunch / Dinner) and recipe cards (image, category badge, title, ingredients & steps preview).
- **Add New Recipe Page** – Form to submit a recipe: name, meal category, ingredients, instructions, and a publish button.

## Technology Stack
| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, Bootstrap 5 |
| Client-side Logic | Vanilla JavaScript (slider, filters, form validation) |
| Backend | PHP 8 |
| Database | MySQL (via XAMPP) |
| Version Control | Git & GitHub |

## Repository
https://github.com/itt2024012/Recipe-Nest

## Getting Started (Local Setup)

1. **Install XAMPP** (includes Apache, PHP 8, and MySQL).
   - https://www.apachefriends.org/

2. **Clone the repository** into your XAMPP `htdocs` folder:
   ```bash
   cd C:/xampp/htdocs   # or /Applications/XAMPP/htdocs on macOS
   git clone https://github.com/itt2024012/Recipe-Nest.git
   cd Recipe-Nest
   ```

3. **Start Apache and MySQL** from the XAMPP Control Panel.

4. **Create the database**
   - Open `http://localhost/phpmyadmin`
   - Create a database (e.g. `recipe_nest`)
   - Import the provided SQL schema file (if included in `/database`)

5. **Configure the database connection**
   - Update the DB host, username, password, and database name in the PHP config file (e.g. `config.php` or `db_connect.php`)

6. **Run the project**
   - Visit `http://localhost/Recipe-Nest` in your browser

## Project Structure (suggested)
```
Recipe-Nest/
├── index.php          # Home page
├── recipes.php        # Recipe listing + filter page
├── add-recipe.php     # Add new recipe form
├── css/                # Custom styles (Bootstrap overrides)
├── js/                 # Slider, filter, and validation scripts
├── includes/           # PHP includes (db connection, header, footer)
├── database/           # SQL schema / seed data
└── README.md
```

## Contributing
This is a two-person academic project. Both members collaborate via Git branches and pull requests, tracked on the [GitHub repository](https://github.com/itt2024012/Recipe-Nest).

## License
Academic project for ICT 1209 – Rajarata University of Sri Lanka. For educational use only.
