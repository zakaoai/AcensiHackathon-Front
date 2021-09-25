import React from "react";
import { PostItList } from "/components/CardContainer/CardContainer";
import { PostItCard } from "/components/Card/Card";
import SprintLineHeader from "/components/SprintLine/SprintLineHeader";
import useScrumSolution from "/hooks/useScrumSolution";
import SolutionMessage from "./SolutionsMessage/SolutionMessage";
import { useParams } from "react-router";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Solution = () => {
  const { gameId } = useParams();
  const { itemsMap, sprintPoints } = useScrumSolution(gameId);

  return (
    <>
      <div>Solution Tutoriel : Creer un projet web</div>
      {Object.keys(itemsMap).map(key => {
        const cards = itemsMap[key];
        const cardPoints = cards.reduce((acc, card) => acc + card.cout, 0);

        return (
          <div key={key}>
            <SprintLineHeader cardPoints={cardPoints} sprintPoints={sprintPoints} key={key} id={key} cards={cards} />
            <PostItList>
              {cards.map(item => (
                <PostItCard key={item.id} {...item} />
              ))}
            </PostItList>
          </div>
        );
      })}
      <SolutionMessage id={gameId} />
      <Grid container justifyContent="flex-end" alignItems="right">
        <Button variant="contained" component={Link} to={`/app/scrum/jeux/${parseInt(gameId) + 1}`}>
          Jeux suivant
        </Button>
      </Grid>
    </>
  );
};

export default Solution;
