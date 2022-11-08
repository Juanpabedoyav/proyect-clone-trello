import { useEffect, useState } from "react";
import Card from "../components/card";
import List from "../components/list";

const toDoList = [
  {
    text: "Estudiar con colegas",
    id: "task-1",
  },
  {
    text: "Realizar Deploy",
    id: "task-2",
  },
];
const inProgressList = [
  {
    text: "Actualizar información",
    id: "inprogressTask-1",
  },
];
const doneList = [
  {
    text: "Solicitar cita médica",
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
    const list = event.currentTarget.dataset.list;
    const newList = allListClone[dragged.list].filter(
      (item) => item.id !== dragged.data.id
    );
    allListClone[dragged.list] = newList;
    allListClone[list].push(dragged.data);
    setAllList(allListClone);
  };

  return (
    <>
      <h1 className="text-2xl font-extrabold mb-4">Welcome to you Board</h1>
      <main className="flex gap-4">
        <List name="TO DO" handleDrop={handleDrop} id="toDoList">
          {allList.toDoList.map((item) => (
            <Card setDragged={setDragged} {...item} key={item.id} />
          ))}
        </List>
        <List name="In Progress" handleDrop={handleDrop} id="inProgressList">
          {allList.inProgressList.map((item) => (
            <Card setDragged={setDragged} {...item} key={item.id} />
          ))}
        </List>{" "}
        <List name="Done" handleDrop={handleDrop} id="doneList">
          {allList.doneList.map((item) => (
            <Card setDragged={setDragged} {...item} key={item.id} />
          ))}
        </List>
      </main>
    </>
  );
}
