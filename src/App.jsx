import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import TodoItem from './components/TodoItem';
import FormInputTodo from './components/FormInputTodo';
import Navbar from './components/Navbar';
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  doc,
  deleteDoc,
  setDoc,
} from 'firebase/firestore';
import { db } from './firebase';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todosDB = [];
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        data.id = doc.id;
        console.log(data);
        todosDB.push(data);
      });
      setTodos(todosDB);
    });
  }, []);

  const addTodoHandler = async (todo) => {
    try {
      const docRef = await addDoc(collection(db, 'todos'), todo);
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const deleteTodoHandler = async (id) => {
    try {
      await deleteDoc(doc(db, 'todos', id));
    } catch (error) {
      console.log(error);
    }
  };

  const updateTodoHandler = async (id, todoEdited) => {
    try {
      await setDoc(doc(db, 'todos', id), todoEdited);
    } catch (error) {
      console.log(error);
    }
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
