import React from "react";
import {AiOutlinePlus} from 'react-icons/ai'

const TodoList = () => {
    return <div className="overflow-x-auto">
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cy Ganderton</td>
          <td>Blue</td>
        </tr>
      </tbody>
    </table>
  </div>
};

export default TodoList;