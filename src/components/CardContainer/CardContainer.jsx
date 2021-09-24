import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Card from "../Card/Card";

const PostItList = styled.div`
  background-color: ${props => (props.isDraggingOver ? "skyblue" : "lightgrey")};
  display: flex;
  padding: 8px;
  overflow: auto;
  height: 160px;
  margin-bottom: 8px;
`;

const CardContainer = ({ id, cards }) => {
  return (
    <Droppable droppableId={id} direction="horizontal">
      {(provided, snapshot) => (
        <PostItList ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver} {...provided.droppableProps}>
          {cards.map((item, index) => (
            <Card key={item.id} index={index} id={item.id} libelle={item.libelle} cout={item.cout} />
          ))}
          {provided.placeholder}
        </PostItList>
      )}
    </Droppable>
  );
};

export default CardContainer;
