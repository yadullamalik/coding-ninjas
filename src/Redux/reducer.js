import { SHOW } from "./action";

const initState = {
  show: "timer",
};
export const reducer = (store = initState, { type }) => {
  switch (type) {
    case SHOW:
      return {
        ...store,
        show: "button",
      };
    default:
      return store;
  }
};
