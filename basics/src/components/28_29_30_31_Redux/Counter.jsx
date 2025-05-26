import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
} from "../../redux/slice/counterSlice";
import { useState } from "react";

function Counter() {
  const count = useSelector((state) => state.counterStore.count);
  const dispatch = useDispatch();
  const [multiplier, setMultiplier] = useState(10);

  return (
    <div className="mt-2 pt-3 pl-2 text-center">
      <div className="pb-2 h4" style={{ color: "red" }}>
        Counter : {count}
      </div>
      <div className="row">
        <div className="p-4 col-12 col-md-6">
          <div className="border p-4">
            <h4 className="text-success pb-2">Basic Counter</h4>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(increment())}
            >
              Add
            </button>{" "}
            &nbsp;
            <button
              className="btn btn-danger"
              onClick={() => dispatch(decrement())}
            >
              Remove
            </button>
          </div>
        </div>
        <div className="p-4 col-12 col-md-6">
          <div className="border p-4">
            <h4 className="text-success pb-2">Multiplier Counter</h4>
            <div className="row">
              <div className="col-4 p-1">
                <input
                  name="multiplier"
                  type="text"
                  placeholder="Multiplier..."
                  className="form-control"
                  onChange={(e) => setMultiplier(e.target.value)}
                ></input>
              </div>
              <div className="col-4 p-1">
                <button
                  className="btn btn-primary form-control"
                  onClick={() =>
                    dispatch(incrementMultiplier(Number(multiplier)))
                  }
                >
                  Add
                </button>
              </div>
              <div className="col-4 p-1">
                <button
                  className="btn btn-danger form-control"
                  onClick={() =>
                    dispatch(decrementMultiplier(Number(multiplier)))
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
