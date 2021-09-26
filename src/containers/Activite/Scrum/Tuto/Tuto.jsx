import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import React from "react";

import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import Rules from "./Rules";
import { onDragEnd } from "./utils";
import Backlog from "/components/Backlog/Backlog";

import SprintLine from "/components/SprintLine/SprintLine";
import CardContext from "/contexts/CardContext";
import useScrumJeux from "/hooks/useScrumJeux";
import { Link } from "react-router-dom";

const SprintWrapper = styled.div`
  padding-bottom: 265px;
`;

const Tuto = () => {
  const { itemsMap, setItemsMap, sprintPoints, postitList } = useScrumJeux(1);

  return (
    <>
      <div>Tutoriel : Creer un projet web</div>
      <Rules />
      <Grid container justifyContent="flex-end" alignItems="right">
        <Button variant="contained" component={Link} to={"/app/scrum/solution/1"}>
          Voir la solution
        </Button>
      </Grid>
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