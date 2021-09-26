import React from "react";
import { BrowserRouter } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Routing from "~/routes/Routing";
import { object } from "prop-types";

const App = () => (
  <Container style={{"maxWidth": '100%', paddingLeft: 0, paddingRight: 0}}>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </Container>
);

App.propTypes = {
  history: object
};

export default App;
