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
          <h3 className="font-bold text-lg">Are you sure you want to delete permanently {name}?</h3>
          <p className="py-4">
          This item will be deleted immediately. You can't undo this action.
          </p>
          <div className="modal-action">
            <label htmlFor="delete-modal" className="btn bg-[#27ae60] text-white rounded-full">
               Cancel
              </label>
            <label htmlFor="delete-modal" className="btn rounded-full bg-white text-[#0000A9] hover:bg-[#0000A9] hover:text-white" onClick={()=>handleDelete(name, id)}>
              Delete
            </label>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer">
  Delete
</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
