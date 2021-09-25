import React from "react";

import styled from "styled-components";

import CardContainer from "../CardContainer/CardContainer";

const StickyBottom = styled.div`
  background-color: lightgrey;
  position: -webkit-sticky;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const Backlog = ({ id, cards }) => {
  return (
    <StickyBottom>
      <h1>Backlog</h1>

      <CardContainer id={id} cards={cards} />
    </StickyBottom>
  );
};

export default Backlog;
