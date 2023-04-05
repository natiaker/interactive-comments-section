import { Container } from "@mui/material";
import Comments from "./components/Comments";

function App() {
  return (
    <Container
      sx={{
        padding: { xs: "16px" },
        minHeight: "100vh",
      }}
    >
      <Comments />
    </Container>
  );
}

export default App;
