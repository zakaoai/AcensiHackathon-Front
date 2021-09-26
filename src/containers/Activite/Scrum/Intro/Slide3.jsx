import React from "react";
import Grid from "@mui/material/Grid";
import scrum_slide3 from "~/assets/images/scrum/scrum_slide3.png";

const Slide3 = () => (
  <>
    <Grid container justifyContent="center">
      <img style={{ maxWidth: "40%" }} src={scrum_slide3} alt="logo" />
    </Grid>
    <Grid container justifyContent="center">
      <p> Aide visuelle de gestion de projet avec un tableau blanc et des post-it </p>
    </Grid>
    <div id="pres_scrum_slide3" className="w-3/4 mx-auto">
      <p>
        Chaque tâche du <span className="font-bold">backlog</span> peut être notée sur un
        <span className="font-bold">post it</span>, de façon très synthétique et visible de loin. Lors du{" "}
        <span className="font-bold">sprint planning</span> l’équipe sélectionne les tâches qui entreront dans le
        prochain <span className="font-bold">sprint</span>. La sélection se fait selon la priorité du sujet,
        l’organisation des différents métiers de l’équipe, le budget, le temps à investir ou la criticité de la tâche.
      </p>
      <p className="font-italic">C’est cette activité que nous vous proposons de travailler avec notre jeu sérieux.</p>
    </div>
  </>
);

export default Slide3;
