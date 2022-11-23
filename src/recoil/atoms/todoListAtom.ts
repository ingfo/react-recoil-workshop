import { atom } from "recoil";
import { TodoItem } from "../../components/TodoItemView";

export const todoListState = atom<TodoItem[]>({
  key: "TodoList",
  default: [],
});

export const todoListFilterState = {};
