import React, { useState } from "react";
import ScrumUserContext from "~/contexts/ScrumUserContext";

import ScrumRoutes from "~/routes/ScrumRoutes";

const Scrum = () => {
  const [userState, setUserState] = useState({ gameScores: [] });

  return (
    <>
      <div>
        <h1>Scrum</h1>
      </div>
      <ScrumUserContext.Provider value={{ userState, setUserState }}>
        <ScrumRoutes />
      </ScrumUserContext.Provider>
    </>
  );
};

export default Scrum;
