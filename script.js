let calculator = document.querySelector(".calculator");
let button = document.querySelectorAll(".button");
let total = document.querySelector(".total");
let decimal = document.querySelector(".decimal");
let operator = document.querySelectorAll(".operator");
let value1;
let value2;
let value;
let op;
calculator.addEventListener("click", (e) => {
  if (e.target.matches(".button")) {
    value = parseFloat(total.textContent + e.target.textContent);
    if (e.target.textContent == "AC") {
      total.textContent = 0;
      return 0;
    }

    operator.forEach((operatorButton) => {
      operatorButton.addEventListener("click", (e) => {
        let button = e.target;
        operator.forEach(
          (btn) => btn !== button && btn.classList.remove("pressed-operator")
        );
        button.classList.add("pressed-operator");

        if (button.textContent == "=") {
          button.classList.remove("pressed-operator");
        }
      });
    });

    if (
      e.target.textContent == "÷" ||
      e.target.textContent == "x" ||
      e.target.textContent == "-" ||
      e.target.textContent == "+"
    ) {
      value1 = parseFloat(value);
      value = 0;
      op = e.target.textContent;
    }

    if (e.target.textContent == "=") {
      value2 = parseFloat(value);
      console.log(value1, value2, op);
      value = operate(value1, value2, op);
    }

    if (e.target.textContent == ".") {
      if (!total.textContent.includes(".")) {
        value = total.textContent + ".";
      }
      total.textContent = value;
    }

    total.textContent = value;
  }
});

const operate = (x, y, op) => {
  switch (op) {
    case "÷":
      return division(x, y);
    case "x":
      return multiply(x, y);
    case "-":
      return subtraction(x, y);
    case "+":
      return addition(x, y);
    default:
      return 0;
  }
};

const division = (x, y) => {
  return x / y;
};

const multiply = (x, y) => {
  return x * y;
};

const subtraction = (x, y) => {
  return x - y;
};

const addition = (x, y) => {
  return x + y;
};
