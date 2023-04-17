import { StyledTable, StylesTableContainer } from "./TodoTable.styles";
import { TableHead, TableProps } from "./TableHead";
import { TableData } from "./TableData";
import { useEffect, useState } from "react";

export const TodoTable = (props: TableProps) => {
  const [rows, setRows] = useState<[]>(props.rows as []);

  useEffect(() => {
    setRows(props?.rows as []);
  }, [props?.rows]);

  return (
    <StylesTableContainer>
      <StyledTable>
        <TableHead columns={props.columns} />
        <TableData
          rows={rows}
          backgroundColor={String(props.backgroundColor)}
          withHover={Boolean(props.withHover)}
        />
      </StyledTable>
    </StylesTableContainer>
  );
};
