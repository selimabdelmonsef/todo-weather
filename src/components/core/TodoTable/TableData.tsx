import React from "react";
import styled from "styled-components";
import { RowProps } from "./TableHead";

export const StyledTr = styled.tr<{
  backgroundColor: string;
  withHover: boolean;
  direction?: "rtl" | "ltr";
}>`
  color: "gray";
  transition: 0.1s all linear;
  overflow: hidden;
  background-color: #efefef;

  @media screen and (max-width: 1200px) : {
    max-height: 2.875rem;
  }
`;

export const StyledTd = styled.td<{ direction?: string }>`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1rem;
  color: inherit;
  text-align: center;
  background-color:"gray";
  border-bottom: 1px solid "gray";
  padding: 1rem 0.5rem;
  &:hover {
    color: inherit;
  };

  @media screen and (max-width: 1200px) {
    line-height: 0.875rem;
    font-size: 0.75rem;
    min-width: fit-content;
  },
`;

export const TableData = (props: {
  rows: RowProps[];
  backgroundColor: string;
  withHover: boolean;
  direction?: "rtl" | "ltr";
}): React.ReactElement => {
  return (
    <tbody>
      {props.rows &&
        props.rows.map((row, index) => (
          <React.Fragment key={index}>
            <StyledTr
              backgroundColor={props.backgroundColor}
              withHover={props.withHover}
              direction={props.direction}
            >
              {row.cells &&
                row.cells.map((cellContent: any, idx: number) => (
                  <StyledTd
                    key={`row${index}_data${idx}`}
                    direction={props.direction}
                  >
                    {cellContent}
                  </StyledTd>
                ))}
            </StyledTr>
          </React.Fragment>
        ))}
    </tbody>
  );
};
