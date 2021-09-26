import React from "react";
import product_owner from "~/assets/images/personnage/product_owner.png";
import Grid from "@mui/material/Grid";

const PO = () => (
  <>
    <div id="page_product_owner">
      <h3>Bientôt disponible des jeux sérieux pour découvrir le métier de Product Owner.</h3>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <img style={{ maxWidth: "50%" }} src={product_owner} alt="logo" />
      </Grid>
      <h3>Product owner</h3>
      <p>
        Le Product Owner (PO) est un chef de projet en mode agile. Il est en charge de satisfaire les besoins des
        clients en menant à bien la livraison d’un produit de qualité. Il sert d’interface entre l’équipe technique,
        l’équipe marketing et les clients. Au sein de son groupe de travail, il est le premier responsable de la
        conception du produit.
      </p>
    </div>
  </>
);

export default PO;
