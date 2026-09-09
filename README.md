# Personal Portfolio Website

This is a simple responsive student portfolio website created for the TAE-1 project in Web Fundamentals & Basic Frontend Design.

## Pages

- `index.html` - complete multi-section portfolio
- `about.html` - About page
- `skills.html` - Skills page
- `projects.html` - Projects page with filtering
- `contact.html` - Contact page with Formspree form

## Features

- Navbar links open each page in a new browser tab
- Responsive mobile menu
- Six real project cards with simple category filtering
- Client-side contact form validation
- Formspree form submission
- Email, LinkedIn, and GitHub contact links

## Technologies Used

- HTML5
- Tailwind CSS through CDN
- Vanilla JavaScript

## How to Run

Open `index.html` in a browser. An internet connection is needed for Tailwind CSS and Formspree.

## Project Filtering

Each project has a `data-category` attribute. JavaScript reads the selected filter and loops through the project cards. Matching cards are shown and other cards receive the `hidden` class.

## Contact Form

The form uses Formspree with this endpoint:

```text
https://formspree.io/f/myeyljla
```

JavaScript checks the name, email, subject, and message before allowing the form to submit.
