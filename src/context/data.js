import { v4 as uuidv4 } from "uuid";

export const initialState = {
  todos: [
    {
      id: uuidv4(),
      name: "dummy todo 1",
      complete: false,
    },
    {
      id: uuidv4(),
      name: "dummy todo 2",
      complete: false,
    },
    {
      id: uuidv4(),
      name: "dummy todo 3",
      complete: true,
    },
  ],
  todo: { id: uuidv4(), name: "useContext", complete: true },
};
