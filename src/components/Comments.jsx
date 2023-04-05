import { Box } from "@mui/material";
import data from "../data.json";
import Comment from "./Comment";

const Comments = () => {
  console.log(data.comments);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {data.comments.map(comment => {
        return (
          <Comment
            key={comment.id}
            {...comment}
          />
        );
      })}
    </Box>
  );
};

export default Comments;
