import React from "react";
import Message1 from "./Message1";

const SolutionMessage = ({ id }) => <>{id == 1 && <Message1 />}</>;

export default SolutionMessage;
