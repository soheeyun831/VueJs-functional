import { withHooks, useState } from "vue-hooks";

const useCounterState = initialState => {
  const [count, setCount] = useState(initialState);

  const increase = () => {
    // vue에서 작업하는 것이다 보니 count를 건들 수 밖에 없는 아쉬움이..
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  return [count, { increase, decrease }];
};

const QuantityInput = withHooks((h, context) => {
  const [count, { increase, decrease }] = useCounterState(context.initialValue);

  const increaseButton = h("button", {
    domProps: {
      innerHTML: "+"
    },
    on: {
      click: increase
    }
  });

  const countText = h("span", `${count}개`);

  const decreaseButton = h("button", {
    domProps: {
      innerHTML: "-"
    },
    on: {
      click: decrease
    }
  });

  return h(
    "div",
    {
      class: "container"
    },
    [
      h("em", context.title),
      h(
        "div",
        {
          class: "button-container"
        },
        [increaseButton, countText, decreaseButton]
      )
    ]
  );
});

export default QuantityInput;
