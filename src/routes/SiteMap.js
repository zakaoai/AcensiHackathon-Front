const SiteMap = {
  ACCUEIL: {
    path: "/app/home",
    label: "Accueil"
  },
  SCRUM: {
    path: "/app/scrum",
    label: "Scrum",
    INTRO: { path: "/app/scrum/intro/:slideId", label: "Introduction jeux scrum" },
    TUTO: { path: "/app/scrum/tuto", label: "Tuto jeux scrum" },
    JEUX: { path: "/app/scrum/jeux/:gameId", label: "Jeux scrum" },
    SOLUTION: { path: "/app/scrum/solution/:gameId", label: "Solution jeux scrum" }
  }
};

export default SiteMap;
