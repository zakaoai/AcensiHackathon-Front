const { useState } = require("react");

const useScrumJeux = () => {
  const sprintPoints = 60;
  const cardLifePoint = 3;
  const postitList = [
    { id: "1", libelle: "Post it 1", cout: 10, ordre: 1 },
    { id: "2", libelle: "Post it 2", cout: 10, ordre: 2 },
    { id: "3", libelle: "Post it 3", cout: 20, ordre: 3 },
    { id: "4", libelle: "Post it 4", cout: 40, ordre: 4 },
    { id: "5", libelle: "Post it 5", cout: 30, ordre: 5 },
    { id: "6", libelle: "Post it 6", cout: 10, ordre: 6 }
  ].map(postit => ({ ...postit, lifePoint: cardLifePoint }));

  const [itemsMap, setItemsMap] = useState({ 1: [], backlog: postitList });

  return { itemsMap, setItemsMap, sprintPoints, postitList };
};

export default useScrumJeux;
