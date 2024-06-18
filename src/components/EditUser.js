import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import Navbar from "./Navbar";
import { useState } from "react";

const EditUser = ({ editData }) => {
  const navigate = useNavigate();
  const [name, setName] = useState(editData.name);
  const [email, setEmail] = useState(editData.email);
  const [phone, setPhone] = useState(editData.phone);
  return (
    <UserContext.Consumer>
      {(value) => {
        const { onUpdateUser } = value;
        const onSubmitForm = (event) => {
          event.preventDefault();
          const updatedUser = { id: editData.id, name, email, phone };
          onUpdateUser(updatedUser);
          alert("User Updated");
          navigate("/");
        };
        return (
          <>
            <Navbar />
            <form className="form-container" onSubmit={onSubmitForm}>
              <div className="input-container">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="input-container">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="text"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
              <button type="submit">Update</button>
            </form>
          </>
        );
      }}
    </UserContext.Consumer>
  );
};

export default EditUser;
