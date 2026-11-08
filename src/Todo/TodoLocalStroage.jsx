const todoKey = "reactTodo";

export const getLocalStroageTodoData = () => {
  const rawTodos = localStorage.getItem(todoKey);
  if (!rawTodos) return [];
  try {
    return JSON.parse(rawTodos);
  } catch (error) {
    console.error("Error parsing localStorage data:", error);
    return [];
  }
};

export const setLocalStroageTodoData = (task) => {
  return localStorage.setItem(todoKey, JSON.stringify(task));
};
