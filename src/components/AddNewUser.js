import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import Navbar from "./Navbar";
import { v4 as uuidv4 } from "uuid";

const AddNewUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const navigate = useNavigate();

  return (
    <UserContext.Consumer>
      {(value) => {
        const { addNewUser } = value;
        const onSubmitForm = (event) => {
          event.preventDefault();
          const newUser = {
            id: uuidv4(),
            name,
            email,
            phone,
          };
          addNewUser(newUser);
          alert("User Added Successfully");
          setEmail("");
          setName("");
          setPhone("");
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
              <button type="submit">Submit</button>
            </form>
          </>
        );
      }}
    </UserContext.Consumer>
  );
};

export default AddNewUser;
