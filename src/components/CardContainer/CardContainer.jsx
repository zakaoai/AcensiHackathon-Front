import React, { useContext } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Card from "../Card/Card";
import { CardContext } from "/containers/Activite/Scrum/Scrum";

const PostItList = styled.div`
  background-color: ${props =>
    props.isDraggingOver ? (props.isOverMaxSprintPoints ? "red " : "skyblue") : "lightgrey"};
  display: flex;
  padding: 8px;
  overflow-x: auto;
  height: 160px;
  margin-bottom: 8px;
`;

const CardContainer = ({ id, cards, currentCardPoints, maxSprintPoints }) => {
  const cardsList = useContext(CardContext);

  return (
    <Droppable droppableId={id} direction="horizontal">
      {(provided, snapshot) => {
        console.log("provided", provided);
        console.log("snapshot", snapshot);

        const card = cardsList.find(card => card.id === snapshot.draggingOverWith);
        console.log("card", card);
        const isOverMaxSprintPoints = currentCardPoints + card?.cout > maxSprintPoints;
        console.log("isOverMaxSprintPoints", isOverMaxSprintPoints);
        return (
          <PostItList
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            isOverMaxSprintPoints={isOverMaxSprintPoints}
            id={id}
            {...provided.droppableProps}>
            {cards.map((item, index) => (
              <Card key={item.id} index={index} {...item} />
            ))}
            {provided.placeholder}
          </PostItList>
        );
      }}
    </Droppable>
  );
};

export default CardContainer;
