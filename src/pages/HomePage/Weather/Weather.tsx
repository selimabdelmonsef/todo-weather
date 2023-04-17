import styled from "styled-components";

const StyledWeatherContainer = styled.div<{}>({
  justifyContent: "right",
  display: "flex",
  marginTop: "5rem",
  marginRight: "4rem",
});
export const Weather = () => {
  return <StyledWeatherContainer>Weather</StyledWeatherContainer>;
};
