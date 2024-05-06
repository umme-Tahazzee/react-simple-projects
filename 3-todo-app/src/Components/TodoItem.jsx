import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";

export default function TodoItem({ todoName, todoDate,onDeleteClick }) {
  return (
    <>
      <div className="container text-center">
        <div className="row row-container">
          <div className="col-sm">{todoName}</div>
          <div className="col-sm"> {todoDate} </div>
          <div className="col-sm">
            <button type="button" className="btn btn-danger style-button"
            onClick={()=>{onDeleteClick(todoName)}}>
            <RiDeleteBinFill />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
