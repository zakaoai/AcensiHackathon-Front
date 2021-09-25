export const onDragEnd =
  (itemsMap, setItemsMap, sprintPoints) =>
  ({ source, destination }) => {
    if (!destination) {
      return;
    }
    const current = [...itemsMap[source.droppableId]];

    if (source.droppableId === destination.droppableId) {
      const result = Array.from(current);
      const [removed] = result.splice(source.index, 1);
      if (source.droppableId !== "backlog") {
        removed.lifePoint -= 1;
      }
      result.splice(destination.index, 0, removed);

      setItemsMap({ ...itemsMap, [source.droppableId]: result });
    } else {
      const next = [...itemsMap[destination.droppableId]];
      const target = current[source.index];

      const cardPoints = next.reduce((acc, card) => acc + card.cout, 0);
      if (destination.droppableId === "backlog" || cardPoints + target.cout <= sprintPoints) {
        target.lifePoint -= 1;
        // remove from original
        current.splice(source.index, 1);
        // insert into next
        next.splice(destination.index, 0, target);

        setItemsMap({ ...itemsMap, [source.droppableId]: current, [destination.droppableId]: next });
      }
    }
  };

export const addSprint = (itemsMap, setItemsMap) => () => {
  setItemsMap({ ...itemsMap, [`${Object.keys(itemsMap).length}`]: [] });
};

export const deleteSprint = (itemsMap, setItemsMap) => id => () => {
  const { backlog } = itemsMap;
  const newEntries = Object.entries(itemsMap)
    .filter(([key]) => key !== "backlog")
    .reduce((acc, [key, value]) => {
      if (key > id) {
        acc[key - 1] = value;
      }
      if (key === id) {
        backlog.push(...value);
      }
      if (key < id) {
        acc[key] = value;
      }
      return acc;
    }, {});

  setItemsMap({ backlog, ...newEntries });
};
