import React, { useEffect, useState } from 'react';
import projects from './assets/projects.json';

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const filteredProjects = selectedTag === 'All' ? projects : projects.filter(project => project.tags.includes(selectedTag));
  

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };


  function openModal(project) {
    document.getElementById('modalTitle').innerText = project.name;
    document.getElementById('modalDescription').innerText = project.description;
    document.getElementById('modalTech').innerText = project.tech_used.join(', ');
    document.getElementById('modalLink').href = project.link;
    document.getElementById('projectModal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
  }
  
  window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }

  return (
<section id="projects">
  <div className="container">
    <h3 className='proj'>Projects</h3>

    <div className='row d-flex justify-content-center mb-3'>
        {['All', 'Data Science','Development', 'Machine Learning'].map((tag) => (
          <button
          key={tag}
          className={`col-md-3 proj-btn ${selectedTag === tag ? 'selected' : ''}`}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </button>
        ))}
      </div>
    <div className="row">
      {filteredProjects.map((project, index) => (
        <div key={index} className="col-md-3 mb-4 d-flex" onClick={() => openModal(project)}>
          <div className="card flex-fill project-card">
            <img className="card-img-top" src='' />
            <div className="card-overlay">
              <div className="hover-content">
                <p>{project.description}</p>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <p>{project.tech_used.join(', ')}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div id="projectModal" className="modal">
    <div className="modal-content">
      <span className="close" onClick={closeModal}>&times;</span>
      <h5 id="modalTitle"></h5>
      <p id="modalDescription"></p>
      <p id="modalTech"></p>
      <p><a id="modalLink" href="#" target="_blank" rel="noopener noreferrer">View Project</a></p>
      
    </div>
  </div>
</section>




  );
};

export default Projects;
