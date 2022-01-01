const initial = {
    comments: [],
  };
  
  export const reducer = (state = initial, { type, payload }) => {
    switch (type) {
      case "SET_COMMENTS":
        return { ...state,comments: state.comments.concat(payload) };
      default:
        return state;
    }
  };
  