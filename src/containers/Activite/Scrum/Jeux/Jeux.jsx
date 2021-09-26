import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import React from "react";

import { DragDropContext } from "react-beautiful-dnd";
import { useParams } from "react-router";
import styled from "styled-components";
import { addSprint, deleteSprint, onDragEnd } from "./utils";
import Backlog from "/components/Backlog/Backlog";

import SprintLine from "/components/SprintLine/SprintLine";
import CardContext from "/contexts/CardContext";
import useScrumJeux from "/hooks/useScrumJeux";
import ScrumScore from "../ScrumScore/ScrumScore";

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

const Jeux = () => {
  const { gameId } = useParams();
  const { itemsMap, setItemsMap, sprintPoints, postitList, envoyerScore } = useScrumJeux(gameId);

  return (
    <>
      <div>Jeu {gameId} :</div>
      <Grid container justifyContent="flex-end" alignItems="right">
        <ScrumScore />
      </Grid>
      <Grid container justifyContent="flex-end" alignItems="right" onClick={envoyerScore}>
        <Button variant="contained">Envoyer la solution</Button>
      </Grid>
      <CardContext.Provider value={postitList}>
        <DragDropContext onDragEnd={onDragEnd(itemsMap, setItemsMap, sprintPoints)}>
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
                  deleteSprint={deleteSprint(itemsMap, setItemsMap)}
                />
              ))}
            {Object.keys(itemsMap).length < 6 && (
              <FlexBox>
                <FlexCenter>
                  <Button
                    variant="contained"
                    onClick={addSprint(itemsMap, setItemsMap)}
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

export default Jeux;
