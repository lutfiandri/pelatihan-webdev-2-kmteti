import { useState } from 'react';

export default function EditTodo({ id, updateTodoHandler, title: t, desc: d }) {
  const [title, setTitle] = useState(t);
  const [desc, setDesc] = useState(d);

  const saveHandler = () => {
    if (title === '' || desc === '') {
      alert('Please add your todo and description');
      return;
    }

    const todo = {
      id: id,
      title: title,
      desc: desc,
    };
    updateTodoHandler(id, todo);

    // setTitle('');
    // setDesc('');
  };

  return (
    <>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-secondary me-1"
        data-bs-toggle="modal"
        data-bs-target={`#exampleModal_${id}`}
      >
        Edit
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id={`exampleModal_${id}`}
        tabIndex={-1}
        aria-labelledby={`#exampleModalLabel_${id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {/* header */}
            <div className="modal-header">
              <h5 className="modal-title" id={`exampleModalLabel_${id}`}>
                Edit a Todo
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            {/* body */}
            <div className="modal-body">
              <div className="mb-2">
                <input
                  type="email"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <textarea
                  className="form-control"
                  rows={3}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
            </div>

            {/* footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={saveHandler}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
