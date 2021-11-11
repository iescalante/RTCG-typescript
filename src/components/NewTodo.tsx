import React, { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    let enteredText = textInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
    textInputRef.current!.value = "";
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={textInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
