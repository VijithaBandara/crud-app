import React from "react";
import {AiOutlinePlus} from 'react-icons/ai'
import {ITask} from "../../../types/tasks";

interface TodoListProps{
  tasks: ITask[]
}

const TodoList: React.FC<TodoListProps> = ({tasks}) => {
    return <div className="overflow-x-auto">
    <table className="table w-full">
      <thead>
        <tr>
          <th>Tasks</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) =>(
          <tr key={task.id}>
          <td>{task.text}</td>
          <td>Blue</td>
        </tr>
        ))}
      </tbody>
    </table>
  </div>
};

export default TodoList;