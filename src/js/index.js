/* eslint-disable no-undef */
import '../styles/styles.scss';

const navigation = document.getElementById('navigation');
const mainView = document.getElementById('main-view');
const buttonTrigger = document.querySelectorAll('[data-target]');
const modal1 = document.getElementById('modal-1');
/*  */

const Project = (projectName) => {
  const pName = projectName;
  const pTodos = [];

  const setTodos = (todo) => {
    pTodos.push(todo);
  };

  return {
    pName, pTodos, setTodos,
  };
};

const getProjectsLs = () => {
  const projects = localStorage.getItem('projects') === null ? [Project('General')] : JSON.parse(localStorage.getItem('projects'));
  return projects;
};

const setProjectsLs = (projects) => {
  localStorage.setItem('projects', JSON.stringify(projects));
};

const Todo = (title, description, date, priority, project) => {
  const tTitle = title;
  const tDescription = description;
  const tDate = date;
  const tPriority = priority;
  const tProject = project;

  return {
    tTitle, tDescription, tDate, tPriority, tProject,
  };
};

const renderProjects = () => {
  const container = document.getElementById('projects-container');
  const projects = getProjectsLs();
  projects.forEach(project => {
    const projectElement = document.createElement('span');
    const pname = project.pName;
    projectElement.innerText = pname;
    projectElement.classList.add('project-name-bar');
    container.appendChild(projectElement);
  });
};

const renderTodos = () => {
  const container = document.getElementById('tasks-container');
  const projects = getProjectsLs();
  projects.forEach(project => {
    project.pTodos.forEach(todo => {
      const taskname = document.createElement('span');
      taskname.innerHTML = todo.tTitle;
      taskname.classList.add('todo-name-bar');
      container.appendChild(taskname);
    });
  });
};

const closeModals = (closeBtns) => {
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.querySelector('.custom-modal');
      modal.classList.remove('show');
      modal.classList.add('hide');
    });
  });
};

const populateSelect = () => {
  const projects = getProjectsLs();
  let template = '';
  projects.forEach(project => {
    template += `<option value="${project.pName}">${project.pName}</option> \n`;
  });
  return template;
};

const addFirstForm = () => {
  const modalContent = document.getElementById('modal-content');
  modalContent.innerHTML = '';
  modalContent.innerHTML = `
  <form id="projectName">
    <div class="form-group">
      <label for="project-name">Project Name</label>
      <input type="text" class="form-control" id="pName" />
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary modal-close">Close</button>
      <button type="submit" class="btn btn-primary modal-close">Add</button>
    </div>
  </form>
  `;
};

const addSecondForm = () => {
  const modalContent = document.getElementById('modal-content');
  modalContent.innerHTML = '';
  modalContent.innerHTML = `
  <form id="taskForm">
    <div class="form-group">
      <label for="todo-name">Title</label>
      <input type="text" class="form-control" id="tTitle" />
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        type="text"
        class="form-control"
        cols="4"
        rows="3"
        id="tDescription"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="due-date">Due Date</label>
      <input type="date" class="form-control" id="tDueDate" />
    </div>
    <div class="form-group">
      <label for="priority">Priority</label>
      <select class="form-control" id="tPriority" style="font-size: 1.4rem;">
        <option hidden selected>Select Priority</option>
        <option value="high">High</option>
        <option value="moderate">Moderate</option>
        <option value="low">Low</option>
      </select>
    </div>
    <div class="form-group">
      <label for="project">Project</label>
      <select class="form-control" id="tProject" style="font-size: 1.4rem;">
        <option hidden selected>Select Project</option>
        ${populateSelect()}
      </select>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary modal-close">Close</button>
      <button type="submit" class="btn btn-primary modal-close" id="second-btn">Add</button>
    </div>
  </form>
  `;
};

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
  }, { once: true }); /* Enable just one time */
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
    const todo = Todo(tTitle, tDescription, tDuedate, selectedPriority, selectedProject);

    projectsArray[projectsArray.findIndex(
      project => project.pName === selectedProject,
    )].pTodos.push(todo);

    setProjectsLs(projectsArray);
    renderTodos();
  }, { once: true });
});

const setHeight = () => {
  const height = navigation.offsetHeight;
  mainView.style.height = `${window.innerHeight - height}px`;
};

document.addEventListener('DOMContentLoaded', setHeight);
document.addEventListener('DOMContentLoaded', renderProjects);
document.addEventListener('DOMContentLoaded', renderTodos);
window.addEventListener('resize', setHeight);
