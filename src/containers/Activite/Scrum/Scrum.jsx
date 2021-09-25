import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
import React, { createContext, useState } from "react";

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

const CardContext = createContext([]);

const Scrum = () => {
  const sprintPoints = 60;
  const cardLifePoint = 3;
  const postitList = [
    { id: "1", libelle: "Post it 1", cout: 10, ordre: 1 },
    { id: "2", libelle: "Post it 2", cout: 10, ordre: 2 },
    { id: "3", libelle: "Post it 3", cout: 20, ordre: 3 },
    { id: "4", libelle: "Post it 4", cout: 40, ordre: 4 },
    { id: "5", libelle: "Post it 5", cout: 30, ordre: 5 },
    { id: "6", libelle: "Post it 6", cout: 10, ordre: 6 }
  ].map(postit => ({ ...postit, lifePoint: cardLifePoint }));

  const [itemsMap, setItemsMap] = useState({ 1: [], backlog: postitList });

  const onDragEnd = ({ source, destination }) => {
    if (!destination) {
      return;
    }
    const current = [...itemsMap[source.droppableId]];

    if (source.droppableId === destination.droppableId) {
      const result = Array.from(current);
      const [removed] = result.splice(source.index, 1);
      if (source.droppableId !== "backlog") {
        removed.lifePoint -= 1;
      }
      result.splice(destination.index, 0, removed);

      setItemsMap({ ...itemsMap, [source.droppableId]: result });
    } else {
      const next = [...itemsMap[destination.droppableId]];
      const target = current[source.index];

      const cardPoints = next.reduce((acc, card) => acc + card.cout, 0);
      if (cardPoints + target.cout <= sprintPoints) {
        target.lifePoint -= 1;
        // remove from original
        current.splice(source.index, 1);
        // insert into next
        next.splice(destination.index, 0, target);

        setItemsMap({ ...itemsMap, [source.droppableId]: current, [destination.droppableId]: next });
      }
    }
  };

  const addSprint = () => {
    setItemsMap({ ...itemsMap, [`${Object.keys(itemsMap).length}`]: [] });
  };

  const deleteSprint = id => () => {
    const { backlog } = itemsMap;
    const newEntries = Object.entries(itemsMap)
      .filter(([key]) => key !== "backlog")
      .reduce((acc, [key, value]) => {
        if (key > id) {
          acc[key - 1] = value;
        }
        if (key === id) {
          backlog.push(...value);
        }
        if (key < id) {
          acc[key] = value;
        }
        return acc;
      }, {});

    setItemsMap({ backlog, ...newEntries });
  };

  return (
    <>
      <div>
        <h1>Scrum</h1>
        Jeu 1 : Creer un projet web
      </div>
      <CardContext.Provider value={postitList}>
        <DragDropContext onDragEnd={onDragEnd}>
          <SprintWrapper>
            {Object.keys(itemsMap)
              .filter(key => key !== "backlog")
              .map(key => (
                <SprintLine
                  sprintPoints={sprintPoints}
                  internalScroll
                  key={key}
                  id={key}
                  cards={itemsMap[key]}
                  deleteSprint={deleteSprint}
                />
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
      </CardContext.Provider>
    </>
  );
};

export default Scrum;
export { CardContext };
