import React from "react";
type deleteUserProp = {
  name: string;
  handleDelete: any;
  id: string;
  loading: boolean;
};
const DeleteModal = ({ name, id, handleDelete, loading }: deleteUserProp) => {
  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete permanently {name}?
          </h3>
          <p className="py-4">
            This item will be deleted immediately. You can't undo this action.
          </p>
          <div className="modal-action">
            <label
              htmlFor="delete-modal"
              className="h-9 flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer"
            >
              Cancel
            </label>
            <label
              
              className="h-9 flex items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer"
              onClick={() => handleDelete(id)}
            >
              {loading ? "Deleting..." : "Delete"}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
