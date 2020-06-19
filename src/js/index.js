import '../styles/styles.scss';
import { getProjectsLs, setProjectsLs } from './modules/localStorage';
import { addFirstForm, addSecondForm, closeModals } from './modules/formTemplateRender';
import { renderProjectDetails, renderProjects, renderTodos } from './modules/renderEngine';
import Project from './modules/project';
import Todo from './modules/todo';
import setHeight from './modules/reziser';

const buttonTrigger = document.querySelectorAll('[data-target]');
const modal1 = document.getElementById('modal-1');

buttonTrigger[0].addEventListener('click', () => {
  modal1.classList.remove('hide');
  modal1.classList.add('show');
  addFirstForm();
  const closeBtns = document.querySelectorAll('.modal-close');
  const form = document.getElementById('projectName');
  closeModals(closeBtns);
  form.addEventListener('submit', (e) => {
    const projects = getProjectsLs();
    e.preventDefault();
    e.stopPropagation();
    const pname = document.getElementById('pName').value;
    const projectObject = Project(pname);
    projects.push(projectObject);
    setProjectsLs(projects);
    renderProjects();
    renderProjectDetails(renderProjects().findIndex(project => project.pName === pname));
  }, { once: true });
});


buttonTrigger[1].addEventListener('click', () => {
  modal1.classList.remove('hide');
  modal1.classList.add('show');
  addSecondForm();
  const closeBtns = document.querySelectorAll('.modal-close');
  const form = document.getElementById('taskForm');
  closeModals(closeBtns);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const projectsArray = getProjectsLs();
    const tTitle = document.getElementById('tTitle').value;
    const tDescription = document.getElementById('tDescription').value;
    const tDuedate = document.getElementById('tDueDate').value;
    const tPriority = document.getElementById('tPriority');
    const selectedPriority = tPriority.options[tPriority.selectedIndex].value;
    const tProject = document.getElementById('tProject');
    const selectedProject = tProject.options[tProject.selectedIndex].value;
    const todo = Todo(tTitle, tDescription, tDuedate, selectedPriority, selectedProject, false);

    projectsArray[projectsArray.findIndex(
      project => project.pName === selectedProject,
    )].pTodos.push(todo);

    setProjectsLs(projectsArray);
    renderTodos();
  }, { once: true });
});

document.addEventListener('DOMContentLoaded', setHeight);
document.addEventListener('DOMContentLoaded', renderProjects);
document.addEventListener('DOMContentLoaded', renderTodos);
document.addEventListener('DOMContentLoaded', renderProjectDetails.bind(this, 0));
window.addEventListener('resize', setHeight);
