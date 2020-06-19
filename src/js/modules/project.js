
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

export default Project;