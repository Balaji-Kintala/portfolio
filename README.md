# Professional Portfolio Website

A modern, responsive portfolio website built with Node.js, Express, MongoDB, and Bootstrap 5.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Project Showcase**: Display your projects with descriptions, technologies, and links
- **Contact Form**: Collect messages from visitors with MongoDB storage
- **Modern UI**: Built with Bootstrap 5 and custom CSS with smooth animations
- **RESTful API**: Backend API for managing projects and contact messages

## Tech Stack

**Frontend:**
- HTML5
- CSS3
- JavaScript (ES6+)
- jQuery (optional)
- Bootstrap 5
- Handlebars.js (optional)

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB

**Tools:**
- Git & GitHub
- VS Code

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
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

3. **Configure environment variables:**
   Create a `.env` file in the root directory:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   NODE_ENV=development
   ```

   For MongoDB Atlas (cloud):
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
   ```

4. **Start the server:**
   ```bash
   npm start
   ```

5. **Open in browser:**
   Navigate to `http://localhost:5000`

## API Endpoints

### Projects

- **GET** `/api/projects` - Fetch all projects
- **POST** `/api/projects` - Add a new project

**Project Object:**
```json
{
  "title": "Project Name",
  "description": "Project description",
  "technologies": ["JavaScript", "Node.js", "MongoDB"],
  "imageUrl": "https://example.com/image.jpg",
  "liveLink": "https://example.com",
  "githubLink": "https://github.com/user/repo"
}
```

### Contact Messages

- **GET** `/api/contact` - Fetch all contact messages
- **POST** `/api/contact` - Submit a contact message

**Contact Object:**
```json
{
  "name": "Visitor Name",
  "email": "visitor@example.com",
  "message": "Message content"
}
```

## Adding Projects

You can add projects via the API:

```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Awesome Project",
    "description": "A brief description of the project",
    "technologies": ["JavaScript", "Node.js", "MongoDB"],
    "imageUrl": "https://example.com/image.jpg",
    "liveLink": "https://project-demo.com",
    "githubLink": "https://github.com/user/project"
  }'
```

Or use a tool like Postman to make requests.

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

### Deploy to Heroku

1. Create a Heroku account and install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Set environment variables:
   ```bash
   heroku config:set MONGODB_URI=your_mongodb_uri
   ```
5. Deploy: `git push heroku main`

### Deploy to Netlify (Frontend Only)
Build a static version and deploy the `public` folder.

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
- [ ] Implement admin dashboard
- [ ] Add dark mode toggle
- [ ] Email notifications for contact messages
- [ ] Project filtering by technology
- [ ] Analytics integration

## License

MIT License - Feel free to use this project for your portfolio.

## Support

For issues or questions, please create an issue on GitHub.
