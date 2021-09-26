import Grid from "@mui/material/Grid";
import React from "react";
import ingenieur_affaire from "~/assets/images/personnage/ingenieur_affaire.png";
import jeux from "~/assets/images/IngeAffaire/jeux.png";

const IngeAffaire = () => (
  <>
    <div className='w-3/4 mx-auto'>
    <div id="page_inge_affaire">
      <h3>Bientôt disponible des jeux sérieux pour découvrir le métier d’ingénieur d’affaires dans une ESN.</h3>
    </div>
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid sm={6}>
        <img style={{ maxWidth: "100%" }} src={ingenieur_affaire} alt="logo" />
      </Grid>
      <Grid sm={6}>
        <img style={{ maxWidth: "100%" }} src={jeux} alt="logo" />
      </Grid>
    </Grid>

    <h3>Ingénieur d'affaires</h3>
    <p>
      A la fois technicien et commercial, l'ingénieur d'affaires en ESN agit comme un spécialiste de la vente et de la
      négociation de prestations de produits et services complexes à forte valeur ajoutée.
    </p>
    <p>
      Entre autres activités, il est recruteur de compétences pour le compte de l'ESN en direction d'entreprises à la
      recherche de compétences externes manquantes sur un projet.
    </p>
    <p>
      Nous vous proposons d’apprendre à trouver le bon profil de compétences pour le bon métier que le client demande.
      Ferez-vous le bon choix ?
    </p>
    </div>
  </>
);

export default IngeAffaire;
