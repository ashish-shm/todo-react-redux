import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  CLEAR_COMPLETED,
  
} from "./types";
import uuid from "react-uuid";

const initialState = {
  todo: [],
  activeTab: "All",
};

export let reducer = function (state = initialState.todo, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.payload,
          completed: false,
          id: uuid(),
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed);
   
    default:
      return state;
  }
};

export let activeTabReducer = function (
  state = initialState.activeTab,
  action
) {
  switch (action.type) {
    case "change":
      return action.payload;

    default:
      return state;
  }
};
