import React from 'react';

const ListRender = (props) => {
  return (
    <div>
      <div>
        <p>{props.todo}</p>
      </div>

      <div>
        <button onClick={() => props.deleteItem(props.index)}>Delete</button>
      </div>
    </div>
  );
};

export default ListRender;
