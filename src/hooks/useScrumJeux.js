import { useHistory } from "react-router";
import ScrumUserContext from "~/contexts/ScrumUserContext";
import GameService from "~/services/GameService";

const { useState, useEffect, useContext } = require("react");

const useScrumJeux = (id, enableLifePoint = false) => {
  const sprintPoints = 60;
  const [cards, setCards] = useState([]);
  const [itemsMap, setItemsMap] = useState({ backlog: [] });
  const { setUserState } = useContext(ScrumUserContext);
  const history = useHistory();

  useEffect(() => {
    GameService.getGameCards(id).then(cards => {
      if (enableLifePoint) cards = cards.map(card => ({ ...card, lifePoint: 3 }));
      setCards(cards);
      setItemsMap({ 1: [], backlog: cards });
    });
  }, []);

  const envoyerScore = () => {
    const sprintAsArray = Object.keys(itemsMap)
      .filter(key => key !== "backlog")
      .map(key => itemsMap[key].map(item => item.id));

    GameService.getScore(id, sprintAsArray).then(score => {
      setUserState(state => {
        const { gameScores } = state;
        gameScores[id] = score;
        return { ...state, gameScores };
      });
      history.push(`/app/scrum/solution/${id}`);
    });
  };

  return { itemsMap, setItemsMap, sprintPoints, postitList: cards, envoyerScore };
};

export default useScrumJeux;
