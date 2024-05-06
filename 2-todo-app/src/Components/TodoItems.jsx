
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
       {todoItems.map((item)=>{
          return  <TodoItem  key={item} todoName={item.name} todoDate={item.dueDate}/>
       })}
    </div>
  );
};
export default TodoItems;
