import { Checkbox } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { tsToDateTimeFormat } from "../../helpers/date-time";
import { AddEditTodo } from "./AddEditTodo/AddEditTodo";
import { TodoList } from "./TodoList/TodoList";
import { Weather } from "./Weather/Weather";

const StyledTodoContainer = styled.div<{}>({
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: "5rem",
});

export const HomePage = () => {
  const fetchWeatherData = async () => {
    await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Cairo,eg&APPID=fef107e92556f62f0e9a4ebe9df784bf" //unAuthorized
    )
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log({ err });
      });
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const [todoList, setTodoList] = useState<any>([]);
  return (
    <div>
      <StyledTodoContainer>
        <AddEditTodo
          onSubmitTodo={(data: any) =>
            setTodoList((prevTodoList: any) => [
              ...prevTodoList,
              {
                cells: [
                  data.title,
                  data.description,
                  tsToDateTimeFormat(Date.now()),
                  <Checkbox />,
                ],
              },
            ])
          }
        />
        <TodoList todoList={todoList} />
      </StyledTodoContainer>
      <Weather />
    </div>
  );
};
