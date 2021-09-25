import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const PostIt = styled.div`
  width: 100px;
  height: 100px;
  padding: 20px;
  background-color: ${props => (props.isDragDisabled ? "red" : props.isDragging ? "lightgreen" : "#ffffa5")};
  box-shadow: 2px 4px 6px #444;
  -moz-box-shadow: 2px 4px 6px #444;
  -webkit-box-shadow: 2px 4px 6px #444;
  transform: rotate(2deg);
  -moz-transform: rotate(2deg);
  -webkit-transform: rotate(2deg);
  -o-transform: rotate(2deg);
  -ms-transform: rotate(2deg);
  border-bottom-right-radius: 60px 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Footer = styled.div`
  text-align: right;
  width: 100%;
`;

const Card = ({ id, libelle, cout, lifePoint, index }) => {
  const isDragDisabled = lifePoint === 0;
  return (
    <Draggable key={id} draggableId={`${id}`} index={index} isDragDisabled={isDragDisabled}>
      {(provided, snapshot) => (
        <PostIt
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          isDragDisabled={isDragDisabled}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <Content>{libelle}</Content>
          <Footer>{cout} Pts</Footer>
        </PostIt>
      )}
    </Draggable>
  );
};

export default Card;
