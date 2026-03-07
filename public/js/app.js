// Static projects data
const PROJECTS = [
  {
    title: "Online Shopping Application",
    description: "This project is an Online Shopping Application with a React and TypeScript frontend and a Node.js/Express backend. Users can browse products, view details, add items to a cart, and proceed to checkout. The backend manages authentication, product and category data, and user accounts using MongoDB. The app is structured for scalability and modern web development best practices.",
    technologies: ["React", "TypeScript","Vite","Tailwind CSS","Axios","Node.js","Express.js","MongoDB", "JWT (JSON Web Tokens)"], 
    githubLink: "https://github.com/Balaji-Kintala/OnlineShopping"
  },
  {
    title: "Internship Management System",
    description: "This Internship Management System is a MERN stack web application that helps manage internships, users, teams, tasks, resources, exams, and progress. It features a Node.js/Express backend with RESTful APIs and authentication, and a React frontend with role-based dashboards for admins and interns. The system streamlines internship administration and progress tracking in an organized, scalable way.",
    technologies: ["React", "Node.js","Express.js","MongoDB","JavaScript","HTML","CSS"],
    githubLink: "https://github.com/Balaji-Kintala/internship-management-app"
  },
  {
    title: "Modern Web Application for Tours & Regions",
    description: "This project is a full-stack web application for exploring tours and regions. It features a Node.js/TypeScript backend for managing users, places, regions, and reviews, and a React/TypeScript frontend for user interaction, authentication, and browsing tour information.",
    technologies: ["React", "TypeScript","Vite","CSS","Axios","Node.js","Express.js","MongoDB"],
    githubLink: "https://github.com/Balaji-Kintala/modern-web-application-for-tours-and-regions"
  },
  {
    title: "Solar Catalogue",
    description: "Solar product catalogue web application built with React and Vite. It features multiple pages (Home, Products, About, Contact, Dealers), reusable components (Navbar, Footer, ProductModal), and organized styles for each section. The app likely allows users to browse solar products, view details in modals, and access information about the company and its dealers.",
    technologies: ["React", "Vite","JavaScript (JSX)","CSS"],
    githubLink: "https://github.com/Balaji-Kintala/solar-catalogue"
  }
];

// Load projects from static data
function loadProjects() {
  const container = document.getElementById('projectsContainer');
  if (!container) return;
  
  container.innerHTML = '';
  PROJECTS.forEach(project => {
    container.appendChild(createProjectCard(project));
  });
}

// Create project card element
function createProjectCard(project) {
  const col = document.createElement('div');
  col.className = 'col-md-6 col-lg-4 mb-4';
  
  const card = document.createElement('div');
  card.className = 'project-card';
  
  const imageDiv = document.createElement('div');
  imageDiv.className = 'project-image';
  imageDiv.innerHTML = project.imageUrl ? `<img src="${project.imageUrl}" alt="${project.title}">` : '📁';
  
  const content = document.createElement('div');
  content.className = 'project-content';
  
  const title = document.createElement('h5');
  title.textContent = project.title;
  
  const description = document.createElement('p');
  description.textContent = project.description;
  
  const techTags = document.createElement('div');
  techTags.className = 'tech-tags';
  if (project.technologies && Array.isArray(project.technologies)) {
    project.technologies.forEach(tech => {
      const tag = document.createElement('span');
      tag.className = 'tech-tag';
      tag.textContent = tech;
      techTags.appendChild(tag);
    });
  }
  
  const links = document.createElement('div');
  links.className = 'project-links';
  if (project.githubLink) {
    const githubBtn = document.createElement('a');
    githubBtn.href = project.githubLink;
    githubBtn.target = '_blank';
    githubBtn.className = 'btn-github';
    githubBtn.textContent = 'GitHub';
    links.appendChild(githubBtn);
  }
  
  content.appendChild(title);
  content.appendChild(description);
  content.appendChild(techTags);
  content.appendChild(links);
  
  card.appendChild(imageDiv);
  card.appendChild(content);
  col.appendChild(card);
  
  return col;
}

// Setup contact form with local feedback
function setupContactForm() {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Show success message
    formMessage.innerHTML = '<div class="alert-success">✓ Thank you for your message! Please contact me directly at kintalabalaji03@gmail.com</div>';
    form.reset();
    
    // Clear message after 5 seconds
    setTimeout(() => {
      formMessage.innerHTML = '';
    }, 5000);
  });
}

// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    setupContactForm();
  });
} else if (document.readyState === 'complete') {
  loadProjects();
  setupContactForm();
}
