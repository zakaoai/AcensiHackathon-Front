import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Menu from "/containers/Menu/Menu";

/* Composant de page NotFound */

/* Liste des Path à utiliser */
import HomeActivity from "../containers/Activite/Home/HomeActivity";

import SiteMap from "./SiteMap";
import Scrum from "/containers/Activite/Scrum/Scrum";

const Routing = () => (
  <>
    <Menu />
    <Switch>
      <Route path={SiteMap.ACCUEIL.path}>
        <HomeActivity />
      </Route>
      <Route path={SiteMap.SCRUM.path}>
        <Scrum />
      </Route>
      <Route path="*">
        <Redirect to={SiteMap.ACCUEIL.path} />
      </Route>
    </Switch>
  </>
);

export default Routing;
