import { Button, Checkbox, Input, InputGroup } from "@chakra-ui/react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/atoms/todoListAtom";

export interface TodoItem {
  id: number;
  text: string;
  isComplete: boolean;
}

const replaceItemAtIndex = (
  arr: TodoItem[],
  index: number,
  newValue: TodoItem
) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr: TodoItem[], index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

interface TodoItemViewProps {
  item: TodoItem;
  key: number;
}

const TodoItemView = ({ item, key }: TodoItemViewProps) => {
  const [todoList, setTodoList] = useRecoilState<TodoItem[]>(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <InputGroup key={key} my={4}>
      <Input type="text" value={item.text} onChange={editItemText} />
      <Checkbox
        size="lg"
        mx={4}
        isChecked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <Button onClick={deleteItem}>Slett</Button>
    </InputGroup>
  );
};

export default TodoItemView;
