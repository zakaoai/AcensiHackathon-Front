import React from "react";
import Message2 from "./Message2";
import Message3 from "./Message3";
import Message4 from "./Message4";

const IntroJeux = ({ id }) => (
  <>
    {id == 2 && <Message2 />}
    {id == 3 && <Message3 />}
    {id == 4 && <Message4 />}
  </>
);

export default IntroJeux;
