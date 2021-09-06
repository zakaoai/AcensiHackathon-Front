import { Grid } from "@material-ui/core";
import React from "react";
import hackathonAcensi from "/assets/images/Hackathon-Acensi.png";

/**
 * Activité d'accueil du projet
 */
function HomeActivity() {
  return (
    <>
      Bienvenue dans cette application du Hackathon Solidaire
      <Grid item>
        <Grid container justifyContent="center">
          <img style={{ maxWidth: "50%" }} src={hackathonAcensi} alt="logo" />
        </Grid>
      </Grid>
    </>
  );
}

export default HomeActivity;
