import React from "react";
import useScrumScore from "/hooks/useScrumScore";

const ScrumScore = () => {
  const { userPoints } = useScrumScore();

  return <>Score : {userPoints}</>;
};
export default ScrumScore;
