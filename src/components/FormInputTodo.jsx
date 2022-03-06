import { nanoid } from 'nanoid';
import { useState } from 'react';

function FormInputTodo({ addTodoHandler }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const clickHandler = () => {
    if (title === '' || desc === '') {
      alert('Please add your todo and description');
      return;
    }

    const todo = {
      id: nanoid(),
      title: title,
      desc: desc,
    };
    addTodoHandler(todo);

    setTitle('');
    setDesc('');
  };

  return (
    <>
      <div className="mb-2">
        <input
          type="email"
          className="form-control"
          placeholder="Add todo here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <textarea
          className="form-control"
          rows={3}
          placeholder="Add todo description here"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary mb-4 w-100"
        onClick={clickHandler}
      >
        Add Todo
      </button>
    </>
  );
}

export default FormInputTodo;
