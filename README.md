# Professional Portfolio Website

A modern, responsive static portfolio website built with HTML5, CSS3, JavaScript, and Bootstrap 5.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Project Showcase**: Display your projects with descriptions, technologies, and links
- **Contact Form**: Local form feedback with email redirect
- **Modern UI**: Built with Bootstrap 5 and custom CSS with smooth animations
- **Static Site**: No backend or database required - fast and lightweight

## Tech Stack

**Frontend:**
- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- Google Fonts (Inter)

**Tools:**
- Git & GitHub
- VS Code
- http-server (for local development)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Clone or navigate to the project directory:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`

4. **Open in browser:**
   Navigate to `http://localhost:5000`

## Adding/Editing Projects

To add or edit projects, modify the `PROJECTS` array in `public/js/app.js`:

```javascript
const PROJECTS = [
  {
    title: "Project Name",
    description: "Project description",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    imageUrl: "https://example.com/image.jpg",
    githubLink: "https://github.com/user/repo"
  }
];
```

**Project Object Properties:**
- `title` (string) - Project name
- `description` (string) - Project description
- `technologies` (array) - List of technologies used
- `imageUrl` (string, optional) - Project image URL
- `githubLink` (string, optional) - GitHub repository link

## Customization

### Update Personal Information
Edit `public/index.html` to update:
- Your name and title
- About section
- Social media links
- Contact information

### Modify Styling
Edit `public/css/style.css` to customize:
- Colors (change `#667eea` and `#764ba2`)
- Fonts
- Spacing
- Animations

### Add More Sections
Add new sections to `public/index.html` and update navigation links.

## Deployment

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: (leave empty - static site)
3. Set publish directory: `public`
4. Deploy

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Set root directory: `public`
3. Deploy

### Deploy to GitHub Pages

1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Set source to `main` branch and `/public` folder

### Deploy to Any Static Host

Since this is a static site, you can deploy the `public` folder to any static hosting service (AWS S3, Firebase Hosting, etc.)

## Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
├── server.js
├── package.json
├── .env
└── README.md
```

## Future Enhancements

- [ ] Add blog section
- [ ] Add dark mode toggle
- [ ] Email integration for contact form
- [ ] Project filtering by technology
- [ ] Analytics integration
- [ ] SEO optimization

## License

MIT License - Feel free to use this project for your portfolio.

## Support

For issues or questions, please create an issue on GitHub.
