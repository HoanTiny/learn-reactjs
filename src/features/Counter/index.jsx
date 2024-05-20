import { useDispatch, useSelector } from "react-redux";
// import styled from "styled-components";
import { decrease, increase } from "./counterSlice";
import styles from "./styles.module.css";
import { Button } from "@mui/material";

function CounterFeature(props) {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const handleIncreaseClick = () => {
    const action = increase();
    dispatch(action);
  };

  const handleDecreaseClick = () => {
    const action = decrease();
    dispatch(action);
  };

  return (
    <div>
      <div className={styles.counter}>Counter Feature: {counter}</div>
      <Button
        sx={{
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          border: 0,
          borderRadius: 3,
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
          color: "white",
          height: 48,
          padding: "0 30px",
          margin: "10px",
          ":hover": {
            background: "linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)",
          },
        }}
        onClick={handleIncreaseClick}
      >
        Increase
      </Button>
      <Button
        sx={{
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          border: 0,
          borderRadius: 3,
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
          color: "white",
          height: 48,
          padding: "0 30px",
          ":hover": {
            background: "linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)",
          },
        }}
        onClick={handleDecreaseClick}
      >
        Decrease
      </Button>
    </div>
  );
}

export default CounterFeature;
