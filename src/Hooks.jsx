import { useState, useReducer } from "react";

export const Hooks = (props) => {
  // const [count, setState] = useState(0);
  const [count, setCount] = useState(0);
  const [titile, setTitle] = useState("");
  const [option, setOption] = useState(1);

  const [data, use] = useReducer((state, payload) => {
    // console.log(payload.type);
    switch (payload.type) {
      case "plus":
        return state + 1;
      case "minus":
        return state - 1;
      case "bymout":
        return state + option.payload;
      default:
        return state;
    }
  }, 1);

  const [counter, dispatch] = useReducer(Reducer, 0);
  const onSelect = (e) => {
    console.log(e.target.value);
    setOption(Number(e.target.value));
  };

  // const plus = () => setCount(count + 1);
  const minus = () => setCount(count - 1);

  return (
    <div>
      <h1>Hooks Component useReducer</h1>
      <h1>State {count}</h1>
      {/* <button onClick={plus}>+</button> */}
      <div>
        <select defaultValue={1} name="" id="" onChange={onSelect}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button onClick={() => dispatch({ type: "byamout", payload: option })}>
        {option}
      </button>
      <hr />
      <h1>Reduser {data}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
    </div>
  );
};
