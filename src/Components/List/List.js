import React, { useState, useEffect } from 'react';
import ListRender from '../ListRender/ListRender';

const List = () => {
  const [todo, setTodo] = useState(['walk the dog', 'pet the dog']);
  const [newItem, setNewItem] = useState('');
  const [updatedItem, setUpdatedItem] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

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

  const editItem = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1, updatedItem);
    setTodo(newTodo);
    setIsEdit(false);
  };

  const isEditItem = () => {
    setIsEdit(true);
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
              newItem={newItem}
              updatedItem={updatedItem}
              setUpdatedItem={setUpdatedItem}
              isEdit={isEdit}
              deleteItem={deleteItem}
              editItem={editItem}
              isEditItem={isEditItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
