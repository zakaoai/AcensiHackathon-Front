import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Menu from "~/containers/Menu/Menu";

/* Composant de page NotFound */

/* Liste des Path à utiliser */
import HomeActivity from "~/containers/Activite/Home/HomeActivity";

import SiteMap from "./SiteMap";
import Scrum from "~/containers/Activite/Scrum/Scrum";
import PO from "~/containers/Activite/PO/PO";
import IngeAffaire from "~/containers/Activite/IngeAffaire/IngeAffaire";
import Credit from "~/containers/Activite/Credit/Credit";

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
      <Route path={SiteMap.PO.path}>
        <PO />
      </Route>
      <Route path={SiteMap.INGE_AFFAIRE.path}>
        <IngeAffaire />
      </Route>
      <Route path={SiteMap.CREDIT.path}>
        <Credit />
      </Route>
      <Route path="*">
        <Redirect to={SiteMap.ACCUEIL.path} />
      </Route>
    </Switch>
  </>
);

export default Routing;
