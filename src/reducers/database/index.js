const initialState = {
  key: undefined,
  editor: [
    {
      type: "TITLE",
      content: "",
      id: `title-${
        new Date().getTime() - Math.floor(Math.random() * (100 - 1 + 1)) + 1
      }`,
    },
  ],
  focusIdx: 0,
  videolist: [],
  deletelist: [],
};
const database = (state = initialState, { type, idx, payload, index }) => {
  switch (type) {
    case "@layouts/INIT_KEY": {
      return {
        ...state,
        key: payload,
      };
    }
    case "@layouts/INIT_DELETELIST": {
      let arr = state.deletelist;
      arr.push(payload);
      return {
        ...state,
        deletelist: [...arr],
      };
    }
    case "@layouts/RESET": {
      state.videolist = [];
      return {
        ...state,
        editor: [
          {
            type: "TITLE",
            content: "",
            id: `title-${
              new Date().getTime() -
              Math.floor(Math.random() * (100 - 1 + 1)) +
              1
            }`,
          },
        ],
      };
    }

    case "@layouts/CHANGE_FOCUS":
      return {
        ...state,
        focusIdx: payload,
      };
    case "@layouts/CHANGE_EDITOR":
      return {
        ...state,
        editor: payload,
      };
    case "@layouts/CHANGE_TITLE": {
      var arr = state.editor;
      arr[idx].content = payload;
      return {
        ...state,
        editor: [...arr],
      };
    }
    case "@layouts/CHANGE_IMAGE": {
      var list = state.editor;
      list[idx].content[index] = payload;
      return {
        ...state,
        editor: [...list],
      };
    }

    default:
      return state;
  }
};
export default database;
