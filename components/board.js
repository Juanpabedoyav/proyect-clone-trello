import { useEffect, useState } from "react";
import Card from "../components/card";
import List from "../components/list";

const toDoList = [
  {
    text: "Iinicio de texto 1",
    id: "task-1",
  },
  {
    text: "Iinicio de texto 2",
    id: "task-2",
  },
];
const inProgressList = [
  {
    text: "Iinicio de texto",
    id: "inprogressTask-1",
  },
];
const doneList = [
  {
    text: "Iinicio de texto",
    id: "DoneTask-1",
  },
];

export default function Board() {
  const [dragged, setDragged] = useState(null);
  const [allList, setAllList] = useState({
    toDoList,
    inProgressList,
    doneList,
  });

  //   useEffect(() => {
  //     setTimeout(() => {
  //       const allListClone = structuredClone(allList);
  //       allListClone.inProgressList.push({
  //         text: "lo estamos logrando",
  //         id: crypto.randomUUID()
  //       });
  //       setAllList(allListClone);
  //     }, 3000);
  //   }, []);

  const handleDrop = (event) => {
    event.preventDefault();
    const allListClone = structuredClone(allList);
    allListClone.inProgressList.push(dragged);
    setAllList(allListClone);
    console.log(event);
  };

  return (
    <>
      <h1 className="text-2xl font-extrabold mb-4">Welcome to you Board</h1>
      <main className="flex gap-4">
        <List name="TO DO" handleDrop={handleDrop}>
          {allList.toDoList.map((item) => (
            <Card setDragged={setDragged} {...item} key={item.id} />
          ))}
        </List>
        <List name="In Progress" handleDrop={handleDrop}>
          {allList.inProgressList.map((item) => (
            <Card setDragged={setDragged} {...item} key={item.id} />
          ))}
        </List>{" "}
        <List name="Done" handleDrop={handleDrop}>
          {allList.doneList.map((item) => (
            <Card setDragged={setDragged} {...item} key={item.id} />
          ))}
        </List>
      </main>
    </>
  );
}
