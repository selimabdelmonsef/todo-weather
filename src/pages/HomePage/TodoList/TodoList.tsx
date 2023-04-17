import styled from "styled-components";
import { RowProps } from "../../../components/core/TodoTable/TableHead";
import { TodoTable } from "../../../components/core/TodoTable/TodoTable";

const StyledTodoListContainer = styled.div<{}>({
  border: " 1px solid darkolivegreen",
  padding: "5rem 15rem",
});

export interface TodoListProps {
  todoList: RowProps[];
}
export const TodoList = (props: TodoListProps) => {
  const columns = [
    {
      cell: "Title",
    },
    {
      cell: "Description",
    },
    {
      cell: "Created At",
    },
    {
      cell: "Checked",
    },
  ];
  return (
    <StyledTodoListContainer>
      TODO LIST
      <TodoTable rows={props.todoList} columns={columns} />
    </StyledTodoListContainer>
  );
};
