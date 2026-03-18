# 🌐📐 MathSphere

MathSphere is an interactive educational web platform designed to help students explore 
mathematical concepts through visualization, practice, and smart tools. This project was 
developed as an individual assignment for the COM 2303 - Web Design course.

---

## 🚀 Features

- 📚 **Topics** – Covers Statistics, Probability, Geometry, Algebra, Trigonometry, Calculus, and Vectors
- 📝 **Practice** – Interactive practice questions to test knowledge
- 🧮 **Calculators** – Smart calculators for various math topics
- 🔐 **Login / Register** – User authentication with PHP sessions and password hashing
- 💬 **Contact Form** – Users can submit messages stored in the database
- 🖥️ **Dashboard** – Personalised welcome page after login
- 📱 **Responsive Design** – Mobile-friendly layout with hamburger navigation

---

## 🛠️ Technologies Used

- **HTML5** – Semantic web structuring
- **CSS3** – Custom styling with advanced animations and layouts
- **Bootstrap 5** – Responsive grid systems and pre-built components
- **JavaScript (ES6)** – Interactive logic, calculations, and quiz engine
- **PHP 8** – Backend logic, session handling, and form processing
- **MySQL** – Database for users and messages
- **MathJax** – Renders mathematical equations and formulas
- **XAMPP** – Local development server (Apache + MySQL)

---

## 📁 Project Structure
```
MathSphere/
│
├── 📂 css/                  # Stylesheets
│   ├── style.css            # Global styles & navigation
│   ├── about.css            # About page styles
│   └── Learn_more.css       # Typography & layout for educational content
│
├── 📂 js/                   # JavaScript Logic
│   ├── about.js             # About page animations and contact form
│   └── topics.js            # Topic slider logic
│
├── 📂 images/               # Visual Assets
│   └── logo.png             # Site favicon and header logo
│
├── 📂 includes/             # PHP Helper Files
│   ├── db.php               # Database connection
│   └── functions.php        # Helper functions (sanitize, validate)
│
├── 📂 auth/                 # Authentication Scripts
│   ├── login.php            # Login logic
│   ├── register.php         # Registration logic
│   └── logout.php           # Session destroy and redirect
│
├── 📄 contact.php           # Contact form handler
├── 📄 index.html            # Landing Page
├── 📄 topics.html           # Interactive Topics Gallery
├── 📄 Learn_more.html       # Detailed Math Content (MathJax)
├── 📄 practice.html         # Quiz & Practice Panel
├── 📄 calculators.html      # Scientific & Standard Calculators
├── 📄 about.html            # About page with contact form
├── 📄 login.html            # User Sign-in Page
├── 📄 register.html         # User Registration Page
├── 📄 database.sql          # MySQL database export
└── 📄 README.md             # Project documentation
```

---

## 🗄️ Database Structure

**Database name:** `mathsphere`

| Table | Fields |
|---|---|
| `users` | id, username, email, password (hashed), created_at |
| `messages` | id, name, email, message, created_at |

---

## ⚙️ Setup Instructions

### Requirements
- XAMPP (Apache + MySQL) — download from [apachefriends.org](https://www.apachefriends.org)

### Steps to run locally

1. **Clone or download** this repository
2. **Copy** the `MathSphere` folder into your XAMPP folder:
   - Windows: `C:\xampp\htdocs\MathSphere\`
   - Mac: `/Applications/XAMPP/htdocs/MathSphere/`
3. **Start XAMPP** — click Start on both Apache and MySQL
4. **Open phpMyAdmin** at `http://localhost/phpmyadmin`
5. **Create a new database** named exactly: `mathsphere`
6. **Import the database** — click Import → select `database.sql` → click Go
7. **Open the website** at `http://localhost/MathSphere/`

---

## 🔐 User Authentication

- Register a new account at `/register.html`
- Login at `/login.html`
- Passwords are securely hashed using PHP `password_hash()`
- Sessions are managed server-side using PHP `$_SESSION`
- Logout destroys the session via `/auth/logout.php`

---

## 💬 Contact Form

- Located on the About Us page (`/about.html`)
- Submissions are stored in the `messages` table in the database
- Handled by `contact.php`

---

## 👩‍🎓 Author

| Field | Details |
|---|---|
| **Student Name** | Tharushi Subhani |
| **Index No** | 6243 |
| **Registration No** | ASP/2023/102 |
| **Course** | COM 2303 – Web Design |
| **Project Type** | Individual Project – Phase 3 |
