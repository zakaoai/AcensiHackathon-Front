import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Slide1 from "./Slide1";
import SiteMap from "~/routes/SiteMap";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";

const Intro = () => {
  let { slideId } = useParams();
  slideId = slideId ? parseInt(slideId) : 1;
  return (
    <>
      <div>
        {slideId === 1 && <Slide1 />}
        {slideId === 2 && <Slide2 />}
        {slideId === 3 && <Slide3 />}
      </div>
      {slideId < 3 && (
        <Grid container justifyContent="flex-end" alignItems="right" width='75%' margin='0 auto' className='w-3/4 mx-auto' style={{margin: '0 auto !important', width: '75% !important'}}>
          <Button variant="contained" component={Link} to={`/app/scrum/intro/${slideId + 1}`} className='mb-2'>
            suivant
          </Button>
        </Grid>
      )}
      {slideId === 3 && (
        <Grid container justifyContent="flex-end" alignItems="right" className='w-3/4 mx-auto' width='75%' margin='0 auto' style={{margin: '0 auto !important', width: '75% !important'}}>
          <Button variant="contained" component={Link} to={SiteMap.SCRUM.TUTO.path} className='mb-2'>
            Accéder au tutoriel
          </Button>
        </Grid>
      )}
    </>
  );
};

export default Intro;
