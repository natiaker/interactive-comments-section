import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledScore = styled(Stack)(({ theme }) =>
  theme.unstable_sx({
    alignItems: "center",
    justifyContent: "space-between",
    bgcolor: "background.default",
    padding: "12px 5px",
    borderRadius: "10px",
    width: "40px",
    height: "100px",
    color: "primary.light",
    marginRight: "24px",
  })
);

const ScoreComp = ({ initScore }) => {
  const [score, setScore] = useState(initScore);

  const increaseScore = () => {
    const newScore = score + 1;
    setScore(newScore);
  };

  const decreaseScore = () => {
    const newScore = score - 1;
    setScore(newScore);
  };

  return (
    <StyledScore>
      <AddIcon
        onClick={increaseScore}
        sx={{ cursor: "pointer", "&:hover": { color: "primary.main" } }}
      />
      <Typography
        color='primary'
        fontWeight='500'
      >
        {score}
      </Typography>
      <RemoveIcon
        onClick={decreaseScore}
        sx={{ cursor: "pointer", "&:hover": { color: "primary.main" } }}
      />
    </StyledScore>
  );
};

export default ScoreComp;
