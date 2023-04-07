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
import ScoreComp from "./ScoreComp";
import ReplyComp from "./ReplyComp";

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
        <ScoreComp initScore={score} />
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
            <ReplyComp />
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
