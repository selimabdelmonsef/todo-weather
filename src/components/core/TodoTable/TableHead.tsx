import React from "react";
import styled from "styled-components";

export interface TableProps {
  rows: RowProps[]; // table rows
  columns: ColumnProps[]; // table columns (head)
  backgroundColor?: string; // backgroundColor for table rows
  withHover?: boolean; // wheather to apply the highlighted rows on hover
  className?: string;
  title?: string;
  titleActionBtn?: React.ReactNode;
  direction?: "ltr" | "rtl";
  canExportToExcel?: boolean;
  excelRows?: RowProps[];
  excelColumns?: any[];
  serachTooltip?: string;
  childrenFilterOptions?: React.ReactNode;
}

export type CellType = string | React.ReactElement;

export interface RowProps {
  id?: string; // row id to be used as key prop and for custom search
  cells: CellType[]; // table cell content
  data?: { timeStamp?: number } | any;
}

export interface ColumnProps {
  id?: string; // column id to be used as key prop
  cell: CellType; // table head
}

export const StyledTh = styled.th<{ direction?: string }>`
  background-color: "red";
  color: "red";
  padding-block: 1rem;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 30px;
  text-transform: uppercase;
  text-align: center;
  padding: 1rem 0.5rem;
`;

export const TableHead = (props: {
  columns: ColumnProps[];
  direction?: "rtl" | "ltr";
}): React.ReactElement => {
  return (
    <thead>
      <tr>
        {props.columns &&
          props.columns.map((column, index) => (
            <StyledTh
              key={column.id || `head_${index}`}
              direction={props.direction}
            >
              {column.cell}
            </StyledTh>
          ))}
      </tr>
    </thead>
  );
};
