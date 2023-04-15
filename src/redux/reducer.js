import {
  START_LOADING,
  END_LOADING,
  GET_QUOTE,
  BOOKMARK_THE_QUOTE,
  GET_QUOTE_BY_TAGS,
  REMOVE_THE_BOOKMARK,
} from "./actiontypes";

const initialState = {
  loading: false,
  quote: {},
  error: "",
  bookmarks: [],
};

const checkBookmarks = (quote, state) => {
  let flag = true;
  state.forEach((element) => {
    if (element._id === quote._id) flag = false;
  });
  if (flag === true) state.push(quote);
  return state;
};
const removeFromBookmark = (id, state) => {
  state = state.filter((element) => element._id !== id);
  return state;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case END_LOADING:
      return {
        ...state,
        loading: false,
      };
    case GET_QUOTE:
      return {
        ...state,
        quote: action.payload,
      };
    case GET_QUOTE_BY_TAGS:
      return {
        ...state,
        quote: action.payload,
      };
    case BOOKMARK_THE_QUOTE:
      const temp1 = {
        ...state,
        bookmarks: checkBookmarks(action.payload, state.bookmarks),
      };
      localStorage.setItem("bookmarks", JSON.stringify(temp1));
      return temp1;
    case REMOVE_THE_BOOKMARK:
      const temp2 = {
        ...state,
        bookmarks: removeFromBookmark(action.payload, state.bookmarks),
      };
      localStorage.setItem("bookmarks", JSON.stringify(temp2));
      return temp2;
    default:
      return state;
  }
};

export default reducer;
