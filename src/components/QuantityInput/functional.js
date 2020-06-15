export default {
  functional: true,
  props: {
    title: {
      require: true,
      type: String,
      default: "타이틀"
    },
    count: {
      type: Number,
      default: 0
    }
  },
  render(h, { props, listeners }) {
    const increaseButton = h("button", {
      domProps: {
        innerHTML: "+"
      },
      on: {
        click: listeners.increase
      }
    });

    const countText = h("span", `${props.count}개`);

    const decreaseButton = h("button", {
      domProps: {
        innerHTML: "-"
      },
      on: {
        click: listeners.decrease
      }
    });

    return h(
      "div",
      {
        class: "container"
      },
      [
        h("em", props.title),
        h(
          "div",
          {
            class: "button-container"
          },
          [increaseButton, countText, decreaseButton]
        )
      ]
    );
  }
};
