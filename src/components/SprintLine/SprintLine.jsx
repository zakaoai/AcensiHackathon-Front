import React from "react";
import IconButton from "@mui/material/IconButton";

import CardContainer from "../CardContainer/CardContainer";
import SprintLineHeader from "./SprintLineHeader";

const SprintLine = ({ sprintPoints, id, cards, deleteSprint }) => {
  const cardPoints = cards.reduce((acc, card) => acc + card.cout, 0);

  return (
    <>
      <SprintLineHeader id={id} cardPoints={cardPoints} sprintPoints={sprintPoints} deleteSprint={deleteSprint} />
      <CardContainer id={id} cards={cards} currentCardPoints={cardPoints} maxSprintPoints={sprintPoints} />
    </>
  );
};

export default SprintLine;
