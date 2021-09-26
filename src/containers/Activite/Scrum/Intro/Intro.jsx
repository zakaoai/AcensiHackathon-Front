import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Slide1 from "./Slide1";
import SiteMap from "~/routes/SiteMap";

const Intro = () => {
  let { slideId } = useParams();
  slideId = slideId ? parseInt(slideId) : 1;
  return (
    <>
      <div>
        {slideId === 1 && <Slide1 />}
        {slideId === 2 && <Slide1 />}
        {slideId === 3 && <Slide1 />}
      </div>
      {slideId < 3 && (
        <Grid container justifyContent="flex-end" alignItems="right">
          <Button variant="contained" component={Link} to={`/app/scrum/intro/${slideId + 1}`}>
            suivant
          </Button>
        </Grid>
      )}
      {slideId === 3 && (
        <Grid container justifyContent="flex-end" alignItems="right">
          <Button variant="contained" component={Link} to={SiteMap.SCRUM.TUTO.path}>
            Accéder au tutoriel
          </Button>
        </Grid>
      )}
    </>
  );
};

export default Intro;
