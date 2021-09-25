import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

/* Liste des Path à utiliser */

import SiteMap from "./SiteMap";
import Jeux from "../containers/Activite/Scrum/Jeux/Jeux";
import Tuto from "/containers/Activite/Scrum/Tuto/Tuto";
import Intro from "/containers/Activite/Scrum/Intro/Intro";
import Solution from "/containers/Activite/Scrum/Solution/Solution";
const ScrumRoutes = () => {
  return (
    <Switch>
      <Route path={SiteMap.SCRUM.INTRO.path}>
        <Intro />
      </Route>
      <Route path={SiteMap.SCRUM.TUTO.path}>
        <Tuto />
      </Route>
      <Route path={SiteMap.SCRUM.JEUX.path}>
        <Jeux />
      </Route>
      <Route path={SiteMap.SCRUM.SOLUTION.path}>
        <Solution />
      </Route>
      <Route path={`*`}>
        <Redirect to={"/app/scrum/intro/1"} />
      </Route>
    </Switch>
  );
};

export default ScrumRoutes;
