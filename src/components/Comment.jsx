import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ReplyIcon from "@mui/icons-material/Reply";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";

const ScoreComp = styled(Stack)(({ theme }) =>
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

const Comment = ({ content, createdAt, score, user, replies }) => {
  return (
    <Card
      sx={{
        p: { sm: 3, xs: 2 },
        marginBottom: "20px",
        bgcolor: "white",
        maxWidth: { md: "730px" },
      }}
    >
      <Stack
        direction='row'
        alignItems='center'
      >
        <ScoreComp>
          <AddIcon />
          <Typography
            color='primary'
            fontWeight='500'
          >
            {score}
          </Typography>
          <RemoveIcon />
        </ScoreComp>
        <Box>
          <Stack
            direction='row'
            justifyContent='space-between'
          >
            <CardHeader
              sx={{ paddingTop: "0", paddingBottom: "0" }}
              avatar={<Avatar src={user.image.webp} />}
              title={
                <Typography
                  display={"inline-block"}
                  fontWeight='700'
                  color='text.secondary'
                >
                  {user.username}
                </Typography>
              }
              subheader={
                <Typography
                  display={"inline-block"}
                  margin={"0 16px"}
                >
                  {createdAt}
                </Typography>
              }
            />
            <Stack
              direction='row'
              fontWeight='500'
              color='primary.main'
              alignItems='center'
            >
              <ReplyIcon />
              Reply
            </Stack>
          </Stack>
          <CardContent
            sx={{ paddingBottom: "0px !important", color: "text.primary" }}
          >
            {content}
          </CardContent>
        </Box>
      </Stack>
    </Card>
  );
};

export default Comment;
