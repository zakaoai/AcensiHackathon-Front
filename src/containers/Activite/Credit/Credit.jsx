import React from "react";

const Credit = () => (
  <>
    {/*<header>
      <nav className="w-full h-12 bg-blue-800 text-white flex justify-center items-center">
        <h1>Be ESN : Crédits</h1>
      </nav>
    </header>*/}
    <main className="flex flex-col items-center">
      <article className="w-3/4 shadow-2xl p-5 my-4 border border-gray-200 flex flex-col items-center text-center">
        <p className="w-1/2">
          Be ESN est une application Web dite "Serious Game" née d'un projet de Hackaton Solidaire au sein de la société{" "}
          <a href="http://www.acensi.fr">Acensi</a>.
        </p>
        <i className="far fa-lightbulb mt-8 mb-4 text-4xl"></i>
        <span>
          <span className="font-bold">Idée originale </span>:<br />
          Amélie Bacle, Alexis Saludo, Ludwig Sécheresse.
        </span>
        <i className="fab fa-react mt-8 mb-4 text-4xl"></i>
        <p>
          <span className="font-bold">Front-end dev.</span> :<br />
          Alexis Saludo, Ludwig Sécheresse
          <br />
          <br />
          <span className="font-bold">Front-end technologie</span> :<br />
          React
        </p>

        <i className="fab fa-laravel mt-8 mb-4 text-4xl"></i>
        <p>
          <span className="font-bold">Back-end dev.</span> :<br />
          Amélie Bacle, Ludwig Sécheresse
          <br />
          <br />
          <span className="font-bold">Back-end technologie</span> :<br />
          Lumen (by Laravel)
        </p>

        <i className="fab fa-regular fa-image mt-8 mb-4 text-4xl"></i>
        <p>
          <span className="font-bold">Contenus</span> :<br />
          <span> Textes : Amélie Bacle </span>
          <br />
          <span> Illustrations : Amélie Bacle </span>
        </p>

        <i className="far fa-copy mt-8 mb-4 text-4xl"></i>
        <p>
          <span className="font-bold">Textes sources</span> :
          <br />
        </p>
        <ul>
          <li>
            <a href="https://www.tuleap.org/fr/agile/comprendre-methode-agile-scrum-10-minutes/">
              Comprendre la methode agile scrum en 10 minutes
            </a>
          </li>
          <li>
            <a href="https://fr.wikipedia.org/wiki/M%C3%A9thode_agile">Méthode Agile</a>
          </li>
          <li>
            <a href="https://www.cegos.fr/fiches-metiers/les-metiers-de-la-gestion-de-projets/fiche-metier-product-owner">
              Fiche metier product owner
            </a>
          </li>
        </ul>
      </article>
    </main>
  </>
);

export default Credit;
