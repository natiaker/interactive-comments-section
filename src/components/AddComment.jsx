import React, { useState } from "react";
import data from "../data.json";
import { Avatar, Button, Card, TextField } from "@mui/material";

const AddComment = () => {
  const [isReply, setIsReply] = useState(false);
  return (
    <Card
      sx={{
        p: { sm: 3, xs: 2 },
        marginBottom: "20px",
        bgcolor: "white",
        maxWidth: { md: "730px" },
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <Avatar src={data.currentUser.image.webp} />
      <TextField
        label='Add a comment'
        variant='outlined'
        multiline
        minRows={4}
        sx={{ mx: 2, width: isReply ? "418px" : "506px" }}
      />
      <Button
        variant='contained'
        sx={{ padding: "12px 30px" }}
      >
        {isReply ? "Reply" : "Send"}
      </Button>
    </Card>
  );
};

export default AddComment;
