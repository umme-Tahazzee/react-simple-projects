import React from "react";

export default function TodoItem({todoName, todoDate}) {
    
  return (
    <>
      <div className="container text-center">
        <div className="row row-container">
          <div className="col-sm">{todoName}</div>
          <div className="col-sm"> {todoDate} </div>
          <div className="col-sm">
            <button type="button" className="btn btn-danger style-button">
              Delete
            </button>
          </div>
        </div>
       
      </div>
    </>
  );
}
