import { useState } from "react";
import { IoBagAddOutline } from "react-icons/io5";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <>
      <div className="container text-center">
        <div className="row row-container">
          <div className="col-sm">
            <input
              type="text"
              placeholder="Enter to do here"
              onChange={handleNameChange}
              value={todoName}
            />
          </div>
          <div className="col-sm">
            {" "}
            <input 
            type="date" 
            onChange={handleDateChange} 
            value={dueDate}/>
            {" "}
          </div>
          <div className="col-sm">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleAddButtonClicked}
            >
            <IoBagAddOutline />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
