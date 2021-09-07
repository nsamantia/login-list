import React, { useState, useEffect } from 'react';
import ListRender from '../ListRender/ListRender';

const List = () => {
  const [todo, setTodo] = useState(['walk the dog', 'pet the dog']);
  const [newItem, setNewItem] = useState('');

  // useEffect(() => {}, [todo.length]);

  //add items to list
  const addItem = () => {
    setTodo([...todo, newItem]);
    setNewItem('');
  };

  const deleteItem = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="ToDo"
          placeholder="Add an item to your list"
          maxLength="25"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        ></input>
        <button onClick={() => addItem()}>Save</button>
      </div>
      <div>
        {todo.map((todo, index) => {
          return (
            <ListRender
              key={index}
              index={index}
              todo={todo}
              deleteItem={deleteItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
