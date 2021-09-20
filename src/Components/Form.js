import { connect } from "react-redux";

export let Form = ({ state, dispatch }) => {
  let from;
  let to;
  let value;
  const changeFormat = (field) => {
    if (from.value == to.value) {
      from.value = "decimal";
      to.value = "binary";
    }
    if (field === "from") {
      dispatch({ type: "CHANGE_IN_FORMAT_FORM", from: from.value });
    } else if (field === "to") {
      dispatch({ type: "CHANGE_IN_FORMAT_TO", to: to.value });
    }
  };
  const executeConversion = (number) => {
    const arrayOfTheNumber = number.split("");
    if (state.from === binary) {
      arrayOfTheNumber.map((num) => {
        if (Number(num) !== 0 || Number(num) !== 1) {
          value.value = "";
        }
      });
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center mb-5">
        <p className="display-3 text-muted text-center my-5">
          Quickly convert numbers
        </p>
        <div className="col-xl-6 col-12 d-flex flex-column justify-content-center">
          <label>Enter the number</label>
          <input
            type="text"
            className="w-100"
            id="amount"
            placeholder="Enter the number"
            ref={(node) => (value = node)}
          />
        </div>
        <div className="col-xl-4 col-6 d-flex justify-content-center">
          <button className="btn btn-warning py-0 mt-3">Calculate</button>
        </div>
      </div>
      <div className="row justify-content-center mb-5">
        <div className="col-xl-6 col-12">
          <label>From</label>
          <select
            className="form-select"
            aria-label="Default select example"
            ref={(node) => (from = node)}
            onChange={() => {
              changeFormat("from");
            }}
          >
            <option value="decimal">Decimal</option>
            <option value="binary">Binary</option>
            <option value="octal">Octal</option>
            <option value="hex">Hex</option>
          </select>
        </div>
        <div className="col-xl-6 col-12">
          <label>To</label>
          <select
            className="form-select"
            aria-label="Default select example"
            ref={(node) => (to = node)}
            onChange={() => {
              changeFormat("to");
            }}
          >
            <option value="binary">Binary</option>
            <option value="decimal">Decimal</option>
            <option value="octal">Octal</option>
            <option value="hex">Hex</option>
          </select>
        </div>
      </div>
    </div>
  );
};

Form = connect()(Form);
