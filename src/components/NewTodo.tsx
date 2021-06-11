import React, { useRef } from "react";
import './NewTodo.css';

type NewTodoProps = {
  onAddTodo: (todoTex:string) => void;
}

const NewTodo : React.FC<NewTodoProps> = props => {

  const textInputRef = useRef<HTMLInputElement>(null);
  const totodSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredText = textInputRef.current!.value
    
    props.onAddTodo(enteredText)
  }
  return (
    <form onSubmit={totodSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TOTO</button>
    </form>
  );
};
export default NewTodo;
