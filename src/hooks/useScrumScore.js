import { useContext, useEffect, useState } from "react";
import ScrumUserContext from "~/contexts/ScrumUserContext";

const useScrumScore = () => {
  const { userState } = useContext(ScrumUserContext);
  const [userPoints, setUserPoints] = useState(0);

  useEffect(() => {
    const { gameScores } = userState;
    if (gameScores) {
      setUserPoints(gameScores.reduce((acc, curr) => acc + curr, 0));
    }
  }, [userState]);

  return { userPoints };
};

export default useScrumScore;
