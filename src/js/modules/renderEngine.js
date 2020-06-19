import { getProjectsLs, setProjectsLs } from './localStorage';
import { addSecondForm, closeModals } from './formTemplateRender';

const renderProjectDetails = (index) => {
  const pendingContainer = document.getElementById('pending');
  const completedContainer = document.getElementById('completed');
  const projectHeader = document.getElementById('todos-project-title');
  const projectsArray = getProjectsLs();
  const projectToRender = projectsArray[index];
  pendingContainer.innerHTML = '';
  completedContainer.innerHTML = '';
  projectHeader.innerText = `Pending to-do's in: ${projectToRender.pName}`;
  projectToRender.pTodos.forEach((todo, todoIndex) => {
    const template = `
      <div class="todo" data-project="${todo.tProject}" data-index="${todoIndex}" data-status="${todo.tStatus}" data-parent="${index}">
        <i class="fas fa-random status-trigger"></i>
        <div class="todo-priority">
          <i class="fas fa-circle ${todo.tPriority}"></i>
        </div>
        <div class="info-wrapper">
          <div class="todo-title">${todo.tTitle}</div>
          <div class="todo-description">${todo.tDescription}</div>
        </div>
        <div class="todo-due-date">
          <span>Due date: ${todo.tDate}</span>
        </div>
        <i class="far fa-edit"></i>
        <i class="far fa-trash-alt trash-trigger"></i>
      </div>
      `;
    if (todo.tStatus === false) {
      pendingContainer.innerHTML += template;
    } else {
      completedContainer.innerHTML += template;
    }
  });
  const triggerGroup = document.querySelectorAll('.status-trigger');
  triggerGroup.forEach(triggerElement => {
    // eslint-disable-next-line no-use-before-define
    triggerElement.addEventListener('click', markAsCompleted);
  });
  const triggerTrashGroup = document.querySelectorAll('.trash-trigger');
  triggerTrashGroup.forEach(triggerTrashElement => {
    // eslint-disable-next-line no-use-before-define
    triggerTrashElement.addEventListener('click', deleteTodo);
  });

  const editGroup = document.querySelectorAll('.fa-edit');
  editGroup.forEach(editElement => {
    // eslint-disable-next-line no-use-before-define
    editElement.addEventListener('click', editTodo);
  });
  const todos = document.querySelectorAll('.todo');
  todos.forEach(todo => {
    todo.addEventListener('click', (e) => {
      const className = e.currentTarget.getAttribute('class');
      if (className === 'todo') {
        e.currentTarget.className = 'todo-grow';
      } else {
        e.currentTarget.className = 'todo';
      }
    });
  });
};

const deleteTodo = (e) => {
  const clickedTodoIndex = e.target.parentNode.dataset.index;
  const currentProjectIndex = e.target.parentNode.dataset.parent;
  const proyectsArray = getProjectsLs();
  proyectsArray[currentProjectIndex].pTodos.splice(clickedTodoIndex, 1);
  setProjectsLs(proyectsArray);
  renderProjectDetails(currentProjectIndex);
};

const editTodo = (e) => {
  const modal1 = document.getElementById('modal-1');
  const clickedTodoIndex = e.target.parentNode.dataset.index;
  const currentProjectIndex = e.target.parentNode.dataset.parent;
  const proyectsArray = getProjectsLs();
  modal1.classList.remove('hide');
  modal1.classList.add('show');
  // eslint-disable-next-line no-use-before-define
  addSecondForm();
  const closeBtns = document.querySelectorAll('.modal-close');
  const form = document.getElementById('taskForm');
  // eslint-disable-next-line no-use-before-define
  closeModals(closeBtns);
  const fTitle = document.getElementById('tTitle');
  const fDescription = document.getElementById('tDescription');
  const fDuedate = document.getElementById('tDueDate');
  const tProject = document.getElementById('tProject');
  tProject.disabled = true;

  fTitle.value = proyectsArray[currentProjectIndex].pTodos[clickedTodoIndex].tTitle;
  fDescription.value = proyectsArray[currentProjectIndex].pTodos[clickedTodoIndex].tDescription;
  fDuedate.value = proyectsArray[currentProjectIndex].pTodos[clickedTodoIndex].tDate;

  form.addEventListener('submit', (e) => {
    const fPriority = document.getElementById('tPriority');
    const selectedPriority = fPriority.options[fPriority.selectedIndex].value;
    e.preventDefault();
    e.stopPropagation();
    proyectsArray[currentProjectIndex].pTodos[clickedTodoIndex].tTitle = fTitle.value;
    proyectsArray[currentProjectIndex].pTodos[clickedTodoIndex].tDescription = fDescription.value;
    proyectsArray[currentProjectIndex].pTodos[clickedTodoIndex].tDate = fDuedate.value;
    proyectsArray[currentProjectIndex].pTodos[clickedTodoIndex].tPriority = selectedPriority;
    setProjectsLs(proyectsArray);
    renderProjectDetails(currentProjectIndex);
  }, { once: true });
};

const markAsCompleted = (e) => {
  const clickedTodoIndex = e.target.parentNode.dataset.index;
  const currentStatus = JSON.parse(e.target.parentNode.dataset.status);
  const currentProjectIndex = e.target.parentNode.dataset.parent;
  const proyectsArray = getProjectsLs();
  proyectsArray[currentProjectIndex].pTodos[clickedTodoIndex].tStatus = !currentStatus;
  setProjectsLs(proyectsArray);
  renderProjectDetails(currentProjectIndex);
};

const callParentProject = (e) => {
  renderProjectDetails(e.target.dataset.projectindex);
};

const renderProjects = () => {
  const container = document.getElementById('projects-container');
  const projects = getProjectsLs();
  container.innerHTML = '';
  projects.forEach((project, index) => {
    const projectElement = document.createElement('span');
    const pname = project.pName;
    projectElement.innerText = pname;
    projectElement.classList.add('project-name-bar');
    projectElement.dataset.index = index;
    projectElement.addEventListener('click', renderProjectDetails.bind(this, index));
    container.appendChild(projectElement);
  });
};

const renderTodos = () => {
  const container = document.getElementById('tasks-container');
  const projects = getProjectsLs();
  container.innerHTML = '';
  projects.forEach((project, projectIndex) => {
    project.pTodos.forEach((todo, index) => {
      const taskname = document.createElement('span');
      taskname.innerHTML = todo.tTitle;
      taskname.classList.add('todo-name-bar');
      taskname.dataset.project = todo.tProject;
      taskname.dataset.projectindex = projectIndex;
      taskname.dataset.innerIndex = index;
      container.appendChild(taskname);
    });
  });
  const todoNamesGroup = document.querySelectorAll('.todo-name-bar');
  todoNamesGroup.forEach(todo => {
    // eslint-disable-next-line no-use-before-define
    todo.addEventListener('click', callParentProject);
  });
};

export {
  renderProjectDetails, deleteTodo, editTodo, markAsCompleted, renderProjects, renderTodos,
};