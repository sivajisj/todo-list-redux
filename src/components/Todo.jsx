import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "./actions";

const Todo = ({ id, title }) => {
  const [edit, setEdit] = useState(false);
  const [newtitle, setNewTitle] = useState("");
  const dispatch = useDispatch();

  const handleTodo = () => {
    if (newtitle.trim()) {
      dispatch(editTodo({ id: id, title: newtitle }));
      setEdit(false);
    }
  };
  const handleDelete = () => {
    dispatch(deleteTodo({ id: id }));
  };
  return edit ? (
    
    <div className="container mt-5 w-50">
      <div
        className="input-group mb-3"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <input
          type="text"
          className="form-control"
          onChange={(e) => {
            e.preventDefault;
            setNewTitle(e.target.value);
          }}
          value={newtitle}
          placeholder="Edit todo"
        />
        <div className="input-group-append">
          <button className="btn btn-secondary" onClick={handleTodo}>
            Save
          </button>
        </div>
      </div>
    </div>
  ) : (
    <center>
      <div>
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          style={{ maxWidth: "600px", margin: "0 auto", width: "100%" }}
        >
          <p className="mb-0">{title}</p>
          <div className="actions">
            <button
              onClick={() => setEdit(true)}
              className="btn btn-warning btn-sm mr-2"
            >
              Edit
            </button>
            <button onClick={handleDelete} className="btn btn-danger btn-sm">
              Delete
            </button>
          </div>
        </li>
      </div>
    </center>
  );
};

export default Todo;
