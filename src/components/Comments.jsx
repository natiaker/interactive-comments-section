import { Box } from "@mui/material";
import data from "../data.json";
import Comment from "./Comment";

const Comments = () => {
  return (
    <Box>
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
