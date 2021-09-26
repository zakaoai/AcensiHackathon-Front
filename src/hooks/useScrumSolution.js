import GameService from "~/services/GameService";

const { useState, useEffect } = require("react");

const useScrumSolution = id => {
  const sprintPoints = 60;

  const [itemsMap, setItemsMap] = useState({});
  useEffect(() => {
    const cardPromise = GameService.getGameCards(id);
    const solutionPromise = GameService.getGameSolution(id);

    Promise.all([cardPromise, solutionPromise]).then(([cards, solution]) => {
      const mappedSolution = solution.reduce((acc, item, index) => {
        acc[index + 1] = item.map(cardId => cards.find(c => c.id === cardId));
        return acc;
      }, {});

      setItemsMap(mappedSolution);
    });
  }, []);

  return { itemsMap, setItemsMap, sprintPoints };
};

export default useScrumSolution;
