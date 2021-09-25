import React from "react";
import IconButton from "@mui/material/IconButton";

import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";

const SprintArrow = styled.div`
  height: 2px; /* line width */
  width: 95%; /* line length */
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  background: #aaa;
  &:before {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    border: 5px solid transparent;
    top: -4px;
    right: -15px;
    border-left: 15px solid #aaa;
  }
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SprintLineHeader = ({ id, cardPoints, sprintPoints, deleteSprint }) => (
  <FlexBox>
    <h1>
      Sprint {id} ({cardPoints} /{sprintPoints}pts)
    </h1>
    {deleteSprint && (
      <IconButton aria-label="delete" onClick={deleteSprint(id)}>
        <DeleteIcon sx={{ fontSize: 40, color: red[500] }} />
      </IconButton>
    )}

    <SprintArrow />
  </FlexBox>
);

export default SprintLineHeader;
