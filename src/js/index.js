import '../styles/styles.scss';

const navigation = document.getElementById('navigation');
const mainView = document.getElementById('main-view');

const height = navigation.offsetHeight;

mainView.style.height = `${window.innerHeight - height}px`;

/*  */

const buttonTrigger = document.querySelectorAll('[data-target]');
/*  */

buttonTrigger[0].addEventListener('click', () => {
  const projectname = document.getElementById('projectName');
  projectname.addEventListener('submit', () => {
    const container = document.getElementById('projects-container');
    const pname = document.getElementById('pName').value;
    let project = document.createElement('p');
    document.getElementById('pName').value = '';
    project.innerText = pname;
    container.appendChild(project);
    console.log(project);
    $('#projectModal').modal('toggle');
  });
}, { once: true });

buttonTrigger[1].addEventListener('click', () => {
  const task = document.getElementById('taskForm');
  task.addEventListener('submit', () => {
    const container = document.getElementById('tasks-container');
    let taskname = document.createElement('p');
    const tTitle = document.getElementById('tTitle').value;
    const tDescription = document.getElementById('tDescription').value;
    const tDuedate = document.getElementById('tDueDate').value;
    const tPriority = document.getElementById('tPriority').value;
    const tProject = document.getElementById('tProject').value;
    taskname.innerHTML = tTitle;
    container.appendChild(taskname);
    $('#todoModal').modal('toggle');
  });
}, { once: true });

/* $('#todoModal').modal('toggle'); */
