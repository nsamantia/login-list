import React from 'react';

const ListRender = (props) => {
  return (
    <div>
      <div>
        {props.isEdit ? (
          <>
            <input
              type="text"
              placeholder={props.todo}
              maxLength="25"
              onChange={(e) => props.setUpdatedItem(e.target.value)}
            ></input>
            <button onClick={() => props.editItem()}>Save</button>
          </>
        ) : (
          <>
            <div>
              <p>{props.todo}</p>
            </div>

            <div>
              <button onClick={() => props.isEditItem()}>Edit</button>
              <button onClick={() => props.deleteItem(props.index)}>
                Delete
              </button>
            </div>
          </>
        )}
      </div>
      {/* <div>
        <p>{props.todo}</p>
      </div>

      <div>
        <button onClick={() => props.deleteItem(props.index)}>Delete</button>
      </div> */}
    </div>
  );
};

export default ListRender;
