
const Todo = (title, description, date, priority, project, status) => {
  const tTitle = title;
  const tDescription = description;
  const tDate = date;
  const tPriority = priority;
  const tProject = project;
  const tStatus = status;

  return {
    tTitle, tDescription, tDate, tPriority, tProject, tStatus,
  };
};

export default Todo;