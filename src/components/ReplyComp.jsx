import React from "react";
import ReplyIcon from "@mui/icons-material/Reply";
import { Stack } from "@mui/material";
import styled from "@emotion/styled";

const StyledReplyBtn = styled(Stack)(({ theme }) =>
  theme.unstable_sx({
    flexDirection: "row",
    fontWeight: "500",
    color: "primary.main",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": { color: "primary.light" },
  })
);

const ReplyComp = () => {
  return (
    <StyledReplyBtn>
      <ReplyIcon />
      Reply
    </StyledReplyBtn>
  );
};

export default ReplyComp;
