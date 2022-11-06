import React from "react";

function List({ children, name, handleDrop }) {
    function handleOver(event){
        event.preventDefault();
        console.log(event)
    }
  return (
    <div onDragOver={handleOver} onDrop={handleDrop} className="p-3 bg-slate-500 rounded-md flex-1">
      <h2 className="text-gray-900 font-bold mb-3">{name}</h2>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

export default List;
