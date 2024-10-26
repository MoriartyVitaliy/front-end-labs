import React, { useState } from 'react';

function Projects() {
  const projectData = [
    { id: 1, name: 'Project Alpha', description: 'A cutting-edge AI project', date: '2023', technologies: 'AI, Python' },
    { id: 2, name: 'Project Beta', description: 'Blockchain-based app', date: '2023', technologies: 'Blockchain, JS' },
    { id: 3, name: 'Project Gamma', description: 'E-commerce platform', date: '2023', technologies: 'React, Node' },
    { id: 4, name: 'Project Delta', description: 'Chat application', date: '2022', technologies: 'React, Firebase' },
    { id: 5, name: 'Project Epsilon', description: 'Data analysis tool', date: '2022', technologies: 'Python, SQL' },
    { id: 6, name: 'Project Zeta', description: 'Social media analytics', date: '2022', technologies: 'Python, ML' },
    { id: 7, name: 'Project Eta', description: 'Weather forecasting', date: '2021', technologies: 'AI, Meteorology' },
    { id: 8, name: 'Project Theta', description: 'Video streaming service', date: '2021', technologies: 'React, WebRTC' },
    { id: 9, name: 'Project Iota', description: 'Language translation app', date: '2023', technologies: 'AI, NLP' },
    { id: 10, name: 'Project Kappa', description: 'Fitness tracker', date: '2022', technologies: 'React, Firebase' },
    { id: 11, name: 'Project Lambda', description: 'Smart home system', date: '2023', technologies: 'IoT, Python' },
    { id: 12, name: 'Project Mu', description: 'Digital marketing dashboard', date: '2021', technologies: 'Node, MongoDB' },
    { id: 13, name: 'Project Nu', description: 'Healthcare management app', date: '2022', technologies: 'React, SQL' },
    { id: 14, name: 'Project Xi', description: 'Online quiz platform', date: '2021', technologies: 'JavaScript, Firebase' },
    { id: 15, name: 'Project Omicron', description: 'Machine learning research tool', date: '2022', technologies: 'Python, ML' },
    { id: 16, name: 'Project Pi', description: 'Virtual event platform', date: '2022', technologies: 'Node, WebRTC' },
    { id: 17, name: 'Project Rho', description: 'Investment analysis tool', date: '2021', technologies: 'Python, SQL' },
    { id: 18, name: 'Project Sigma', description: 'Online education platform', date: '2023', technologies: 'React, Node' },
    { id: 19, name: 'Project Tau', description: 'Customer relationship management', date: '2021', technologies: 'JS, MongoDB' },
    { id: 20, name: 'Project Upsilon', description: 'Fitness coaching app', date: '2023', technologies: 'React, Firebase' },
    { id: 21, name: 'Project Phi', description: 'Voice recognition app', date: '2022', technologies: 'AI, NLP' },
    { id: 22, name: 'Project Chi', description: 'Smart city platform', date: '2023', technologies: 'IoT, Cloud' },
    { id: 23, name: 'Project Psi', description: 'Personal finance manager', date: '2021', technologies: 'Node, SQL' },
    { id: 24, name: 'Project Omega', description: 'Content management system', date: '2022', technologies: 'JavaScript, MongoDB' },
    { id: 25, name: 'Project Alpha2', description: 'Inventory tracking app', date: '2022', technologies: 'React, SQL' },
    { id: 26, name: 'Project Beta2', description: 'Real-time chat service', date: '2021', technologies: 'Node, WebSocket' },
    { id: 27, name: 'Project Gamma2', description: 'Augmented reality app', date: '2023', technologies: 'Unity, ARCore' },
    { id: 28, name: 'Project Delta2', description: 'Remote learning platform', date: '2023', technologies: 'React, Node' },
    { id: 29, name: 'Project Epsilon2', description: 'Event ticketing app', date: '2021', technologies: 'JavaScript, SQL' },
    { id: 30, name: 'Project Zeta2', description: 'AI-powered chatbot', date: '2023', technologies: 'AI, Python' },
    { id: 31, name: 'Project Eta2', description: 'Weather data analysis', date: '2022', technologies: 'Python, Data Science' },
    { id: 32, name: 'Project Theta2', description: 'Virtual reality game', date: '2022', technologies: 'Unity, C#' },
    { id: 33, name: 'Project Iota2', description: 'SEO optimization tool', date: '2022', technologies: 'Node, MongoDB' },
    { id: 34, name: 'Project Kappa2', description: 'Real estate management app', date: '2021', technologies: 'React, Firebase' },
    { id: 35, name: 'Project Lambda2', description: 'Crypto trading platform', date: '2022', technologies: 'Blockchain, JS' },
    { id: 36, name: 'Project Mu2', description: 'AI image recognition', date: '2023', technologies: 'AI, Computer Vision' },
    { id: 37, name: 'Project Nu2', description: 'Social networking site', date: '2021', technologies: 'React, Node' }
  ];
  

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

  const filteredProjects = projectData
    .filter(project => 
        Object.values(project).some(value =>
            typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
        )
    )
    .sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (key) => {
    const direction = (sortConfig.key === key && sortConfig.direction === 'ascending') ? 'descending' : 'ascending';
    setSortConfig({ key, direction });
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section id="projects">
      <h2 id="projects-title">Projects</h2>
      <div id="search-pagination-container">
        <input
          type="text"
          id="search-input"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={e => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
        <div id="pagination-buttons">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageClick(index + 1)}
              style={{ fontWeight: currentPage === index + 1 ? 'bold' : 'normal' }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <table id="projects-table">
        <thead>
          <tr>
            <th id="project-name-header" onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>
              Project Name {sortConfig.key === 'name' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : ''}
            </th>
            <th id="description-header" onClick={() => handleSort('description')} style={{ cursor: 'pointer' }}>
              Description {sortConfig.key === 'description' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : ''}
            </th>
            <th id="date-header" onClick={() => handleSort('date')} style={{ cursor: 'pointer' }}>
              Date {sortConfig.key === 'date' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : ''}
            </th>
            <th id="technologies-header" onClick={() => handleSort('technologies')} style={{ cursor: 'pointer' }}>
              Technologies {sortConfig.key === 'technologies' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : ''}
            </th>
          </tr>
        </thead>
        <tbody>
          {currentProjects.map(project => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>{project.date}</td>
              <td>{project.technologies}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Projects;
