import { connect } from "react-redux";

export let Form = ({ state, dispatch }) => {
  let from;
  let to;
  let value;
  const changeFormat = (field) => {
    if (from.value === to.value) {
      let array = ["decimal", "binary", "octal", "hex"];
      if (state.format.from === to.value) {
        to.value = state.format.from;
        array = array.filter((element) => element !== state.format.from);
        from.value = array[Math.floor(Math.random() * array.length)];
      } else if (state.format.to === from.value) {
        from.value = state.format.to;
        array = array.filter((element) => element !== state.format.to);
        to.value = array[Math.floor(Math.random() * array.length)];
      }
    }
    if (field === "from") {
      dispatch({ type: "CHANGE_IN_FORMAT_FORM", from: from.value });
    } else if (field === "to") {
      dispatch({ type: "CHANGE_IN_FORMAT_TO", to: to.value });
    }
  };
  const executeConversion = (number) => {
    const arrayOfTheNumber = number.split("");
    let isValid = true;
    //for binary
    if (state.format.from === "binary") {
      if (state.format.to === "decimal") {
        arrayOfTheNumber.forEach((num) => {
          if (Number(num) !== 0 && Number(num) !== 1 && num !== ".") {
            value.value = "";
            isValid = false;
          }
        });
      } else {
        arrayOfTheNumber.forEach((num) => {
          if (Number(num) !== 0 && Number(num) !== 1) {
            value.value = "";
            isValid = false;
          }
        });
      }
      if (isValid) {
        if (state.format.to === "decimal") {
          dispatch({ type: "BINARY_TO_DECIMAL", number: String(number) });
        } else if (state.format.to === "octal") {
          dispatch({ type: "BINARY_TO_OCTAL", number: String(number) });
        } else if (state.format.to === "hex") {
          dispatch({ type: "BINARY_TO_HEX", number: String(number) });
        }
      }
    }
    //for decimal
    if (state.format.from === "decimal") {
      if (state.format.to === "binary") {
        arrayOfTheNumber.forEach((num) => {
          if (
            Number(num) !== 0 &&
            Number(num) !== 1 &&
            Number(num) !== 2 &&
            Number(num) !== 3 &&
            Number(num) !== 4 &&
            Number(num) !== 5 &&
            Number(num) !== 6 &&
            Number(num) !== 7 &&
            Number(num) !== 8 &&
            Number(num) !== 9 &&
            num !== "."
          ) {
            value.value = "";
            isValid = false;
          }
        });
      } else {
        arrayOfTheNumber.forEach((num) => {
          if (
            Number(num) !== 0 &&
            Number(num) !== 1 &&
            Number(num) !== 2 &&
            Number(num) !== 3 &&
            Number(num) !== 4 &&
            Number(num) !== 5 &&
            Number(num) !== 6 &&
            Number(num) !== 7 &&
            Number(num) !== 8 &&
            Number(num) !== 9
          ) {
            value.value = "";
            isValid = false;
          }
        });
      }
      if (isValid) {
        if (state.format.to === "binary") {
          dispatch({ type: "DECIMAL_TO_BINARY", number: String(number) });
        } else if (state.format.to === "octal") {
          dispatch({ type: "DECIMAL_TO_OCTAL", number: String(number) });
        } else if (state.format.to === "hex") {
          dispatch({ type: "DECIMAL_TO_HEX", number: String(number) });
        }
      }
    }
    //for octal
    if (state.format.from === "octal") {
      arrayOfTheNumber.forEach((num) => {
        if (
          Number(num) !== 0 &&
          Number(num) !== 1 &&
          Number(num) !== 2 &&
          Number(num) !== 3 &&
          Number(num) !== 4 &&
          Number(num) !== 5 &&
          Number(num) !== 6 &&
          Number(num) !== 7
        ) {
          value.value = "";
          isValid = false;
        }
      });
      if (isValid) {
        if (state.format.to === "binary") {
          dispatch({ type: "OCTAL_TO_BINARY", number: String(number) });
        } else if (state.format.to === "decimal") {
          dispatch({ type: "OCTAL_TO_DECIMAL", number: String(number) });
        } else if (state.format.to === "hex") {
          dispatch({ type: "OCTAL_TO_HEX", number: String(number) });
        }
      }
    }
    // for hex
    if (state.format.from === "hex") {
      arrayOfTheNumber.forEach((num) => {
        if (
          Number(num) !== 0 &&
          Number(num) !== 1 &&
          Number(num) !== 2 &&
          Number(num) !== 3 &&
          Number(num) !== 4 &&
          Number(num) !== 5 &&
          Number(num) !== 6 &&
          Number(num) !== 7 &&
          Number(num) !== 8 &&
          Number(num) !== 9 &&
          num !== "A" &&
          num !== "B" &&
          num !== "C" &&
          num !== "D" &&
          num !== "E" &&
          num !== "F"
        ) {
          value.value = "";
          isValid = false;
        }
      });
      if (isValid) {
        if (state.format.to === "binary") {
          dispatch({ type: "HEX_TO_BINARY", number: String(number) });
        } else if (state.format.to === "decimal") {
          dispatch({ type: "HEX_TO_DECIMAL", number: String(number) });
        } else if (state.format.to === "octal") {
          dispatch({ type: "HEX_TO_OCTAL", number: String(number) });
        }
      }
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
          <button
            className="btn btn-warning py-0 mt-3"
            onClick={() => {
              executeConversion(value.value);
            }}
          >
            Calculate
          </button>
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

const mapStateToProps = (state) => {
  return { state };
};

Form = connect(mapStateToProps)(Form);
