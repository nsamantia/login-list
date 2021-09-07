import React, { useState, useEffect } from 'react';
import ListRender from '../ListRender/ListRender';

const List = () => {
  const [todo, setTodo] = useState(['walk the dog', 'pet the dog']);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {}, [todo.length]);

  //add items to list
  const addItem = () => {
    setTodo([...todo, `${newItem}`]);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="ToDo"
          placeholder="Add an item to your list"
          onChange={(e) => setNewItem(e.target.value)}
        ></input>
        <button onClick={() => addItem()}>Save</button>
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
