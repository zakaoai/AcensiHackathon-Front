import React from "react";

import styled from "styled-components";

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

const SprintLine = ({ sprintPoints, id, cards }) => {
  const cardPoints = cards.reduce((acc, card) => acc + card.cout, 0);

  return (
    <>
      <div>
        <h1>
          Sprint {id} ({cardPoints} /{sprintPoints}pts)
        </h1>
        <SprintArrow />
      </div>

      <CardContainer id={id} cards={cards} />
    </>
  );
};

export default SprintLine;
