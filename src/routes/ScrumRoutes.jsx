import React from "react";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";

/* Liste des Path à utiliser */

import SiteMap from "./SiteMap";
import Jeux from "../containers/Activite/Scrum/Jeux/Jeux";
import Tuto from "/containers/Activite/Scrum/Tuto/Tuto";
import Intro from "/containers/Activite/Scrum/Intro/Intro";
const ScrumRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}${SiteMap.SCRUM.INTRO.path}`}>
        <Intro />
      </Route>
      <Route path={`${path}${SiteMap.SCRUM.TUTO.path}`}>
        <Tuto />
      </Route>
      <Route path={`${path}${SiteMap.SCRUM.JEUX.path}`}>
        <Jeux />
      </Route>
      <Route path={`${path}*`}>
        <Redirect to={`${path}${SiteMap.SCRUM.INTRO.path}`} />
      </Route>
    </Switch>
  );
};

export default ScrumRoutes;
