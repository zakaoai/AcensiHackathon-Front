import React from "react";

const Rules = () => {
  return (
    <>
      <h2>Règles du jeu :</h2>
      <p>
        Objectif : L’équipe doit réaliser une amélioration sur un produit. Pour y parvenir, chaque étape du processus de
        fabrication sera associée à une tâche. Vous les retrouverez dans le backlog en bas de l’application. Chacune de
        ces tâches coûteront un nombre de points définis pour la réaliser.
      </p>
      <p>
        Vous devez alors ordonner les tâches en les plaçant dans un ou plusieurs sprint ayant chacun un total de 60
        points. Il faut prendre en compte les coûts des tâches mais également leur chronologie relatives. Gardez à
        l’esprit le processus de fabrication(-> lien vers la slide 2).
      </p>
      <p>
        Pour cela, vous devez déplacer les tâches du backlog dans une ligne de Sprint. L’ordre de réalisation dans le
        sprint est celui du sens de lecture (de gauche à droite). Vous pouvez les déplacer autant de fois que vous le
        souhaitez. Vous pouvez également ajouter des sprint. Attention toutefois à ne pas rajouter de sprint inutile.
      </p>
      Bon jeu !
    </>
  );
};

export default Rules;
