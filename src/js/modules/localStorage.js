
import Project from './project';

const getProjectsLs = () => {
  const projects = localStorage.getItem('projects') === null ? [Project('General')] : JSON.parse(localStorage.getItem('projects'));
  return projects;
};

const setProjectsLs = (projects) => {
  localStorage.setItem('projects', JSON.stringify(projects));
};

export { getProjectsLs, setProjectsLs };