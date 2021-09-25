import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
import React, { useState } from "react";

import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import Backlog from "/components/Backlog/Backlog";

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

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FlexCenter = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const Scrum = () => {
  const sprintPoints = 60;
  const postitList = [{ id: "1", libelle: "Post it 1", cout: 10, ordre: 1 }];

  const [itemsMap, setItemsMap] = useState({ 1: [], backlog: postitList });
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

  const addSprint = () => {
    setItemsMap({ ...itemsMap, [`${Object.keys(itemsMap).length}`]: [] });
  };

  return (
    <>
      <div>
        <h1>Scrum</h1>
        Jeu 1 : Creer un projet web
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <SprintWrapper>
          {Object.keys(itemsMap)
            .filter(key => key !== "backlog")
            .map(key => (
              <SprintLine sprintPoints={sprintPoints} internalScroll key={key} id={key} cards={itemsMap[key]} />
            ))}
          {Object.keys(itemsMap).length < 6 && (
            <FlexBox>
              <FlexCenter>
                <Button
                  variant="contained"
                  onClick={addSprint}
                  endIcon={<AddCircleOutlineIcon style={{ fontSize: 60 }} />}>
                  Ajouter un sprint
                </Button>
              </FlexCenter>
            </FlexBox>
          )}
        </SprintWrapper>

        <Backlog id="backlog" cards={itemsMap.backlog} />
      </DragDropContext>
    </>
  );
};

export default Scrum;
