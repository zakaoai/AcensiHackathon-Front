import CardService from "/services/CardService";

const { useState, useEffect } = require("react");

const useScrumTuto = () => {
  const sprintPoints = 4;
  const [cards, setCards] = useState([]);
  const [itemsMap, setItemsMap] = useState({ backlog: [] });
  useEffect(() => {
    CardService.getAllCards().then(cards => {
      setCards(cards);
      setItemsMap({ 1: [], backlog: cards });
    });
  }, []);
  CardService.getAllCards(cards => setCards(cards));

  return { itemsMap, setItemsMap, sprintPoints, postitList: cards };
};

export default useScrumTuto;
