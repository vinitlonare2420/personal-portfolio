# Personal Portfolio Website

This is a simple student portfolio website created for the TAE-1 project in Web Fundamentals & Basic Frontend Design.

## Features

- Responsive navbar with a basic mobile menu
- Home, About, Skills, Projects, Contact, and Footer sections
- Six sample project cards
- Project filtering by category
- Basic contact form validation

## Technologies Used

- HTML5
- Tailwind CSS through CDN
- Vanilla JavaScript

## Project Structure

```text
portfolio/
├── index.html
├── script.js
└── README.md
```

## How to Run

Open `index.html` in a browser. No npm or build process is needed. The Tailwind CDN needs an internet connection to load the styling.

## How Project Filtering Works

Each project has a `data-category` attribute. When a filter button is clicked, JavaScript loops through all project cards. It shows matching cards and adds the `hidden` class to the other cards.

## How Contact Validation Works

JavaScript uses `preventDefault()` so the form does not reload the page. It checks the name, email, subject, and message. It also checks the email with a basic pattern. Error messages appear below invalid fields, and a success message appears when the form is valid.

## GitHub Pages Deployment

1. Create a GitHub repository.
2. Upload the three files from the `portfolio` folder.
3. Open **Settings**, then choose **Pages**.
4. Select **Deploy from a branch**, choose the main branch and root folder, and save.

## JavaScript Concepts Used

- `getElementById()`
- `querySelectorAll()`
- `addEventListener()`
- `forEach()`
- `if` and `else`
- `classList`
- `getAttribute()`
- `preventDefault()`
