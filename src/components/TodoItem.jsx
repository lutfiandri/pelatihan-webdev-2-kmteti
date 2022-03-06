function TodoItem({ title, desc, id, deleteTodoHandler }) {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <a href="#" className="btn btn-secondary me-2">
          Edit
        </a>
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
