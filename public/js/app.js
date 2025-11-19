// Static projects data
const PROJECTS = [
  {
    title: "Online Shopping Application",
    description: "Full-stack e-commerce platform with user authentication, product browsing, shopping cart management, and admin dashboard for product and order management.",
    technologies: ["Node.js", "MongoDB", "HTML5", "CSS3", "jQuery", "Bootstrap 5", "Handlebars.js"],
    githubLink: "https://github.com/Balaji-Kintala/OnlineShopping"
  },
  {
    title: "Internship Management System",
    description: "Full-stack MERN application for managing internships, teams, and tasks. Features role-based access control, task submission with file uploads, exam management with automated scoring, and progress tracking.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Bootstrap 5", "JWT"],
    githubLink: "https://github.com/Balaji-Kintala/internship-management-app"
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
