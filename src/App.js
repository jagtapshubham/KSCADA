import Navbar from "./Navbar";
import "./App.css";
import TopCardRow from "./TopCardRow";
import { Box } from "@mui/material";
import MainCards from "./MainCards";

function App() {
  return (
    <Box sx={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
      <Navbar></Navbar>
      <TopCardRow></TopCardRow>
      <MainCards></MainCards>
    </Box>
  );
}

export default App;
