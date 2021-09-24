import React, { useState } from "react";

import { DragDropContext } from "react-beautiful-dnd";

import CardContainer from "/components/CardContainer/CardContainer";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const Scrum = () => {
  const postitList = [
    { id: "1", libelle: "Post it 1", cout: "10", ordre: 1 },
    { id: "2", libelle: "Post it 2", cout: "20", ordre: 2 }
  ];

  const [itemsMap, setItemsMap] = useState({ 1: postitList, 2: [] });
  const onDragEnd = ({ source, destination }) => {
    if (!destination) {
      return;
    }
    const current = [...itemsMap[source.droppableId]];

    if (source.droppableId === destination.droppableId) {
      setItemsMap({ ...itemsMap, [source.droppableId]: reorder(current, source.index, destination.index) });
    } else {
      const next = [...itemsMap[destination.droppableId]];
      const target = current[source.index];

      // remove from original
      current.splice(source.index, 1);
      // insert into next
      next.splice(destination.index, 0, target);

      setItemsMap({ ...itemsMap, [source.droppableId]: current, [destination.droppableId]: next });
    }
  };

  return (
    <>
      <div>
        <h1>Scrum</h1>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.keys(itemsMap).map(key => (
          <CardContainer internalScroll key={key} id={key} cards={itemsMap[key]} />
        ))}
      </DragDropContext>
    </>
  );
};

export default Scrum;
