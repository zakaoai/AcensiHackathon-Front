import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
import React from "react";

import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import Rules from "./Rules";
import { addSprint, deleteSprint, onDragEnd } from "./utils";
import Backlog from "/components/Backlog/Backlog";

import SprintLine from "/components/SprintLine/SprintLine";
import CardContext from "/contexts/CardContext";
import useScrumTuto from "/hooks/useScrumTuto";

const SprintWrapper = styled.div`
  padding-bottom: 265px;
`;

const Tuto = () => {
  const { itemsMap, setItemsMap, sprintPoints, postitList } = useScrumTuto();

  return (
    <>
      <div>Tutoriel : Creer un projet web</div>
      <Rules />
      <CardContext.Provider value={postitList}>
        <DragDropContext onDragEnd={onDragEnd(itemsMap, setItemsMap, sprintPoints)}>
          <SprintWrapper>
            {Object.keys(itemsMap)
              .filter(key => key !== "backlog")
              .map(key => (
                <SprintLine sprintPoints={sprintPoints} internalScroll key={key} id={key} cards={itemsMap[key]} />
              ))}
          </SprintWrapper>

          <Backlog id="backlog" cards={itemsMap.backlog} />
        </DragDropContext>
      </CardContext.Provider>
    </>
  );
};

export default Tuto;
