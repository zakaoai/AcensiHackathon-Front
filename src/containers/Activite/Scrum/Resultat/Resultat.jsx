import React from "react";
import useScrumScore from "~/hooks/useScrumScore";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import SiteMap from "~/routes/SiteMap";

const Resultat = () => {
  const { userPoints } = useScrumScore();

  return (
    <>
      <p>Merci d'avoir joué !</p>
      <p>Votre score final est de {userPoints} points !</p>
      <Button variant="contained" component={Link} to={SiteMap.ACCUEIL.path}>
        Retourner à l'accueil
      </Button>
    </>
  );
};

export default Resultat;
