import React, { useState } from "react";
import ScrumUserContext from "~/contexts/ScrumUserContext";

import ScrumRoutes from "~/routes/ScrumRoutes";

const Scrum = () => {
  const [userState, setUserState] = useState({ gameScores: [] });

  return (
    <>
      <ScrumUserContext.Provider value={{ userState, setUserState }}>
        <ScrumRoutes />
      </ScrumUserContext.Provider>
    </>
  );
};

export default Scrum;
