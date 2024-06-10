import React from 'react'

const DeleteDialog = ({ isOpen, onConfirm, onCancel, message }) => {
    if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-lg">
                <p>{message}</p>
                <div className="mt-4 flex justify-end space-x-4">
                    <button onClick={onCancel} className="bg-gray-200 px-4 py-2 rounded">Cancel</button>
                    <button onClick={onConfirm} className="bg-red-600 text-white px-4 py-2 rounded">Delete</button>
                </div>
            </div>
        </div>
  )
}

export default DeleteDialog