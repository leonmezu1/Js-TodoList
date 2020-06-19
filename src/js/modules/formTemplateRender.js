import { getProjectsLs } from './localStorage';

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

const closeModals = (closeBtns) => {
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.querySelector('.custom-modal');
      modal.classList.remove('show');
      modal.classList.add('hide');
    });
  });
};

export { addFirstForm, addSecondForm, closeModals };