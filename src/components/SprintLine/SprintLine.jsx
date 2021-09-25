import React from "react";
import IconButton from "@mui/material/IconButton";

import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";
import CardContainer from "../CardContainer/CardContainer";

const SprintArrow = styled.div`
  height: 2px; /* line width */
  width: 95%; /* line length */
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  background: #aaa;
  &:before {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    border: 5px solid transparent;
    top: -4px;
    right: -15px;
    border-left: 15px solid #aaa;
  }
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SprintLine = ({ sprintPoints, id, cards, deleteSprint }) => {
  const cardPoints = cards.reduce((acc, card) => acc + card.cout, 0);

  return (
    <>
      <FlexBox>
        <h1>
          Sprint {id} ({cardPoints} /{sprintPoints}pts)
        </h1>

        <IconButton aria-label="delete" onClick={deleteSprint(id)}>
          <DeleteIcon sx={{ fontSize: 40, color: red[500] }} />
        </IconButton>

        <SprintArrow />
      </FlexBox>

      <CardContainer id={id} cards={cards} />
    </>
  );
};

export default SprintLine;
