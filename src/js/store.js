import { createStore } from "redux";
import ToDoReducer from "./const/reducer/ToDoReducer";

const store = createStore(ToDoReducer);

export default store;
