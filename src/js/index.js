import '../styles/styles.scss';

const navigation = document.getElementById('navigation');
const mainView = document.getElementById('main-view');

const height = navigation.offsetHeight;

mainView.style.height = `${window.innerHeight - height}px`;

const projectname = document.getElementById('projectName');

const ttitle = document.getElementById('tTitle').value;
const tdescription = document.getElementById('tDescription').value;
const tduedate = document.getElementById('tDueDate').value;
const tpriority = document.getElementById('tPriority').value;
const tproject = document.getElementById('tProject').value;


const addProjectName = (pname) => {
  e.preventDefault();
};

projectname.addEventListener('submit', () => {
  const pname = document.getElementById('pName').value;
  const project = document.createElement('p');
  project.innerText = pname;
  const container = document.getElementById('projects-container');
  container.appendChild(project);
});