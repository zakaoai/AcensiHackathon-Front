import React from "react";
import Grid from "@mui/material/Grid";
import scrum_slide1 from "~/assets/images/scrum/scrum_slide1.png";

const Slide1 = () => (
  <>
    <Grid container justifyContent="center">
      <img style={{ maxWidth: "70%" }} src={scrum_slide1} alt="logo" />
    </Grid>
    <Grid container justifyContent="center">
      <p> L'accueil d'un Scrum Master dans une équipe </p>
    </Grid>

    <div id="pres_scrum_slide1" className='w-3/4 mx-auto'>
      <p>
        Le <span className="font-bold">Scrum Master</span> est une personne intégrée dans l’équipe chargée de mettre en
        place la méthode <span className="font-bold">Scrum</span>. Cette méthode est une des méthodes de gestion de
        projet nommée <span className="font-bold">Agile</span>. Son objectif est d’améliorer la productivité des
        équipes, tout en permettant une optimisation du produit grâce à des feedbacks réguliers avec les utilisateurs
        finaux.
      </p>
      <p>
        La méthode Scrum tire son nom du monde du rugby (scrum = mêlée), car les équipes agiles qui utilisent Scrum se
        réunissent le plus souvent possible afin de vérifier que le projet avance correctement, toujours prêts à
        réorienter ce dernier au fil de son avancement.
      </p>
      <p>
        En ingénierie logicielle, les pratiques agiles mettent en avant la collaboration entre des équipes
        auto-organisées et pluridisciplinaires et leurs clients. Elles s'appuient sur l'utilisation d'un cadre
        méthodologique léger mais suffisant, centré sur l'humain et la communication. Elles préconisent une
        planification adaptative, un développement évolutif, une livraison précoce et une amélioration continue, et
        elles encouragent des réponses flexibles au changement.
      </p>
    </div>
  </>
);

export default Slide1;
