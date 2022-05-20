const initialState = {
  identification: {
    version: "0.0.1",
    productionPath: "production",
    agent: "desktop",
  },
  isLoading: false,
  toast: {
    isactive: false,
    msg: "",
  },
};
const config = (state = initialState, { type, payload }) => {
  switch (type) {
    case "@config/SET_AGENT":
      return {
        ...state,
        identification: {
          ...state.identification,
          agent: payload,
        },
      };
    case "@config/isLoading": {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case "@config/toast": {
      return {
        ...state,
        toast: payload,
      };
    }
    default:
      return state;
  }
};
export default config;
