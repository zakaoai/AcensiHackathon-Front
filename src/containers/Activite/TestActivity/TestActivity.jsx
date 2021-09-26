import React, { useState } from "react";

import { DragDropContext } from "react-beautiful-dnd";

import CardContainer from "~/components/CardContainer/CardContainer";

// fake data generator
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const TestActivity = () => {
  const [items, setItems] = useState(getItems(6));
  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    setItems(reorder(items, result.source.index, result.destination.index));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <CardContainer id="1" cards={items} />
      <CardContainer id="2" cards={[]} />
    </DragDropContext>
  );
};

export default TestActivity;
