import { createContext } from "react";

const UserContext = createContext({
  userList: [],
  editData: {},
  addNewUser: () => {},
  onDeleteUser: () => {},
  onEditUser: () => {},
  onUpdateUser: () => {},
});

export default UserContext;
