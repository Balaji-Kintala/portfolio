require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  seedProjects();
})
.catch(err => console.log('MongoDB connection error:', err));

// Schemas
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  imageUrl: String,
  liveLink: String,
  githubLink: String,
  createdAt: { type: Date, default: Date.now }
});

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Project = mongoose.model('Project', projectSchema);
const Contact = mongoose.model('Contact', contactSchema);

// Seed projects function
async function seedProjects() {
  try {
    const count = await Project.countDocuments();
    if (count === 0) {
      const sampleProjects = JSON.parse(fs.readFileSync(path.join(__dirname, 'sample-projects.json'), 'utf8'));
      await Project.insertMany(sampleProjects);
      console.log('Sample projects seeded successfully');
    }
  } catch (error) {
    console.log('Error seeding projects:', error.message);
  }
}

// Routes
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    if (projects.length === 0) {
      // Return sample projects if database is empty
      const sampleProjects = JSON.parse(fs.readFileSync(path.join(__dirname, 'sample-projects.json'), 'utf8'));
      return res.json(sampleProjects);
    }
    res.json(projects);
  } catch (error) {
    console.log('Error fetching projects:', error.message);
    // Fallback to sample projects if there's an error
    try {
      const sampleProjects = JSON.parse(fs.readFileSync(path.join(__dirname, 'sample-projects.json'), 'utf8'));
      res.json(sampleProjects);
    } catch (fallbackError) {
      res.status(500).json({ error: 'Could not load projects' });
    }
  }
});

app.post('/api/projects', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/contact', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
