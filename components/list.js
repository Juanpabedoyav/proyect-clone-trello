import React from "react";

function List({ children, name, handleDrop, id }) {
   
    function handleOver(event){
        event.preventDefault(); 
    }
  return (
    <div data-list={id} onDragOver={handleOver}  onDrop={handleDrop} 
        className="p-3 bg-amber-500 rounded-md flex-1">
      <h2 className="text-gray-900 font-bold mb-3">{name}</h2>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

export default List;
