import { Container } from "@mui/material";
import Comments from "./components/Comments";
import AddComment from "./components/AddComment";

function App() {
  return (
    <Container
      sx={{
        padding: { xs: "16px" },
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Comments />
      <AddComment />
    </Container>
  );
}

export default App;
