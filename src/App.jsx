import { nanoid } from 'nanoid';
import { useState } from 'react';
import TodoItem from './components/TodoItem';
import FormInputTodo from './components/FormInputTodo';
import Navbar from './components/Navbar';

function App() {
  const [todos, setTodos] = useState([
    {
      id: nanoid(),
      title: 'Tugas Keamanan Komputer',
      desc: 'Membandingkan keamanan OS Windows dan Linux',
    },
    {
      id: nanoid(),
      title: 'Tugas Matematika Diskret',
      desc: 'PR di elok. 10 soal. Deadline tanggal 8.',
    },
  ]);

  const addTodoHandler = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    // console.log(newTodos);
  };

  const deleteTodoHandler = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
    // console.log(newTodos);
  };

  const updateTodoHandler = (id, todoEdited) => {
    const newTodos = todos.map((todo) => {
      if (id !== todo.id) {
        return todo;
      } else {
        return todoEdited;
      }
    });
    setTodos(newTodos);
  };

  return (
    <>
      <Navbar />
      <main className="container py-4">
        <FormInputTodo addTodoHandler={addTodoHandler} />
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              desc={todo.desc}
              deleteTodoHandler={deleteTodoHandler}
              updateTodoHandler={updateTodoHandler}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
