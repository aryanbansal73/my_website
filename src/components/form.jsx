import { useState } from 'react';
import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function ContentForm() {
  const [content, setContent] = useState({
    landing: { title: '', subtitle: '', cta: '' },
    home: { greeting: '', description: '' },
    about: { bio: '', image: '' },
    skills: { frontend: [], backend: [], tools: [] },
    experiences: [],
    projects: [],
    contact: { email: '', phone: '', address: '' },
    socials: { twitter: '', linkedin: '', github: '', youtube: '' },
    competitiveWebsites: [],
  });

  // Handlers to update form fields
  const handleChange = (section, field, value) => {
    setContent({
      ...content,
      [section]: {
        ...content[section],
        [field]: value,
      },
    });
  };

  // Add dynamic forms
  const addSkill = (type) => {
    setContent({
      ...content,
      skills: {
        ...content.skills,
        [type]: [...content.skills[type], { name: '', icon: '' }],
      },
    });
  };

  const addExperience = () => {
    setContent({
      ...content,
      experiences: [
        ...content.experiences,
        { company: '', logo: '', title: '', duration: '', description: [] },
      ],
    });
  };

  const addProject = () => {
    setContent({
      ...content,
      projects: [
        ...content.projects,
        { name: '', description: '', tech: [], github: '', live: '' },
      ],
    });
  };

  // Remove fields
  const removeItem = (section, index) => {
    const updatedArray = content[section].filter((_, i) => i !== index);
    setContent({
      ...content,
      [section]: updatedArray,
    });
  };

  // Render form sections
  return (
    <div className="container mt-4">
      <h1>Portfolio Builder</h1>

      {/* Landing Section */}
      <h2>Landing</h2>
      <Form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={content.landing.title}
            onChange={(e) => handleChange('landing', 'title', e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Subtitle</Form.Label>
          <Form.Control
            type="text"
            value={content.landing.subtitle}
            onChange={(e) => handleChange('landing', 'subtitle', e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Call to Action</Form.Label>
          <Form.Control
            type="text"
            value={content.landing.cta}
            onChange={(e) => handleChange('landing', 'cta', e.target.value)}
          />
        </Form.Group>
      </Form>

      {/* Home Section */}
      <h2>Home</h2>
      <Form>
        <Form.Group>
          <Form.Label>Greeting</Form.Label>
          <Form.Control
            type="text"
            value={content.home.greeting}
            onChange={(e) => handleChange('home', 'greeting', e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={content.home.description}
            onChange={(e) => handleChange('home', 'description', e.target.value)}
          />
        </Form.Group>
      </Form>

      {/* About Section */}
      <h2>About</h2>
      <Form>
        <Form.Group>
          <Form.Label>Bio</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={content.about.bio}
            onChange={(e) => handleChange('about', 'bio', e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Profile Image</Form.Label>
          <Form.Control
            type="text"
            value={content.about.image}
            onChange={(e) => handleChange('about', 'image', e.target.value)}
          />
        </Form.Group>
      </Form>

      {/* Skills Section */}
      <h2>Skills</h2>
      <Button variant="primary" onClick={() => addSkill('frontend')}>
        Add Frontend Skill
      </Button>
      <Button variant="primary" onClick={() => addSkill('backend')}>
        Add Backend Skill
      </Button>

      {/* Experiences Section */}
      <h2>Experiences</h2>
      {content.experiences.map((experience, index) => (
        <div key={index}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  value={experience.company}
                  onChange={(e) =>
                    handleChange(`experiences[${index}]`, 'company', e.target.value)
                  }
                />
              </Form.Group>
            </Col>
            <Col>
              <Button variant="danger" onClick={() => removeItem('experiences', index)}>
                Remove Experience
              </Button>
            </Col>
          </Row>
        </div>
      ))}
      <Button variant="primary" onClick={addExperience}>
        Add Experience
      </Button>

      {/* Projects Section */}
      <h2>Projects</h2>
      {content.projects.map((project, index) => (
        <div key={index}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Project Name</Form.Label>
                <Form.Control
                  type="text"
                  value={project.name}
                  onChange={(e) =>
                    handleChange(`projects[${index}]`, 'name', e.target.value)
                  }
                />
              </Form.Group>
            </Col>
            <Col>
              <Button variant="danger" onClick={() => removeItem('projects', index)}>
                Remove Project
              </Button>
            </Col>
          </Row>
        </div>
      ))}
      <Button variant="primary" onClick={addProject}>
        Add Project
      </Button>

      <Button
        className="mt-4"
        variant="success"
        onClick={() => {
          console.log(JSON.stringify(content, null, 2));
          // Download logic can be implemented here
        }}
      >
        Generate JSON
      </Button>
    </div>
  );
}

export default ContentForm;
