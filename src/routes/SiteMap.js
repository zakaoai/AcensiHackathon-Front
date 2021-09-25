const SiteMap = {
  ACCUEIL: {
    path: "/app/home",
    label: "Accueil"
  },
  SCRUM: {
    path: "/app/scrum",
    label: "Scrum",
    INTRO: { path: "/intro", label: "Introduction jeux scrum" },
    TUTO: { path: "/tuto", label: "Tuto jeux scrum" },
    JEUX: { path: "/jeux/:jeuId", label: "Jeux scrum" }
  }
};

export default SiteMap;
