import "./App.css";
import Users from "./components/Users";
import AddNewUser from "./components/AddNewUser";
import EditUser from "./components/EditUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./context/UserContext";
import { useEffect, useState } from "react";

const getLocalData = () => {
  let list = localStorage.getItem("userList");
  if (list) {
    return JSON.parse(localStorage.getItem("userList"));
  } else {
    return [];
  }
};

function App() {
  const [userList, setUserList] = useState(getLocalData());
  const [editData, setEditData] = useState("");

  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(userList));
  }, [userList]);

  const updateNewUser = (newUser) => {
    setUserList((prev) => [...prev, newUser]);
    localStorage.setItem("userList", JSON.stringify(userList));
  };
  const deleteUser = (id) => {
    const filteredUser = userList.filter((each) => each.id !== id);
    setUserList(filteredUser);
  };

  const editUser = (user) => {
    setEditData(user);
  };

  const updateUser = (updatedUser) => {
    setUserList((prev) =>
      prev.map((each) => {
        if (updatedUser.id === each.id) {
          return updatedUser;
        }
        return each;
      })
    );
  };

  return (
    <UserContext.Provider
      value={{
        userList,
        editData,
        addNewUser: updateNewUser,
        onDeleteUser: deleteUser,
        onEditUser: editUser,
        onUpdateUser: updateUser,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="new-user" element={<AddNewUser />} />
          <Route path="edit-user" element={<EditUser editData={editData} />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
