import React from "react";
type deleteUserProp = {
    name: string,
    handleDelete: any,
    id: string
}
const DeleteModal = ({name, id, handleDelete}: deleteUserProp) => {
  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Delete {name}</h3>
          <p className="py-4">
            Are you sure? you want to delete {name}. After you can not undone
            data
          </p>
          <div className="modal-action">
            <label htmlFor="delete-modal" className="btn" onClick={()=>handleDelete(name, id)}>
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
