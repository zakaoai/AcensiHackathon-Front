import React from "react";
import Grid from "@mui/material/Grid";
import scrum_slide2 from "~/assets/images/scrum/scrum_slide2.png";

const Slide2 = () => (
  <>
    <Grid container justifyContent="center">
      <img style={{ maxWidth: "40%" }} src={scrum_slide2} alt="logo" />
    </Grid>
    <Grid container justifyContent="center">
      <p> Processus de fabrication Agile et chronologie des cérémonies </p>
    </Grid>
    <div id="pres_scrum_slide2" className="w-3/4 mx-auto">
      <p>
        Dans un projet en Scrum, le <span className="font-bold">backlog</span> est le cœur central de tout produit
        développé en Scrum. Il permet de collecter les attentes clients (<span className="font-bold">user stories</span>
        ) qui serviront de panier dans lequel piocher pour la planification des sprints. Un{" "}
        <span className="font-bold">sprint</span> est un intervalle de temps court (1 mois maximum), souvent appelé
        itération, pendant lequel l’équipe de développement va concevoir, réaliser et tester de nouvelles
        fonctionnalités.
      </p>
      <p>
        En Scrum, la vie d’un projet est rythmée par un ensemble de réunions appelées{" "}
        <span className="font-bold">cérémonies</span> avec un objectif bien défini pour chacune d'elles.
      </p>
      <ul>
        <li id="definitions_scrum">
          <span className="font-bold">Sprint planning</span>: La réunion de planification du sprint est l’une des étapes
          les plus importantes d’un projet Scrum. Lors de cette réunion, l’équipe de développement sélectionne les
          éléments prioritaires du backlog qu’elle pense pouvoir réaliser au cours du sprint. Cette planification
          aboutit à la création d’un plan de sprint. C’est un travail collaboratif de toute l’équipe Scrum.
        </li>
        <li>
          <span className="font-bold">Stand-up quotidien ou daily</span> : Elle permet de discuter de l’avancement des
          tâches, d’éventuels problèmes, de faire marcher l’entraide et résoudre les blocages possibles.
        </li>
        <li>
          <span className="font-bold">Rétrospective</span> : La rétrospective de Sprint est certainement celle qui peut
          être le principal vecteur d’amélioration continue. Il s’agit d’une cérémonie qui s’effectue avec l’ensemble de
          l’équipe de développement une fois le sprint terminé. En discutant librement en prenant du recul avec le
          sprint écoulé, l’équipe cherche à améliorer les intéractions entre individus, à gagner en bien-être et en
          motivation, en qualité produit, et de façon globale, à améliorer sa productivité
        </li>
      </ul>
    </div>
  </>
);

export default Slide2;
