import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TodoList from "../../components/TodoList";
import queryString from "query-string";
import TodoForm from "../../components/TodoForm";
ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || "all";
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredStatus(params.status || "all");
  }, [location.search]);

  const handleTodoClick = (todo, idx) => {
    // clone current array to the new one
    const newTodoList = [...todoList];

    // toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    // update todo list
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilteredStatus("all");
    const queryParams = { status: "all" };
    navigate({
      pathname: location.pathname, // Sử dụng location.pathname để giữ nguyên đường dẫn hiện tại
      search: `?${queryString.stringify(queryParams)}`,
    });
  };

  const handleShowCompletedClick = () => {
    setFilteredStatus("completed");
    const queryParams = { status: "completed" };
    navigate({
      pathname: location.pathname, // Sử dụng location.pathname để giữ nguyên đường dẫn hiện tại
      search: `?${queryString.stringify(queryParams)}`,
    });
  };

  const handleShowNewClick = () => {
    setFilteredStatus("new");
    const queryParams = { status: "new" };
    navigate({
      pathname: location.pathname, // Sử dụng location.pathname để giữ nguyên đường dẫn hiện tại
      search: `?${queryString.stringify(queryParams)}`,
    });
  };

  const renderedTodoList = useMemo(() => {
    return todoList.filter(
      (todo) => filteredStatus === "all" || filteredStatus === todo.status
    );
  }, [todoList, filteredStatus]);

  const handleTodoFormSubmit = (values) => {
    console.log("Form submit:", values);
  };

  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
