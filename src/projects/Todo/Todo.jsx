import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import {
  getLocalStroageTodoData,
  setLocalStroageTodoData,
} from "./TodoLocalStroage";

export const Todo = () => {
  const [task, setTask] = useState(() => getLocalStroageTodoData());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    //to check if the input field is empty or not
    if (!content) return;

    //to check if the data is already exiting or not
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content,
    );
    if (ifTodoContentMatched) return;

    setTask((preTask) => [...preTask, { id, content, checked }]);
  };

  //todo add data to localStroage
  setLocalStroageTodoData(task);

  //todo handleDeleteTodo function
  const handleDeleteTodo = (value) => {
    const updateTask = task.filter((curTask) => curTask.content != value);
    setTask(updateTask);
  };

  //todo handleClearTodoData functionality
  const handleClearTodoData = () => {
    setTask([]);
  };

  //todo handleCheckedTodo functionality
  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnordList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo={handleCheckedTodo}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear all
        </button>
      </section>
    </section>
  );
};
