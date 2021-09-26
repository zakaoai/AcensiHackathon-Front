import { Grid } from "@material-ui/core";
import React from "react";
import accueil_recap from "~/assets/images/accueil_recap.png";

/**
 * Activité d'accueil du projet
 */
function HomeActivity() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Vis ma vie en ESN</h1>
        <h2>Apprenez en vous amusant les métiers d’une ESN avec nos jeux sérieux ! </h2>
      </div>
      <Grid item>
        <Grid container justifyContent="center">
          <img style={{ maxWidth: "100%" }} src={accueil_recap} alt="logo" />
        </Grid>
      </Grid>
    </>
  );
}

export default HomeActivity;
