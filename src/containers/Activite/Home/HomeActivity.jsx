import { Grid } from "@material-ui/core";
import React from "react";
import accueil_recap from "~/assets/images/accueil_recap.png";

/**
 * Activité d'accueil du projet
 */
function HomeActivity() {
  return (
    <>
      <div className="w-full flex flex-col items-center font-bold text-2xl my-3">
        <h1 className="">Vis ma vie en ESN !</h1>
      </div>
      <p className="px-2 mb-5 md:text-center">
        Apprenez en vous amusant les métiers d’une ESN avec nos jeux sérieux !{" "}
      </p>
      <Grid item>
        <Grid container justifyContent="center">
          <img style={{ maxWidth: "50%" }} src={accueil_recap} alt="logo" />
        </Grid>
      </Grid>
    </>
  );
}

export default HomeActivity;
