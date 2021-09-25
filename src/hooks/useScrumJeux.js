import GameService from "/services/GameService";

const { useState, useEffect } = require("react");

const useScrumJeux = (id, enableLifePoint = false) => {
  const sprintPoints = 60;
  const [cards, setCards] = useState([]);
  const [itemsMap, setItemsMap] = useState({ backlog: [] });
  useEffect(() => {
    GameService.getGameCards(id).then(cards => {
      if (enableLifePoint) cards = cards.map(card => ({ ...card, lifePoint: 3 }));
      setCards(cards);
      setItemsMap({ 1: [], backlog: cards });
    });
  }, []);

  return { itemsMap, setItemsMap, sprintPoints, postitList: cards };
};

export default useScrumJeux;
