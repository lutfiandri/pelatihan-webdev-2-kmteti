import EditTodo from './EditTodo';

function TodoItem({ title, desc, id, deleteTodoHandler, updateTodoHandler }) {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>

        <EditTodo
          id={id}
          updateTodoHandler={updateTodoHandler}
          title={title}
          desc={desc}
        />

        <a
          href="#"
          className="btn btn-danger"
          onClick={function () {
            deleteTodoHandler(id);
          }}
        >
          Delete
        </a>
      </div>
    </div>
  );
}

export default TodoItem;
