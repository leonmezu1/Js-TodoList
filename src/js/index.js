/* eslint-disable no-undef */
import '../styles/styles.scss';

const navigation = document.getElementById('navigation');
const mainView = document.getElementById('main-view');

/* const ttitle = document.getElementById('tTitle').value;
const tdescription = document.getElementById('tDescription').value;
const tduedate = document.getElementById('tDueDate').value;
const tpriority = document.getElementById('tPriority').value;
const tproject = document.getElementById('tProject').value; */

const buttonTrigger = document.querySelectorAll('[data-target]');
const modal1 = document.getElementById('modal-1');
/*  */
const closeModals = (closeBtns) => {
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.querySelector('.custom-modal');
      modal.classList.remove('show');
      modal.classList.add('hide');
    });
  });
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
      <select class="form-control" id="priority" style="font-size: 1.4rem;">
        <option hidden selected>Select Priority</option>
        <option value="high">High</option>
        <option value="moderate">Moderate</option>
        <option value="low">Low</option>
      </select>
    </div>
    <div class="form-group">
      <label for="project">Project</label>
      <select class="form-control" id="project" style="font-size: 1.4rem;">
        <option hidden selected>Select Project</option>
        <option value="1">Project One</option>
        <option value="2">Project Two</option>
        <option value="3">Project Three</option>
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
    e.preventDefault();
    e.stopPropagation();
    const container = document.getElementById('projects-container');
    const project = document.createElement('span');
    const pname = document.getElementById('pName').value;
    project.innerText = pname;
    project.classList.add('project-name-bar');
    container.appendChild(project);
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
    const container = document.getElementById('tasks-container');
    const taskname = document.createElement('p');
    const tTitle = document.getElementById('tTitle').value;
    taskname.innerHTML = tTitle;
    taskname.classList.add('todo-name-bar');
    container.appendChild(taskname);
  }, { once: true });
});

const setHeight = () => {
  const height = navigation.offsetHeight;
  mainView.style.height = `${window.innerHeight - height}px`;
};

document.addEventListener('DOMContentLoaded', setHeight);
window.addEventListener('resize', setHeight);
