import styled from "styled-components";

export const StylesTableContainer = styled.div({
  overflowX: "auto", //to alow scroll in x-direction (widths)
});

export const StyledTable = styled.table`
  width: 100%;
  background-color: "gray";
  border-radius: 3px;
  border-collapse: collapse;
`;

export const StyledTitle = styled.div`
  font-weight: bold;
  font-size: 26px;
  color: "gray";
  margin-bottom: 10px;
`;

export const StyledTableHeader = styled.div({
  display: "flex",
  justifyContent: "space-between",
});
