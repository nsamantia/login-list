import React, { useState } from 'react';
import ListRender from '../ListRender/ListRender';

const List = () => {
  const [todo, setTodo] = useState(['walk dog', 'pet dog']);
  return (
    <div>
      <div>
        <input
          type="text"
          name="ToDo"
          placeholder="Add an item to your list"
        ></input>
        <button>Save</button>
      </div>
      <div>
        {todo.map((todo) => {
          return <ListRender todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
