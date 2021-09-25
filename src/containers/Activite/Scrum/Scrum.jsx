import React, { useState } from "react";

import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import Backlog from "/components/Backlog/Backlog";

import CardContainer from "/components/CardContainer/CardContainer";
import SprintLine from "/components/SprintLine/SprintLine";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const SprintWrapper = styled.div`
  padding-bottom: 265px;
`;

const Scrum = () => {
  const postitList = [
    { id: "1", libelle: "Post it 1", cout: "10", ordre: 1 },
    { id: "2", libelle: "Post it 2", cout: "20", ordre: 2 },
    { id: "3", libelle: "Post it 3", cout: "30", ordre: 3 },
    { id: "4", libelle: "Post it 4", cout: "40", ordre: 4 },
    { id: "5", libelle: "Post it 5", cout: "50", ordre: 5 },
    { id: "6", libelle: "Post it 6", cout: "60", ordre: 6 },
    { id: "7", libelle: "Post it 7", cout: "70", ordre: 7 },
    { id: "8", libelle: "Post it 8", cout: "80", ordre: 8 },

    { id: "9", libelle: "Post it 9", cout: "90", ordre: 9 },
    { id: "10", libelle: "Post it 10", cout: "100", ordre: 10 },
    { id: "11", libelle: "Post it 11", cout: "110", ordre: 11 },
    { id: "12", libelle: "Post it 12", cout: "120", ordre: 12 },
    { id: "13", libelle: "Post it 13", cout: "130", ordre: 13 },
    { id: "14", libelle: "Post it 14", cout: "140", ordre: 14 },
    { id: "15", libelle: "Post it 15", cout: "150", ordre: 15 },
    { id: "16", libelle: "Post it 16", cout: "160", ordre: 16 },
    { id: "17", libelle: "Post it 17", cout: "170", ordre: 17 },
    { id: "18", libelle: "Post it 18", cout: "180", ordre: 18 }
  ];

  const [itemsMap, setItemsMap] = useState({ 1: [], 2: [], backlog: postitList, done: [] });
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
        <SprintWrapper>
          {Object.keys(itemsMap)
            .filter(key => key !== "backlog")
            .map(key => (
              <SprintLine internalScroll key={key} id={key} cards={itemsMap[key]} />
            ))}
        </SprintWrapper>
        <Backlog id="backlog" cards={itemsMap.backlog} />
      </DragDropContext>
    </>
  );
};

export default Scrum;
