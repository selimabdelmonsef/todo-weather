import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage";
import styled from "styled-components";
import { UNIFI_IMAGES } from "./constants/images";

const StyledTODOContainer = styled.img<{}>({
  width: "12rem",
  display: "flex",
  margin: "auto",
  marginTop: "2rem",
});

function App() {
  return (
    <div>
      <StyledTODOContainer src={UNIFI_IMAGES.unifi_logo}></StyledTODOContainer>
      <HomePage />
    </div>
  );
}

export default App;
